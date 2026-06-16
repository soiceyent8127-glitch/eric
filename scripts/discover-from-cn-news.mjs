import fs from "node:fs/promises";
import vm from "node:vm";

// 中文 AI 新闻源发现：
// - AIBase: 读取 Nuxt 列表 payload，再沿连续新闻详情 payload 补足多页标题。
// - AI工具集: 读取 daily-ai-news 页面里的日期分组。
//
// 这里仍只做「候选发现」，正式页面发布由 auto-review-and-publish.mjs 决定。

const root = new URL("../", import.meta.url);
let days = Number(process.env.DISCOVERY_DAYS || 7);
const maxProducts = Number(process.env.MAX_PRODUCTS || 0);
const minScore = Number(process.env.MIN_SIGNAL_SCORE || 5);
let aiBaseMaxPages = Number(process.env.AIBASE_MAX_PAGES || process.env.AIBASE_PAGES || 40);
const aiBotMaxItems = Number(process.env.AIBOT_MAX_ITEMS || 1000);
const dryRun = process.env.CN_NEWS_DRY_RUN === "1";
const sinceDate = process.env.DISCOVERY_SINCE ? new Date(`${process.env.DISCOVERY_SINCE}T00:00:00+08:00`) : null;

const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 AgentProductIntelligence/1.0";

const highImpactPatterns = [
  [/\b(acquire[ds]?|acquisition|shut down|shutdown|discontinue[ds]?|launch(?:es|ed)?)\b|收购|并购|停止运营|停服|正式发布|全新发布/iu, 6, "产品发布或公司级事件"],
  [/computer use|multi[- ]?agent|agent teams?|long[- ]?term memory|remote control|enterprise governance|长期记忆|多智能体|多 Agent|远程控制|企业治理|审批|审计|意识功能|意识能力|记忆|反思|技能进化|自我进化|成长/iu, 4, "关键能力变化"],
  [/pricing|subscription|funding|raised|partnership|available to|定价|订阅|融资|合作|开放使用|全面开放|开源|免费|邀测|公测|内测/iu, 3, "商业或开放范围变化"],
  [/\b(announce[sd]?|introduc(?:e[ds]?|ing)|release[sd]?|unveil[sd]?)\b|发布|上线|推出|宣布|首发|升级|接入|打通|开放/iu, 2, "明确事件词"],
];

const lowSignalPattern = /bug fixes?|minor update|performance improvement|优化体验|修复|小幅改进|例行更新|日常更新|教程|盘点|合集/iu;
const productCandidatePattern = /agent|cowork|computer use|openclaw|copilot|assistant|智能体|工作台|助手|桌面伙伴|桌面AI|AI版/iu;
const launchPattern = /\b(launch(?:es|ed)?|unveil[sd]?|announce[sd]?|release[sd]?)\b|发布|上线|推出|首发|开放|内测|公测/iu;

function scoreText(text) {
  let score = 0;
  const reasons = [];
  for (const [pattern, points, reason] of highImpactPatterns) {
    if (pattern.test(text)) {
      score += points;
      reasons.push(`${reason} +${points}`);
    }
  }
  if (lowSignalPattern.test(text)) {
    score -= 4;
    reasons.push("疑似日常更新 -4");
  }
  return { score, reasons };
}

