import fs from "node:fs/promises";
import vm from "node:vm";

const root = new URL("../", import.meta.url);

async function loadWindowData(path, key) {
  const context = { window: {} };
  vm.runInNewContext(await fs.readFile(new URL(path, root), "utf8"), context);
  return context.window[key];
}

const research = await loadWindowData("data/site-data.js", "RESEARCH_DATA");
const visuals = await loadWindowData("data/product-visuals.js", "PRODUCT_VISUALS");
const updates = await loadWindowData("data/major-updates.js", "MAJOR_UPDATES");
const candidates = JSON.parse(await fs.readFile(new URL("data/candidates.json", root), "utf8"));
const productCandidates = JSON.parse(await fs.readFile(new URL("data/product-candidates.json", root), "utf8"));
const slugs = new Set(research.products.map((product) => product.slug));
const ids = new Set();
const errors = [];

for (const product of research.products) {
  const visual = visuals[product.slug];
  if (!visual) {
    errors.push(`产品视觉清单缺少：${product.slug}`);
    continue;
  }
  if (visual.icon) {
    try {
      await fs.access(new URL(visual.icon, root));
    } catch {
      errors.push(`产品图标文件不存在：${visual.icon}`);
    }
  }
}

for (const update of updates) {
  if (!update.id || ids.has(update.id)) errors.push(`重大动态 ID 缺失或重复：${update.id}`);
  ids.add(update.id);
  if (!slugs.has(update.productSlug)) errors.push(`未知产品 slug：${update.productSlug}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(update.date)) errors.push(`日期格式错误：${update.id}`);
  if (!/^https?:\/\//.test(update.sourceUrl)) errors.push(`信源链接错误：${update.id}`);
  for (const field of ["category", "title", "summary", "impact", "sourceLabel", "verifiedAt"]) {
    if (!update[field]) errors.push(`${update.id} 缺少 ${field}`);
  }
}

for (const candidate of candidates) {
  if (!candidate.id || !slugs.has(candidate.productSlug) || !candidate.sourceUrl) {
    errors.push(`候选数据不完整：${candidate.id || "unknown"}`);
  }
}

for (const candidate of productCandidates) {
  if (!candidate.id || !candidate.title || !candidate.sourceUrl) {
    errors.push(`新产品候选数据不完整：${candidate.id || "unknown"}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`数据有效：${research.products.length} 个产品，${updates.length} 条重大动态，${candidates.length} 条更新候选，${productCandidates.length} 条新产品候选。`);
