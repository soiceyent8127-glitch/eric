import fs from "node:fs/promises";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const timezone = "Asia/Shanghai";
const trustedMediaPattern = /36氪|第一财经|一财|新浪科技|新浪财经|东方财富|财联社|界面新闻|晚点|机器之心|量子位|钛媒体|极客公园|InfoQ|TechCrunch|The Verge|VentureBeat|Reuters|Bloomberg/iu;
const lowSignalPattern = /评论|盘点|回顾|传闻|或将|可能|概念股|ETF|股价|教程|测评|bug fixes?|minor update|优化|修复|小幅改进|日常更新/iu;

function localDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function normalize(value = "") {
  return value
    .toLowerCase()
    .replace(/[（(].*?[）)]/g, "")
    .replace(/桌面版|desktop|agent|智能体/giu, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "");
}

function productMatchesTitle(product, title) {
  const normalizedTitle = normalize(title);
  const nameVariants = [product.name, ...(product.aliases || [])].flatMap((name) => [
    name,
    name.replace(/[（(].*?[）)]/g, ""),
    ...[...name.matchAll(/[（(](.*?)[）)]/g)].map((match) => match[1]),
    ...name.split(/[\s/·（()）]+/u),
  ]);
  const aliases = nameVariants
    .map(normalize)
    .filter((alias) => alias.length >= 2);
  return aliases.some((alias) => normalizedTitle.includes(alias));
}

function stripPublisher(title) {
  return title.replace(/\s[-–—]\s[^-–—]{2,30}$/u, "").trim();
}

function inferCategory(title) {
  if (/收购|并购|融资|定价|订阅|停止运营|停服|acquir|funding|pricing|shutdown/iu.test(title)) return "商业变化";
  if (/合作|生态|伙伴|partnership|integrat/iu.test(title)) return "生态合作";
  if (/多.?agent|multi.?agent|computer use|长期记忆|记忆|反思|意识功能|意识能力|技能进化|自我进化|成长|企业治理|远程控制|跨端|审批|审计/iu.test(title)) return "核心能力";
  if (/发布|推出|上线|launch|unveil|release/iu.test(title)) return "重大版本";
  return "重大动态";
}

function makeSummary(product, candidate) {
  const reason = candidate.reasons
    ?.filter((item) => !item.includes("疑似日常更新"))
    .map((item) => item.replace(/\s[+-]\d+$/u, ""))
    .join("、") || "重大产品变化";
  return `${product.name} 出现新的${reason}。自动审核确认其信源和事件强度达到正式时间线的收录标准。`;
}

function makeImpact(candidate) {
  if (/商业|公司级/iu.test(candidate.reasons?.join(" ") || "")) return "可能改变产品商业化、合作生态或市场竞争判断";
  if (/关键能力/iu.test(candidate.reasons?.join(" ") || "")) return "新增关键能力并改变产品使用方式";
  return "形成值得持续追踪的产品变化";
}

async function loadWindowData(path, key) {
  const context = { window: {} };
  vm.runInNewContext(await fs.readFile(new URL(path, root), "utf8"), context);
  return context.window[key];
}

const research = await loadWindowData("data/site-data.js", "RESEARCH_DATA");
const updates = await loadWindowData("data/major-updates.js", "MAJOR_UPDATES");
const candidatesPath = new URL("data/candidates.json", root);
const productCandidatesPath = new URL("data/product-candidates.json", root);
const updatesPath = new URL("data/major-updates.js", root);
const candidates = JSON.parse(await fs.readFile(candidatesPath, "utf8"));
const productCandidates = JSON.parse(await fs.readFile(productCandidatesPath, "utf8"));
const products = new Map(research.products.map((product) => [product.slug, product]));
const existingSources = new Set(updates.map((update) => update.sourceUrl));
const reviewedAt = localDate();
const accepted = [];
const deferred = [];
const rejected = [];

