const trustedMediaPattern = /36氪|第一财经|一财|新浪科技|新浪财经|新华网|新华社|科技日报|IT之家|东方财富|财联社|界面新闻|晚点|机器之心|量子位|钛媒体|极客公园|InfoQ|AIBase|AIbase|AI工具集|TechCrunch|The Verge|VentureBeat|Reuters|Bloomberg/iu;

const lowSignalPattern = /评论|盘点|回顾|传闻|或将|可能|概念股|ETF|股价|教程|测评|bug fixes?|minor update|优化|修复|小幅改进|日常更新|收购|并购|融资|估值|财报|IPO|acquir|acquisition|funding|raised|valuation|earnings|shares?/iu;
const nonProductPattern = /榜单|白皮书|研究报告|行业报告|自律公约|标准发布|评测基准|benchmark|排行榜/iu;
const standaloneProductPattern = /agent|cowork|computer use|openclaw|copilot|assistant|智能体|工作台|助手|claw|操作系统|经营中心|agent phone|智能体手机/iu;
const launchPattern = /\b(launch(?:es|ed)?|unveil[sd]?|announce[sd]?|release[sd]?|introduc(?:e[ds]?|ing))\b|正式发布|全新发布|发布|上线|推出|首发|开放公测|开启公测|开放邀测|内测/iu;

const firstPartyHosts = new Set([
  "anthropic.com",
  "www.anthropic.com",
  "claude.com",
  "www.claude.com",
  "x.ai",
  "runwayml.com",
  "www.runwayml.com",
  "developers.googleblog.com",
  "blog.cloudflare.com",
  "openai.com",
  "www.openai.com",
  "openclaw.ai",
  "www.openclaw.ai",
  "seed.bytedance.com",
]);

export function normalize(value = "") {
  return value
    .toLowerCase()
    .replace(/[（(].*?[）)]/g, "")
    .replace(/桌面版|desktop|agent|智能体/giu, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "");
}

export function productMatchesTitle(product, title) {
  if (!product) return false;
  const normalizedTitle = normalize(title);
  const vendor = normalize(product.vendor || "");
  const blockedAliases = new Set(["ai", "agent", "assistant", "desktop", "claw", "智能体", "助手", "桌面版", "工作台", vendor].filter(Boolean));
  const nameVariants = [product.name, ...(product.aliases || [])].flatMap((name) => [
    name,
    name.replace(/[（(].*?[）)]/g, ""),
    ...name
      .split(/[\s/·（()）]+/u)
      .filter((part) => {
        const normalized = normalize(part);
        return normalized.length >= 3 && !blockedAliases.has(normalized);
      }),
  ]);
  const aliases = nameVariants
    .map(normalize)
    .filter((alias) => alias.length >= 3)
    .filter((alias) => !blockedAliases.has(alias));
  return aliases.some((alias) => normalizedTitle.includes(alias));
}

export function isTrustedMedia(candidate) {
  return trustedMediaPattern.test(candidate.sourceLabel || "");
}

export function isOfficialSource(candidate) {
  if (candidate.sourceType === "official") return true;
  try {
    return firstPartyHosts.has(new URL(candidate.sourceUrl).hostname.toLowerCase());
  } catch {
    return false;
  }
}

export function isNoisy(candidate) {
  return lowSignalPattern.test(candidate.title || "") || candidate.reasons?.some((reason) => reason.includes("疑似日常更新")) || false;
}

export function hasCoreAbilitySignal(candidate) {
  return candidate.reasons?.some((reason) => reason.includes("关键能力变化")) || /多.?agent|multi.?agent|computer use|长期记忆|远程控制|企业治理|跨端|审批|审计|自动化|MCP/iu.test(candidate.title || "");
}

export function scoreStandaloneTitle(title = "") {
  let score = 0;
  if (/停止运营|停服|shutdown|正式发布|全新发布/iu.test(title)) score += 6;
  if (/multi.?agent|多.?agent|computer use|长期记忆|远程控制|跨端|企业治理|审批|审计|自动化|自主执行|MCP/iu.test(title)) score += 4;
  if (/定价|订阅|全面开放|开放公测|开启公测|开放邀测|内测|available to/iu.test(title)) score += 3;
  if (launchPattern.test(title)) score += 2;
  return score;
}

