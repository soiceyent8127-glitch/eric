import test from "node:test";
import assert from "node:assert/strict";

import {
  isLikelySameEvent,
  isOfficialSource,
  reviewExistingCandidate,
  reviewStandaloneCandidate,
} from "../scripts/review-policy.mjs";

const product = {
  name: "Gemini Spark（Google）",
  vendor: "Google",
  aliases: ["Gemini Spark"],
};

test("可信媒体的高影响现有产品更新可以自动发布", () => {
  const result = reviewExistingCandidate(
    {
      title: "Gemini Spark 接入 MCP 并开放第三方生态",
      sourceLabel: "AIBase",
      sourceUrl: "https://news.aibase.com/example",
      sourceType: "media",
      score: 6,
      reasons: ["关键能力变化 +4", "明确事件词 +2"],
    },
    product,
  );
  assert.equal(result.decision, "accepted");
});

test("标题关联不足的候选保留复核而不是直接拒绝", () => {
  const result = reviewExistingCandidate(
    {
      title: "Claude Science 科研工作台正式上线",
      sourceLabel: "Anthropic：Newsroom（网页）",
      sourceUrl: "https://www.anthropic.com/news/claude-science-ai-workbench",
      sourceType: "media",
      score: 8,
    },
    product,
  );
  assert.equal(result.decision, "deferred");
});

test("官方来源的新 Agent 产品可以直接进入行业时间线", () => {
  const candidate = {
    title: "Runway 发布 Agent 2.0",
    sourceLabel: "Runway News",
    sourceUrl: "https://runwayml.com/news/introducing-agent-2",
    sourceType: "media",
  };
  assert.equal(isOfficialSource(candidate), true);
  assert.equal(reviewStandaloneCandidate(candidate).decision, "accepted");
});

test("可信媒体确认的强新产品信号可以自动发布", () => {
  const result = reviewStandaloneCandidate({
    title: "中国移动上线新消息 Claw，支持短信远程控制 Agent",
    sourceLabel: "IT之家",
    sourceUrl: "https://www.ithome.com/example",
    sourceType: "media",
  });
  assert.equal(result.decision, "accepted");
});

test("模型跑分和榜单不会因为放宽规则进入时间线", () => {
  const result = reviewStandaloneCandidate({
    title: "NVIDIA 发布新模型并登顶检索基准榜单",
    sourceLabel: "AIBase",
    sourceUrl: "https://news.aibase.com/example",
    sourceType: "media",
  });
  assert.equal(result.decision, "rejected");
});

test("同一新产品的不同媒体标题会被识别为重复事件", () => {
  assert.equal(
    isLikelySameEvent(
      "阶跃星辰发布 STEPX Neo 样机，全球首款大模型原生智能体手机亮相",
      "阶跃星辰推出首款大模型原生智能体手机 STEPX Neo",
    ),
    true,
  );
});
