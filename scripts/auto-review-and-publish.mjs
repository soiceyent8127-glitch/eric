import fs from "node:fs/promises";
import vm from "node:vm";
import {
  inferStandaloneCategory,
  isLikelySameEvent,
  reviewExistingCandidate,
  reviewStandaloneCandidate,
} from "./review-policy.mjs";

const root = new URL("../", import.meta.url);
const timezone = "Asia/Shanghai";

function localDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function stripPublisher(title) {
  return title.replace(/\s[-–—]\s[^-–—]{2,30}$/u, "").trim();
}

function inferCategory(title) {
  if (/停止运营|停服|shutdown/iu.test(title)) return "产品状态";
  if (/定价|订阅|开放|available to|pricing|subscription/iu.test(title)) return "开放范围";
  if (/合作|生态|伙伴|partnership|integrat/iu.test(title)) return "生态合作";
  if (/多.?agent|multi.?agent|computer use|长期记忆|记忆|反思|意识功能|意识能力|技能进化|自我进化|成长|企业治理|远程控制|跨端|审批|审计/iu.test(title)) return "核心能力";
  if (/发布|推出|上线|launch|unveil|release/iu.test(title)) return "重大版本";
  return "重大动态";
}

function duplicateSignalTerms(text = "") {
  return [
    "意识功能",
    "意识能力",
    "意识",
    "长期记忆",
    "记忆",
    "反思",
    "技能进化",
    "自我进化",
    "多智能体",
    "多 Agent",
    "Agent Teams",
    "Computer Use",
    "云端能力",
    "本地执行",
    "企业治理",
    "审批",
    "审计",
  ].filter((term) => new RegExp(term.replace(/\s+/g, "\\s*"), "iu").test(text));
}

function isDuplicateEvent(candidate, updates) {
  const candidateText = `${candidate.title} ${candidate.productName || ""}`;
  const candidateTerms = duplicateSignalTerms(candidateText);
  if (!candidateTerms.length) return false;
  return updates.some((update) => {
    if (update.productSlug !== candidate.productSlug) return false;
    const existingText = `${update.title} ${update.summary || ""} ${update.impact || ""}`;
    return candidateTerms.some((term) => new RegExp(term.replace(/\s+/g, "\\s*"), "iu").test(existingText));
  });
}

function makeSummary(product, candidate) {
  const reason = candidate.reasons
    ?.filter((item) => !item.includes("疑似日常更新"))
    .map((item) => item.replace(/\s[+-]\d+$/u, ""))
    .join("、") || "重大产品变化";
  return `${product.name} 出现新的${reason}。自动审核确认其信源和事件强度达到正式时间线的收录标准。`;
}

function makeImpact(candidate) {
  if (/商业|开放范围/iu.test(candidate.reasons?.join(" ") || "")) return "可能改变产品商业化、合作生态或使用入口";
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
  const review = reviewExistingCandidate(candidate, product);

  if (review.decision === "rejected") {
    candidate.status = "rejected_auto";
    candidate.reviewedAt = reviewedAt;
    candidate.reviewReason = review.reason;
    rejected.push(candidate);
    continue;
  }

  if (review.decision === "deferred") {
    candidate.status = "deferred_auto";
    candidate.reviewedAt = reviewedAt;
    candidate.reviewReason = review.reason;
    deferred.push(candidate);
    continue;
  }

  candidate.status = "accepted_auto";
  candidate.reviewedAt = reviewedAt;
  candidate.reviewReason = review.reason;
  accepted.push(candidate);

  if (existingSources.has(candidate.sourceUrl) || isDuplicateEvent(candidate, updates) || updates.some((update) => isLikelySameEvent(candidate.title, update.title))) continue;
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
  const review = reviewStandaloneCandidate(candidate);
  candidate.score = review.score;
  candidate.reviewedAt = reviewedAt;
  candidate.reviewReason = review.reason;

  if (review.decision === "rejected") {
    candidate.status = "rejected_auto";
    rejected.push(candidate);
    continue;
  }

  if (review.decision === "deferred") {
    candidate.status = "deferred_auto";
    deferred.push(candidate);
    continue;
  }

  candidate.status = "accepted_auto";
  accepted.push(candidate);
  if (existingSources.has(candidate.sourceUrl) || updates.some((update) => isLikelySameEvent(candidate.title, update.title))) continue;
  const date = candidate.publishedAt?.slice(0, 10) || reviewedAt;
  updates.push({
    id: `${date}-${candidate.id}`,
    productSlug: null,
    date,
    category: inferStandaloneCategory(candidate.title),
    title: stripPublisher(candidate.title),
    summary: "该事件确认了新的 Agent 产品、独立入口或重大工作模式已经公开发布。",
    impact: "为 Agent 市场增加新的产品形态或可用入口，值得纳入竞争跟踪",
    sourceUrl: candidate.sourceUrl,
    sourceLabel: candidate.sourceLabel,
    verifiedAt: reviewedAt,
    autoReviewed: true,
  });
  existingSources.add(candidate.sourceUrl);
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
  "> 自动审核采用分层发布策略：高可信重大事件自动进入时间线，关联不足的候选保留复核，明显噪音直接拒绝。",
  "",
];

await fs.mkdir(new URL("reviews/", root), { recursive: true });
await fs.writeFile(new URL(`reviews/${reviewedAt}-auto-review.md`, root), report.join("\n"));
await fs.writeFile(new URL("reviews/latest-auto-review.md", root), report.join("\n"));
console.log(`自动审核完成：收录 ${accepted.length} 条，暂缓 ${deferred.length} 条，拒绝 ${rejected.length} 条。`);
