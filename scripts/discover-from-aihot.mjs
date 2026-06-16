import fs from "node:fs/promises";
import vm from "node:vm";

// 从 AI HOT（aihot.virxact.com）补充候选线索。
// 角色：只做「发现」——把更多线索喂进 candidates.json / product-candidates.json，
// 是否进正式时间线仍由 auto-review-and-publish.mjs 的严格阈值决定。
// 引用源始终用 aihot 返回的原文 url 和原始 source，aihot 本身只是发现渠道，不作为信源出现。

const root = new URL("../", import.meta.url);
const base = "https://aihot.virxact.com";
const days = Number(process.env.DISCOVERY_DAYS || 7); // aihot items 端点最长 7 天，与现有发现窗口一致
const maxProducts = Number(process.env.MAX_PRODUCTS || 0);
const minScore = Number(process.env.MIN_SIGNAL_SCORE || 5);

// aihot 的 /api/public/* 走 nginx UA 黑名单，默认 curl UA 会 403。
// 必须带浏览器 UA；aihot-skill/0.2.0 后缀让对方区分 skill 流量。
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 aihot-skill/0.2.0";

const highImpactPatterns = [
  [/\b(acquire[ds]?|acquisition|shut down|shutdown|discontinue[ds]?|launch(?:es|ed)?)\b|收购|并购|停止运营|停服|正式发布|全新发布/iu, 6, "产品发布或公司级事件"],
  [/computer use|multi[- ]?agent|agent teams?|long[- ]?term memory|remote control|enterprise governance|长期记忆|多智能体|多 Agent|远程控制|企业治理|审批|审计|意识功能|意识能力|记忆|反思|技能进化|自我进化|成长/iu, 4, "关键能力变化"],
  [/pricing|subscription|funding|raised|partnership|available to|定价|订阅|融资|合作|开放使用|全面开放/iu, 3, "商业或开放范围变化"],
  [/\b(announce[sd]?|introduc(?:e[ds]?|ing)|release[sd]?|unveil[sd]?)\b|发布|上线|推出|宣布|首发|升级/iu, 2, "明确事件词"],
];

const lowSignalPattern = /bug fixes?|minor update|performance improvement|优化体验|修复|小幅改进|例行更新|日常更新/iu;

function scoreTitle(title) {
  let score = 0;
  const reasons = [];
  for (const [pattern, points, reason] of highImpactPatterns) {
    if (pattern.test(title)) {
      score += points;
      reasons.push(`${reason} +${points}`);
    }
  }
  if (lowSignalPattern.test(title)) {
    score -= 4;
    reasons.push("疑似日常更新 -4");
  }
  return { score, reasons };
}

function cleanProductName(name) {
  return name.replace(/[（(].*?[）)]/g, "").replace(/桌面版/g, "").trim();
}

function normalize(value = "") {
  return value.toLowerCase().replace(/[（(].*?[）)]/g, "").replace(/[^a-z0-9一-鿿]+/g, "");
}

function fnv1a(value) {
  let hash = 2166136261;
  for (const char of value) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
}

const updateCandidateId = (productSlug, link) => `${productSlug}-${fnv1a(`${productSlug}:${link}`)}`;
const productCandidateId = (link) => `new-product-${fnv1a(link)}`;

async function loadWindowData(path, key) {
  const context = { window: {} };
  vm.runInNewContext(await fs.readFile(new URL(path, root), "utf8"), context);
  return context.window[key];
}

async function fetchItems(params) {
  const url = `${base}/api/public/items?${new URLSearchParams(params)}`;
  const response = await fetch(url, { headers: { "user-agent": userAgent } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const body = await response.json();
  return Array.isArray(body.items) ? body.items : [];
}

const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

const research = await loadWindowData("data/site-data.js", "RESEARCH_DATA");
const selectedProducts = maxProducts ? research.products.slice(0, maxProducts) : research.products;

// ---- A. 给现有产品按名称补料 → candidates.json ----
const existingCandidates = JSON.parse(await fs.readFile(new URL("data/candidates.json", root), "utf8"));
const candidatesById = new Map(existingCandidates.map((item) => [item.id, item]));
let addedUpdates = 0;

for (const product of selectedProducts) {
  const query = cleanProductName(product.name);
  if (query.length < 2) continue;
  try {
    const items = await fetchItems({ q: query, since, take: "30" });
    for (const item of items) {
      if (!item.url) continue;
      const { score, reasons } = scoreTitle(`${item.title || ""} ${item.summary || ""}`);
      if (score < minScore) continue;
      const id = updateCandidateId(product.slug, item.url);
      if (candidatesById.has(id)) continue;
      candidatesById.set(id, {
        id,
        productSlug: product.slug,
        productName: product.name,
        title: item.title,
        sourceUrl: item.url,
        sourceLabel: item.source || "AI HOT 收录信源",
        sourceType: "media",
        publishedAt: item.publishedAt || null,
        discoveredAt: new Date().toISOString(),
        score,
        reasons,
        status: "pending",
      });
      addedUpdates += 1;
    }
  } catch (error) {
    console.warn(`跳过 ${product.name} 的 AI HOT 查询：${error.message}`);
  }
}

const mergedCandidates = [...candidatesById.values()]
  .sort((a, b) => (b.score - a.score) || String(b.publishedAt).localeCompare(String(a.publishedAt)))
  .slice(0, 200);
await fs.writeFile(new URL("data/candidates.json", root), `${JSON.stringify(mergedCandidates, null, 2)}\n`);

// ---- B. 从 AI HOT 精选里发现尚未入库的新产品 → product-candidates.json ----
const knownNames = research.products.map((product) => normalize(product.name)).filter((name) => name.length >= 4);
const existingProducts = JSON.parse(await fs.readFile(new URL("data/product-candidates.json", root), "utf8"));
const productsById = new Map(existingProducts.map((item) => [item.id, item]));
let addedProducts = 0;

const launchSignal = /\b(launch(?:es|ed)?|unveil[sd]?|announce[sd]?|release[sd]?)\b|发布|上线|推出|首发/iu;
const productSignal = /agent|cowork|computer use|openclaw|copilot|智能体|工作台|助手/iu;

try {
  const items = await fetchItems({ mode: "selected", category: "ai-products", since, take: "50" });
  for (const item of items) {
    if (!item.url) continue;
    const normalizedTitle = normalize(item.title || "");
    const isKnown = knownNames.some((name) => normalizedTitle.includes(name));
    if (isKnown || !launchSignal.test(item.title) || !productSignal.test(item.title)) continue;
    const id = productCandidateId(item.url);
    if (productsById.has(id)) continue;
    productsById.set(id, {
      id,
      title: item.title,
      sourceUrl: item.url,
      sourceLabel: item.source || "AI HOT 收录信源",
      sourceType: "media",
      publishedAt: item.publishedAt || null,
      discoveredAt: new Date().toISOString(),
      status: "pending",
      reviewChecklist: ["确认它是独立产品而非普通功能", "确认属于研究范围", "找到官方一手信源", "补充厂商、类型与官网"],
    });
    addedProducts += 1;
  }
} catch (error) {
  console.warn(`跳过 AI HOT 新产品发现：${error.message}`);
}

const mergedProducts = [...productsById.values()]
  .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)))
  .slice(0, 100);
await fs.writeFile(new URL("data/product-candidates.json", root), `${JSON.stringify(mergedProducts, null, 2)}\n`);

console.log(`AI HOT 发现完成：新增 ${addedUpdates} 条更新候选，${addedProducts} 条新产品候选。`);
