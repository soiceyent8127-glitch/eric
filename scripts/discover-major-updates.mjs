import fs from "node:fs/promises";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const days = Number(process.env.DISCOVERY_DAYS || 7);
const maxProducts = Number(process.env.MAX_PRODUCTS || 0);
const minScore = Number(process.env.MIN_SIGNAL_SCORE || 5);

const highImpactPatterns = [
  [/\b(acquire[ds]?|acquisition|shut down|shutdown|discontinue[ds]?|launch(?:es|ed)?)\b|收购|并购|停止运营|停服|正式发布|全新发布/iu, 6, "产品发布或公司级事件"],
  [/computer use|multi[- ]?agent|agent teams?|long[- ]?term memory|remote control|enterprise governance|长期记忆|多智能体|多 Agent|远程控制|企业治理|审批|审计/iu, 4, "关键能力变化"],
  [/pricing|subscription|funding|raised|partnership|available to|定价|订阅|融资|合作|开放使用|全面开放/iu, 3, "商业或开放范围变化"],
  [/\b(announce[sd]?|introduc(?:e[ds]?|ing)|release[sd]?|unveil[sd]?)\b|发布|上线|推出|宣布|首发|升级/iu, 2, "明确事件词"],
];

const lowSignalPattern = /bug fixes?|minor update|performance improvement|优化体验|修复|小幅改进|例行更新|日常更新/iu;

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

function candidateId(productSlug, link) {
  const value = `${productSlug}:${link}`;
  let hash = 2166136261;
  for (const char of value) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return `${productSlug}-${(hash >>> 0).toString(16)}`;
}

async function loadWindowData(path, key) {
  const source = await fs.readFile(new URL(path, root), "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context);
  return context.window[key];
}

async function fetchText(url, extraHeaders = {}) {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 AgentProductIntelligence/1.0", ...extraHeaders },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

async function discoverForProduct(product, extraQueries) {
  const name = cleanProductName(product.name);
  const queries = [
    `"${name}" (发布 OR 上线 OR 推出 OR launch OR announces OR funding OR acquired) when:${days}d`,
    ...(extraQueries[product.slug] || []).map((query) => `"${query}" when:${days}d`),
  ];
  const discovered = [];
  for (const query of queries) {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=zh-CN&gl=CN&ceid=CN:zh-Hans`;
    try {
      const items = parseRss(await fetchText(url)).slice(0, 8);
      for (const item of items) {
        const { score, reasons } = scoreTitle(item.title);
        if (score < minScore || !item.link) continue;
        discovered.push({
          id: candidateId(product.slug, item.link),
          productSlug: product.slug,
          productName: product.name,
          title: item.title,
          sourceUrl: item.link,
          sourceLabel: item.sourceLabel || "Google News 收录信源",
          sourceType: "media",
          publishedAt: item.publishedAt ? new Date(item.publishedAt).toISOString() : null,
          discoveredAt: new Date().toISOString(),
          score,
          reasons,
          status: "pending",
        });
      }
    } catch (error) {
      console.warn(`跳过 ${product.name} 的查询：${error.message}`);
    }
  }
  return discovered;
}

function makeCandidate(product, item, sourceType = "media") {
  const { score, reasons } = scoreTitle(`${item.title} ${item.description || ""}`);
  if (score < minScore || !item.link) return null;
  return {
    id: candidateId(product.slug, item.link),
    productSlug: product.slug,
    productName: product.name,
    title: item.title,
    sourceUrl: item.link,
    sourceLabel: item.sourceLabel,
    sourceType,
    publishedAt: item.publishedAt ? new Date(item.publishedAt).toISOString() : null,
    discoveredAt: new Date().toISOString(),
    score,
    reasons,
    status: "pending",
  };
}

async function discoverOfficialRss(product, feeds) {
  const discovered = [];
  for (const feed of feeds || []) {
    try {
      for (const item of parseRss(await fetchText(feed)).slice(0, 15)) {
        const candidate = makeCandidate(
          product,
          { ...item, sourceLabel: item.sourceLabel || `${product.vendor || product.name} 官方信源` },
          "official",
        );
        if (candidate) discovered.push(candidate);
      }
    } catch (error) {
      console.warn(`跳过 ${product.name} 的官方 RSS：${error.message}`);
    }
  }
  return discovered;
}

async function discoverGithubReleases(product, repo) {
  if (!repo) return [];
  try {
    const authHeaders = process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
    const releases = JSON.parse(await fetchText(`https://api.github.com/repos/${repo}/releases?per_page=10`, authHeaders));
    return releases
      .map((release) =>
        makeCandidate(
          product,
          {
            title: release.name || release.tag_name,
            // Release notes often mention many capabilities and fixes. Only the
            // release title may elevate a routine version into a major event.
            description: "",
            link: release.html_url,
            publishedAt: release.published_at,
            sourceLabel: `GitHub Release · ${repo}`,
          },
          "official",
        ),
      )
      .filter(Boolean);
  } catch (error) {
    console.warn(`跳过 ${product.name} 的 GitHub Releases：${error.message}`);
    return [];
  }
}

const research = await loadWindowData("data/site-data.js", "RESEARCH_DATA");
const overrides = JSON.parse(await fs.readFile(new URL("data/source-overrides.json", root), "utf8"));
const existing = JSON.parse(await fs.readFile(new URL("data/candidates.json", root), "utf8"));
const selectedProducts = maxProducts ? research.products.slice(0, maxProducts) : research.products;
const batches = [];

for (let index = 0; index < selectedProducts.length; index += 5) {
  const batch = selectedProducts.slice(index, index + 5);
  batches.push(
    ...(
      await Promise.all(
        batch.map(async (product) => [
          ...(await discoverForProduct(product, overrides.extraQueries || {})),
          ...(await discoverOfficialRss(product, overrides.officialRss?.[product.slug])),
          ...(await discoverGithubReleases(product, overrides.githubRepos?.[product.slug])),
        ]),
      )
    ).flat(),
  );
}

const byId = new Map(existing.map((item) => [item.id, item]));
for (const candidate of batches) {
  if (!byId.has(candidate.id)) byId.set(candidate.id, candidate);
}

const merged = [...byId.values()]
  .sort((a, b) => (b.score - a.score) || String(b.publishedAt).localeCompare(String(a.publishedAt)))
  .slice(0, 200);

await fs.writeFile(new URL("data/candidates.json", root), `${JSON.stringify(merged, null, 2)}\n`);
console.log(`检查 ${selectedProducts.length} 个产品，新增 ${merged.length - existing.length} 条重大更新候选。`);
