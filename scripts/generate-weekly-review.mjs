import fs from "node:fs/promises";

const root = new URL("../", import.meta.url);
const candidates = JSON.parse(await fs.readFile(new URL("data/candidates.json", root), "utf8"));
const productCandidates = JSON.parse(await fs.readFile(new URL("data/product-candidates.json", root), "utf8"));
const pendingUpdates = candidates.filter((item) => item.status === "pending");
const pendingProducts = productCandidates.filter((item) => item.status === "pending");
const generatedAt = new Date().toISOString().slice(0, 10);

const lines = [
  "# 本周产品情报候选审核单",
  "",
  `生成日期：${generatedAt}`,
  "",
  `- 现有产品重大更新候选：${pendingUpdates.length} 条`,
  `- 新产品候选：${pendingProducts.length} 条`,
  "",
  "> 此文件只是一份审核清单。合并 PR 不会让候选直接进入正式重大动态页面。",
  "",
  "## 现有产品重大更新候选",
  "",
];

if (pendingUpdates.length) {
  for (const item of pendingUpdates) {
    lines.push(
      `### ${item.productName}`,
      "",
      `- **候选事件：** ${item.title}`,
      `- **候选得分：** ${item.score}`,
      `- **判断依据：** ${item.reasons.join("；")}`,
      `- **媒体信源：** [${item.sourceLabel}](${item.sourceUrl})`,
      `- **审核建议：** 查找官方一手信源，并判断是否改变产品定位、核心能力或商业模式。`,
      "",
    );
  }
} else {
  lines.push("本周暂无现有产品重大更新候选。", "");
}

lines.push("## 新产品候选", "");

if (pendingProducts.length) {
  for (const item of pendingProducts) {
    lines.push(
      `### ${item.title}`,
      "",
      `- **媒体信源：** [${item.sourceLabel}](${item.sourceUrl})`,
      `- **审核建议：** ${item.reviewChecklist.join("；")}。`,
      "",
    );
  }
} else {
  lines.push("本周暂无新产品候选。", "");
}

lines.push(
  "## 审核结论填写方式",
  "",
  "可以直接在 PR 留言，例如：",
  "",
  "- `收录：WorkBuddy AI 云电脑合作事件`",
  "- `观察：Scout，等待官方产品页`",
  "- `忽略：普通功能更新或误报`",
  "",
);

await fs.mkdir(new URL("reviews/", root), { recursive: true });
await fs.writeFile(new URL("reviews/weekly-candidates.md", root), `${lines.join("\n")}\n`);
console.log(`已生成审核单：${pendingUpdates.length} 条更新候选，${pendingProducts.length} 条新产品候选。`);