export function reviewExistingCandidate(candidate, product) {
  const official = isOfficialSource(candidate);
  const exactMatch = productMatchesTitle(product, candidate.title);
  const trustedMedia = isTrustedMedia(candidate);
  const associationVerified = candidate.associationVerified === true;
  const score = Number(candidate.score || 0);

  if (isNoisy(candidate)) {
    return { decision: "rejected", reason: "自动审核：标题属于评论、传闻、市场/财务资本噪音或日常更新" };
  }

  if (!exactMatch && !associationVerified) {
    return { decision: "deferred", reason: "自动审核：产品关联度不足，保留候选等待复核，不再直接拒绝" };
  }

  if (official && score >= 5) {
    return { decision: "accepted", reason: "自动审核：官方一手信源且产品关联明确" };
  }

  if (trustedMedia && (score >= 7 || (hasCoreAbilitySignal(candidate) && score >= 5))) {
    return { decision: "accepted", reason: "自动审核：可信媒体、产品关联明确且属于重大变化" };
  }

  return { decision: "deferred", reason: "自动审核：事件可能相关，但信源或事件强度仍需复核" };
}

export function reviewStandaloneCandidate(candidate) {
  const title = candidate.title || "";
  const official = isOfficialSource(candidate);
  const trustedMedia = isTrustedMedia(candidate);
  const score = Number(candidate.score ?? scoreStandaloneTitle(title));
  const isProduct = standaloneProductPattern.test(title);
  const isLaunch = launchPattern.test(title);

  if (isNoisy(candidate) || nonProductPattern.test(title)) {
    return { decision: "rejected", score, reason: "自动审核：属于传闻、资本噪音、榜单政策或非产品事件" };
  }

  if (!isProduct || !isLaunch) {
    return { decision: "deferred", score, reason: "自动审核：尚未形成明确的新 Agent 产品或独立入口信号" };
  }

  if (official) {
    return { decision: "accepted", score, reason: "自动审核：官方一手信源确认新 Agent 产品或独立入口" };
  }

  if (trustedMedia && score >= 5) {
    return { decision: "accepted", score, reason: "自动审核：可信媒体确认，且新产品与重大变化信号明确" };
  }

  return { decision: "deferred", score, reason: "自动审核：产品信号明确，但仍需补充一手或可信媒体信源" };
}

export function inferStandaloneCategory(title = "") {
  if (/手机|眼镜|硬件|终端/iu.test(title)) return "智能终端";
  if (/工作台|workbench/iu.test(title)) return "垂直工作台";
  if (/多.?agent|multi.?agent|编排|orchestrat/iu.test(title)) return "Agent 基础设施";
  if (/语音|voice/iu.test(title)) return "语音 Agent";
  if (/claw|短信|IM|Slack|飞书|钉钉|企业微信/iu.test(title)) return "跨端入口";
  return "新产品";
}

function eventText(value = "") {
  return value
    .toLowerCase()
    .replace(/\s[-–—]\s[^-–—]{2,30}$/u, "")
    .replace(/正式|全新|重磅|全球首款|首款|宣布|发布|上线|推出|开放|公测|内测|亮相|升级/gu, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "");
}

function bigrams(value) {
  const result = new Set();
  for (let index = 0; index < value.length - 1; index += 1) result.add(value.slice(index, index + 2));
  return result;
}

export function isLikelySameEvent(left, right) {
  const a = eventText(left);
  const b = eventText(right);
  if (Math.min(a.length, b.length) < 6) return false;
  if (a.includes(b) || b.includes(a)) return true;
  const aPairs = bigrams(a);
  const bPairs = bigrams(b);
  const intersection = [...aPairs].filter((pair) => bPairs.has(pair)).length;
  const union = new Set([...aPairs, ...bPairs]).size;
  return union > 0 && intersection / union >= 0.48;
}