function stripHtml(value = "") {
  return value
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function normalize(value = "") {
  return value
    .toLowerCase()
    .replace(/[（(].*?[）)]/g, "")
    .replace(/桌面版|desktop/giu, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "");
}

function fnv1a(value) {
  let hash = 2166136261;
  for (const char of value) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
}

function candidateId(productSlug, link) {
  return `${productSlug}-${fnv1a(`${productSlug}:${link}`)}`;
}

function productCandidateId(link) {
  return `new-product-${fnv1a(link)}`;
}

async function loadWindowData(path, key) {
  const context = { window: {} };
  vm.runInNewContext(await fs.readFile(new URL(path, root), "utf8"), context);
  return context.window[key];
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "user-agent": userAgent } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

function reviveNuxtPayload(payload) {
  const seen = new Map();
  function revive(index) {
    if (index === null || typeof index !== "number") return index;
    if (seen.has(index)) return seen.get(index);
    const value = payload[index];
    if (value === null || typeof value !== "object") return value;
    if (Array.isArray(value)) {
      if (typeof value[0] === "string" && ["ShallowReactive", "Reactive", "Ref", "EmptyRef", "Set"].includes(value[0])) {
        return revive(value[1]);
      }
      const array = [];
      seen.set(index, array);
      for (const item of value) array.push(revive(item));
      return array;
    }
    const object = {};
    seen.set(index, object);
    for (const [key, item] of Object.entries(value)) object[key] = revive(item);
    return object;
  }
  return revive(0);
}

function makeDate(value) {
  if (!value) return null;
  const normalized = value.includes("T") ? value : value.replace(" ", "T");
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

function dateToIso(value) {
  const date = makeDate(value);
  return date ? date.toISOString() : null;
}

function isRecent(value) {
  const date = makeDate(value);
  if (!date) return true;
  const start = sinceDate || new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return date.getTime() >= start.getTime();
}

function productAliases(product, extraQueries = []) {
  const vendor = normalize(product.vendor || "");
  const blocked = new Set(["ai", "agent", "assistant", "desktop", "claw", "智能体", "助手", "桌面版", "工作台", vendor].filter(Boolean));
  const names = [
    product.name,
    product.name.replace(/[（(].*?[）)]/g, ""),
    ...(product.aliases || []),
    ...extraQueries,
  ];
  return [...new Set(names.map(normalize))]
    .filter((alias) => alias.length >= 3)
    .filter((alias) => !blocked.has(alias));
}

function matchProducts(item, products, extraQueries) {
  const haystack = normalize(item.title);
  return products.filter((product) => productAliases(product, extraQueries[product.slug] || []).some((alias) => haystack.includes(alias)));
}

async function discoverAIBase() {
  const payloadText = await fetchText("https://news.aibase.com/zh/news/_payload.json");
  const rootData = reviveNuxtPayload(JSON.parse(payloadText));
  const firstPage = rootData.data?.getAINewsList?.data?.list || [];
  const maxItems = aiBaseMaxPages * 20;
  const items = firstPage.map((item) => ({
    title: item.title,
    description: stripHtml(item.description || item.subtitle || ""),
    link: `https://news.aibase.com/zh/news/${item.oid}`,
    sourceLabel: item.sourceName || "AIBase",
    sourceHub: "AIBase",
    publishedAt: dateToIso(item.createTime),
    oid: item.oid,
  }));

  let nextId = Math.min(...firstPage.map((item) => item.oid).filter(Boolean)) - 1;
  let misses = 0;
  let seenOlderThanWindow = firstPage.some((item) => item.createTime && !isRecent(dateToIso(item.createTime)));
  while (!seenOlderThanWindow && items.length < maxItems && nextId > 0 && misses < 20) {
    const batchIds = Array.from({ length: Math.min(20, maxItems - items.length) }, (_, index) => nextId - index).filter((id) => id > 0);
    const batch = await Promise.all(
      batchIds.map(async (id) => {
        try {
          const detailText = await fetchText(`https://news.aibase.com/zh/news/${id}/_payload.json`);
          const detailRoot = reviveNuxtPayload(JSON.parse(detailText));
          const detail = detailRoot.data?.getAIDetail?.data;
          return detail?.title ? { id, detail } : null;
        } catch {
          return null;
        }
      }),
    );
    const validItems = batch.filter(Boolean).sort((a, b) => b.id - a.id);
    if (!validItems.length) {
      misses += batchIds.length;
    } else {
      misses = 0;
      for (const { id, detail } of validItems) {
        const publishedAt = dateToIso(detail.createTime);
        items.push({
          title: detail.title,
          description: stripHtml(detail.description || detail.summary || ""),
          link: `https://news.aibase.com/zh/news/${id}`,
          sourceLabel: detail.sourceName || "AIBase",
          sourceHub: "AIBase",
          publishedAt,
          oid: id,
        });
        if (publishedAt && !isRecent(publishedAt)) seenOlderThanWindow = true;
      }
    }
    nextId -= batchIds.length;
  }

  return items.filter((item) => isRecent(item.publishedAt));
}

function dateFromAiBotLabel(label) {
  const match = label.match(/(\d{1,2})月(\d{1,2})/u);
  if (!match) return null;
  const now = new Date();
  let year = now.getFullYear();
  const month = Number(match[1]);
  const day = Number(match[2]);
  if (month > now.getMonth() + 1) year -= 1;
  const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
  return date.toISOString();
}

function parseAiBot(html) {
  const chunks = html.split(/<div class="news-date">/i).slice(1);
  const items = [];
  for (const chunk of chunks) {
    const endOfDate = chunk.indexOf("</div>");
    if (endOfDate === -1) continue;
    const dateLabel = stripHtml(chunk.slice(0, endOfDate));
    const publishedAt = dateFromAiBotLabel(dateLabel);
    if (publishedAt && !isRecent(publishedAt)) continue;
    const nextDate = chunk.search(/<div class="news-date">/i);
    const section = nextDate === -1 ? chunk : chunk.slice(0, nextDate);
    for (const match of section.matchAll(/<div class="news-item">([\s\S]*?)(?=<div class="news-item">|<div class="news-list">|$)/gi)) {
      const block = match[1];
      const titleMatch = block.match(/<h2>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/h2>/i);
      if (!titleMatch) continue;
      const sourceMatch = block.match(/<span class="news-time text-xs">来源：([\s\S]*?)<\/span>/i);
      const source = stripHtml(sourceMatch?.[1] || "AI工具集");
      items.push({
        title: stripHtml(titleMatch[2]),
        description: stripHtml(block.replace(sourceMatch?.[0] || "", "")),
        link: titleMatch[1].replace(/&amp;/g, "&"),
        sourceLabel: source === "AI工具集" ? "AI工具集" : `AI工具集 / ${source}`,
        sourceHub: "AI工具集",
        publishedAt,
      });
    }
  }
  return items.slice(0, aiBotMaxItems);
}

async function discoverAiBot() {
  return parseAiBot(await fetchText("https://ai-bot.cn/daily-ai-news/"));
}

function makeUpdateCandidate(product, item, score, reasons) {
  return {
    id: candidateId(product.slug, item.link),
    productSlug: product.slug,
    productName: product.name,
    title: item.title,
    sourceUrl: item.link,
    sourceLabel: item.sourceLabel,
    sourceType: "media",
    discoverySource: item.sourceHub,
    publishedAt: item.publishedAt,
    discoveredAt: new Date().toISOString(),
    score,
    reasons,
    status: "pending",
  };
}

function makeProductCandidate(item) {
  return {
    id: productCandidateId(item.link),
    title: item.title,
    sourceUrl: item.link,
    sourceLabel: item.sourceLabel,
    sourceType: "media",
    discoverySource: item.sourceHub,
    publishedAt: item.publishedAt,
    discoveredAt: new Date().toISOString(),
    status: "pending",
    reviewChecklist: ["确认它是独立产品而非普通功能", "确认属于研究范围", "找到官方一手信源", "补充厂商、类型与官网"],
  };
}

const research = await loadWindowData("data/site-data.js", "RESEARCH_DATA");
const overrides = JSON.parse(await fs.readFile(new URL("data/source-overrides.json", root), "utf8"));
const cnNewsConfig = overrides.cnNews || {};
if (!process.env.AIBASE_MAX_PAGES && !process.env.AIBASE_PAGES && (cnNewsConfig.aiBaseMaxPages || cnNewsConfig.aiBasePages)) {
  aiBaseMaxPages = Number(cnNewsConfig.aiBaseMaxPages || cnNewsConfig.aiBasePages);
}
if (!process.env.DISCOVERY_DAYS && cnNewsConfig.aiBotDays) days = Number(cnNewsConfig.aiBotDays);
const selectedProducts = maxProducts ? research.products.slice(0, maxProducts) : research.products;
const extraQueries = overrides.extraQueries || {};

const sources = [];
try {
  sources.push(...(await discoverAIBase()));
} catch (error) {
  console.warn(`跳过 AIBase：${error.message}`);
}
try {
  sources.push(...(await discoverAiBot()));
} catch (error) {
  console.warn(`跳过 AI工具集：${error.message}`);
}

const existingCandidates = JSON.parse(await fs.readFile(new URL("data/candidates.json", root), "utf8"));
const candidatesById = new Map(existingCandidates.map((item) => [item.id, item]));
const existingProducts = JSON.parse(await fs.readFile(new URL("data/product-candidates.json", root), "utf8"));
const productsById = new Map(existingProducts.map((item) => [item.id, item]));
let addedUpdates = 0;
let addedProducts = 0;

for (const item of sources) {
  if (!item.title || !item.link) continue;
  const { score, reasons } = scoreText(`${item.title} ${item.description || ""}`);
  const matches = matchProducts(item, selectedProducts, extraQueries);
  if (score >= minScore) {
    for (const product of matches) {
      const candidate = makeUpdateCandidate(product, item, score, reasons);
      if (candidatesById.has(candidate.id)) continue;
      candidatesById.set(candidate.id, candidate);
      addedUpdates += 1;
    }
  }

  if (!matches.length && score >= minScore && launchPattern.test(item.title) && productCandidatePattern.test(`${item.title} ${item.description || ""}`)) {
    const candidate = makeProductCandidate(item);
    if (productsById.has(candidate.id)) continue;
    productsById.set(candidate.id, candidate);
    addedProducts += 1;
  }
}

const mergedCandidates = [...candidatesById.values()]
  .sort((a, b) => (b.score - a.score) || String(b.publishedAt).localeCompare(String(a.publishedAt)))
  .slice(0, 250);
const mergedProducts = [...productsById.values()]
  .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)))
  .slice(0, 120);

if (!dryRun) {
  await fs.writeFile(new URL("data/candidates.json", root), `${JSON.stringify(mergedCandidates, null, 2)}\n`);
  await fs.writeFile(new URL("data/product-candidates.json", root), `${JSON.stringify(mergedProducts, null, 2)}\n`);
}

console.log(
  `中文新闻源发现完成：读取 ${sources.length} 条新闻，新增 ${addedUpdates} 条更新候选，${addedProducts} 条新产品候选${dryRun ? "（dry run 未写入）" : ""}。`,
);
