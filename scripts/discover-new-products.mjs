import fs from "node:fs/promises";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const days = Number(process.env.DISCOVERY_DAYS || 7);
const queries = [
  `("desktop agent" OR "computer use agent" OR "AI cowork") (launch OR unveil OR announce) when:${days}d`,
  `("桌面智能体" OR "AI工作台" OR "智能体工作台") (发布 OR 上线 OR 推出) when:${days}d`,
  `(OpenClaw OR "类 OpenClaw") (发布 OR 上线 OR 推出 OR launch) when:${days}d`,
];

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function readTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeXml(match?.[1]?.trim() || "");
}

function parseRss(xml) {
  return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(([block]) => ({
    title: readTag(block, "title"),
    link: readTag(block, "link"),
    publishedAt: readTag(block, "pubDate"),
    sourceLabel: readTag(block, "source"),
  }));
}

function normalize(value) {
  return value.toLowerCase().replace(/[（(].*?[）)]/g, "").replace(/[^a-z0-9\u4e00-\u9fff]+/g, "");
}

function candidateId(link) {
  let hash = 2166136261;
  for (const char of link) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return `new-product-${(hash >>> 0).toString(16)}`;
}

const context = { window: {} };
vm.runInNewContext(await fs.readFile(new URL("data/site-data.js", root), "utf8"), context);
const knownNames = context.window.RESEARCH_DATA.products
  .map((product) => normalize(product.name))
  .filter((name) => name.length >= 4);
const candidatePath = new URL("data/product-candidates.json", root);
const existing = JSON.parse(await fs.readFile(candidatePath, "utf8"));
const byId = new Map(existing.map((item) => [item.id, item]));
let added = 0;

for (const query of queries) {
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=zh-CN&gl=CN&ceid=CN:zh-Hans`;
  try {
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 AgentProductIntelligence/1.0" } });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    for (const item of parseRss(await response.text()).slice(0, 20)) {
      const normalizedTitle = normalize(item.title);
      const isKnown = knownNames.some((name) => normalizedTitle.includes(name));
      const hasLaunchSignal = /\b(launch(?:es|ed)?|unveil[sd]?|announce[sd]?)\b|发布|上线|推出|首发/iu.test(item.title);
      const hasProductSignal = /agent|cowork|computer use|openclaw|智能体|工作台/iu.test(item.title);
      if (isKnown || !hasLaunchSignal || !hasProductSignal || !item.link) continue;
      const id = candidateId(item.link);
      if (byId.has(id)) continue;
      byId.set(id, {
        id,
        title: item.title,
        sourceUrl: item.link,
        sourceLabel: item.sourceLabel || "Google News 收录信源",
        publishedAt: item.publishedAt ? new Date(item.publishedAt).toISOString() : null,
        discoveredAt: new Date().toISOString(),
        status: "pending",
        reviewChecklist: ["确认它是独立产品而非普通功能", "确认属于研究范围", "找到官方一手信源", "补充厂商、类型与官网"],
      });
      added += 1;
    }
  } catch (error) {
    console.warn(`跳过新产品查询：${error.message}`);
  }
}

const merged = [...byId.values()]
  .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)))
  .slice(0, 100);
await fs.writeFile(candidatePath, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`新增 ${added} 条新产品候选。`);
