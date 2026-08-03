# 2026-08-03 人工精选记录

覆盖时间：2026-07-19 至 2026-08-03

- 现有产品更新候选：新增 11 条
- 新产品候选：自动新增 29 条，人工补充官方候选 2 条
- 中文新闻发现：读取 411 条
- 正式收录：23 条（自动精选 3 条；逐产品人工核验补录 20 条）
- 自动暂缓：36 条
- 人工否决：3 条
- 逐项复核现有产品：45 个
- 新增产品卡：1 个（千问办公）
- 本次更新后产品总数：46 个
- 本次更新后重大动态总数：62 条

## 本次精选

| 日期 | 事件 | 归属 | 信源 |
|---|---|---|---|
| 07-29 | OpenAI 开源 Codex Security CLI 与 TypeScript SDK | Codex | OpenAI 官方 GitHub |
| 07-28 | 美团正式发布全场景 AI Agent 平台 CatPaw | 新产品 | 美团技术团队 |
| 07-22 | OpenAI 正式发布企业 Agent 产品 Presence | 新产品 | OpenAI 官方 |

## 逐产品复核追加

本轮进一步检查 45 个原有产品的官方更新日志、官方博客、产品文档与 GitHub Releases，不把 07-19 作为硬截止：只要属于架构、核心能力、入口、治理、商业化或产品身份变化，且原调研未覆盖，就补入产品详情页。

共追加 20 条正式事件：

- 07-30：AgentTeams（原 HiClaw）更名及 v1.2；Skywork Desktop 2.4；OpenWork 0.18.12
- 07-27：新增千问办公产品卡与限量测试事件
- 07-25：NemoClaw 0.0.96
- 07-24：QwenPaw 2.0.1；Kimi Claw 完整云端能力
- 07-22：Kimi Work Goal Mode 与最多 300 个并行 Agent
- 07-21：WorkBuddy 5.3.3；QClaw 组织调整（明确标注为媒体报道）
- 07-20：Hermes Agent 0.19；豆包企业版进入飞书
- 07-13：OpenClaw v2026.7.1
- 06-30：Skywork Desktop 2.0；Gemini Spark macOS 与远程派单
- 06-26：Loomy 0.9.31
- 06-16：Microsoft Copilot Cowork 全球 GA
- 04-29：ArkClaw 云电脑、文件空间与协作模式
- 04-28：Amazon Quick 桌面、Office 交付与应用生成扩张
- 04-27：悟空企业私有 Skill 中心与 MCP 管理

完整逐项结果见 `reviews/2026-08-03-product-update-audit.md`。

## 产品记录同步方式

`data/major-updates.js` 是产品页“重大更新时间线”的统一数据源。带有 `productSlug` 的事件会自动显示在对应产品详情页。17 个原有产品本轮补录的 18 条事件已完成绑定；千问办公已建立新产品卡并绑定发布事件。CatPaw 与 Presence 目前仍作为独立新产品事件进入行业时间线，待后续补齐产品卡片。

## 人工核验与排除

- “Perplexity 推出 Windows 版个人电脑智能体”与 Perplexity 官方帮助中心冲突。官方截至 2026-07-16 仍明确说明 Personal Computer 仅支持 macOS，因此人工否决。
- “Grok Voice Think Fast 2.0”属于语音模型更新，不是独立 Agent 产品或入口，因此人工否决。
- “开云下载入口”候选是明显的 SEO 垃圾内容，缺少可核验产品主体，因此人工否决。
- Qwen3.8-Max 被错误关联到 Manus、Codex 与 OpenClaw；OpenWorker 被错误关联到 OpenWork；腾讯云 Agent 基准被错误关联到 WorkBuddy。这些候选均未发布。
- 万有无界、Miora 全量上线、纳米Work、Seko 3.0 等候选保留等待更明确的一手发布日期或产品资料。
- 用户提供文章提到的“飞书产品团队与豆包整合、飞书 GTM 与火山引擎合并”暂未找到字节跳动官方组织公告，因此未将组织归属写成已确认事实；正式收录的是飞书官方能够确认的豆包企业版产品与权限整合。

## 核验入口

- Codex Security：https://github.com/openai/codex-security
- CatPaw：https://tech.meituan.com/2026/07/28/CatPaw-LongCat.html
- OpenAI Presence：https://openai.com/index/introducing-openai-presence/
- Perplexity Personal Computer：https://www.perplexity.ai/help-center/en/articles/14659663-what-is-personal-computer
- 产品逐项审计：reviews/2026-08-03-product-update-audit.md
