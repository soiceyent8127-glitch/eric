import fs from "node:fs/promises";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const id = process.argv[2];

if (!id) {
  console.error("用法：npm run promote -- <candidate-id>");
  process.exit(1);
}

const candidatePath = new URL("data/candidates.json", root);
const updatesPath = new URL("data/major-updates.js", root);
const candidates = JSON.parse(await fs.readFile(candidatePath, "utf8"));
const index = candidates.findIndex((item) => item.id === id);

if (index === -1) {
  console.error(`未找到候选：${id}`);
  process.exit(1);
}

const context = { window: {} };
vm.runInNewContext(await fs.readFile(updatesPath, "utf8"), context);
const updates = context.window.MAJOR_UPDATES;
const candidate = candidates[index];
const date = candidate.publishedAt?.slice(0, 10) || new Date().toISOString().slice(0, 10);

updates.push({
  id: `${date}-${candidate.id}`,
  productSlug: candidate.productSlug,
  date,
  category: "待编辑",
  title: candidate.title,
  summary: "请在发布前补充这一事件对产品和竞争格局的实际影响。",
  impact: "请按重大动态收录规则补充",
  sourceUrl: candidate.sourceUrl,
  sourceLabel: candidate.sourceLabel,
  verifiedAt: new Date().toISOString().slice(0, 10),
});

candidates[index] = { ...candidate, status: "promoted" };
await fs.writeFile(updatesPath, `window.MAJOR_UPDATES = ${JSON.stringify(updates, null, 2)};\n`);
await fs.writeFile(candidatePath, `${JSON.stringify(candidates, null, 2)}\n`);
console.log(`已提升候选 ${id}。发布前请编辑 data/major-updates.js 中的待编辑字段。`);