for (const candidate of candidates.filter((item) => item.status === "pending")) {
  const product = products.get(candidate.productSlug);
  const official = candidate.sourceType === "official";
  const exactMatch = productMatchesTitle(product, candidate.title);
  const trustedMedia = trustedMediaPattern.test(candidate.sourceLabel || "");
  const noisy = lowSignalPattern.test(candidate.title) || candidate.reasons?.some((reason) => reason.includes("疑似日常更新"));
  const publishable = !noisy && ((official && candidate.score >= 6) || (exactMatch && trustedMedia && candidate.score >= 9));

  if (noisy || (!official && !exactMatch)) {
    candidate.status = "rejected_auto";
    candidate.reviewedAt = reviewedAt;
    candidate.reviewReason = noisy ? "自动审核：标题属于评论、传闻、市场噪音或日常更新" : "自动审核：标题与目标产品名称不匹配";
    rejected.push(candidate);
    continue;
  }

  if (!publishable) {
    candidate.status = "deferred_auto";
    candidate.reviewedAt = reviewedAt;
    candidate.reviewReason = "自动审核：事件可能相关，但信源或事件强度不足以无人值守发布";
    deferred.push(candidate);
    continue;
  }

  candidate.status = "accepted_auto";
  candidate.reviewedAt = reviewedAt;
  candidate.reviewReason = official ? "自动审核：官方一手信源且达到重大事件阈值" : "自动审核：可信媒体、高事件得分且产品名称明确匹配";
  accepted.push(candidate);

  if (existingSources.has(candidate.sourceUrl)) continue;
  const date = candidate.publishedAt?.slice(0, 10) || reviewedAt;
  updates.push({
    id: `${date}-${candidate.id}`,
    productSlug: candidate.productSlug,
    date,
    category: inferCategory(candidate.title),
    title: stripPublisher(candidate.title),
    summary: makeSummary(product, candidate),
    impact: makeImpact(candidate),
    sourceUrl: candidate.sourceUrl,
    sourceLabel: candidate.sourceLabel,
    verifiedAt: reviewedAt,
    autoReviewed: true,
  });
  existingSources.add(candidate.sourceUrl);
}

for (const candidate of productCandidates.filter((item) => item.status === "pending")) {
  candidate.status = "deferred_auto";
  candidate.reviewedAt = reviewedAt;
  candidate.reviewReason = "自动审核：新产品入库需要独立官网、厂商与产品定位等完整信息，媒体标题不能单独触发发布";
  deferred.push(candidate);
}

updates.sort((a, b) => String(b.date).localeCompare(String(a.date)));
await fs.writeFile(updatesPath, `window.MAJOR_UPDATES = ${JSON.stringify(updates, null, 2)};\n`);
await fs.writeFile(candidatesPath, `${JSON.stringify(candidates, null, 2)}\n`);
await fs.writeFile(productCandidatesPath, `${JSON.stringify(productCandidates, null, 2)}\n`);

function reportRows(items, conclusion) {
  if (!items.length) return ["| 无 | 无 | 无 |"];
  return items.map((item) => `| ${item.productName || "新产品候选"} | [${stripPublisher(item.title)}](${item.sourceUrl}) | ${conclusion || item.reviewReason} |`);
}

const report = [
  `# ${reviewedAt} 自动审核记录`,
  "",
  `运行时区：${timezone}`,
  "",
  `- 自动正式收录：${accepted.length} 条`,
  `- 自动暂缓：${deferred.length} 条`,
  `- 自动拒绝：${rejected.length} 条`,
  "",
  "## 自动正式收录",
  "",
  "| 产品 | 事件 | 结论 |",
  "|---|---|---|",
  ...reportRows(accepted),
  "",
  "## 自动暂缓",
  "",
  "| 产品 | 事件 | 结论 |",
  "|---|---|---|",
  ...reportRows(deferred),
  "",
  "## 自动拒绝",
  "",
  "| 产品 | 事件 | 结论 |",
  "|---|---|---|",
  ...reportRows(rejected),
  "",
  "> 自动审核采用保守发布策略。没有达到严格阈值的内容不会进入正式网站。",
  "",
];

await fs.mkdir(new URL("reviews/", root), { recursive: true });
await fs.writeFile(new URL(`reviews/${reviewedAt}-auto-review.md`, root), report.join("\n"));
await fs.writeFile(new URL("reviews/latest-auto-review.md", root), report.join("\n"));
console.log(`自动审核完成：收录 ${accepted.length} 条，暂缓 ${deferred.length} 条，拒绝 ${rejected.length} 条。`);
