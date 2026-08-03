# 2026-08-03 现有产品重大更新逐项审计

审计口径：优先检查 2026-07-19 之后的官方更新日志、官方博客、产品文档与 GitHub Releases；同时回看此前记录，只要属于架构、核心能力、分发入口、企业治理、商业化或产品身份变化，且未被现有调研记录覆盖，就补入重大更新时间线。

结论：45 个原有产品已逐项复核，其中 17 个产品补录 18 条重大更新；另新增千问办公产品卡及 1 条发布事件。行业时间线另补录豆包企业版进入飞书的官方产品整合事件。其余 28 个原有产品本轮未找到“可核验且超出现有记录”的重大更新。

> “未找到”不等于确认产品没有变化，仅表示截至 2026-08-03，在可公开检索的一手页面中未发现满足本项目重大更新口径、且尚未收录的记录。

## 一、已补录重大更新的原有产品

| 产品 | 补录日期 | 补录内容 | 一手记录 |
|---|---:|---|---|
| WorkBuddy | 07-21 | v5.3.3：腾讯文档深度集成、内置 PPT、本地长期记忆编辑、连接器搜索、文件修改备份 | [官方 Changelog](https://www.codebuddy.cn/docs/workbuddy/Changelog) |
| Skywork | 06-30、07-30 | Desktop 2.0 改为本地沙箱执行；2.4 支持对话中安装 Skill 与工作流沉淀 | [官方 Changelog](https://skywork.ai/desktop/en/changelog.html) |
| OpenWork | 07-30 | 0.18.12 分出 Public、Cloud、Enterprise 构建与更新通道 | [GitHub Release](https://github.com/different-ai/openwork/releases/tag/v0.18.12) |
| Microsoft Copilot Cowork | 06-16 | 全球 GA，多模型、Edge 浏览器、插件、企业安全与 Credits 计费 | [Microsoft 官方](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/) |
| Amazon Quick | 04-28 | 桌面应用、本地文件与 MCP、Office 文件交付、自然语言生成 Web 应用 | [AWS 文档历史](https://docs.aws.amazon.com/quick/latest/userguide/doc-history.html) |
| QClaw | 07-21 | 媒体报道部分业务及团队调整至 WorkBuddy 所在部门；产品仍独立运营 | [新浪科技](https://finance.sina.com.cn/tech/roll/2026-07-21/doc-iniiqefh4893034.shtml) |
| ArkClaw | 04-29 | 云电脑、文件空间、协作阶段管理、网页搜索与协作模式 | [火山引擎更新日志](https://www.volcengine.com/docs/87732/2371424?lang=zh) |
| 悟空 | 04-27 | 企业私有 Skill 中心、MCP 管理、任务分支与定时任务 Skill 绑定 | [官方 Changelog](https://wukong.dingtalk.com/docs/changelog/) |
| QwenPaw（原 CoPaw） | 07-24 | 2.0.1：PawApp、可编辑 Agent Mode、审批门、Windows 沙箱与治理规则 | [GitHub Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1) |
| AgentTeams（原 HiClaw） | 07-30 | 正式更名；v1.2 统一 Team/Worker 运行时契约并加入可视化管理 | [GitHub Release](https://github.com/agentscope-ai/AgentTeams/releases/tag/v1.2.0) |
| Kimi Claw | 07-24 | 官方披露 7×24 云端运行、持久记忆、定时任务、40GB 存储、Web SSH 与 Skill 生态 | [Kimi 官方介绍](https://www.kimi.com/zh-cn/resources/kimi-claw-introduction) |
| NemoClaw | 07-25 | 0.0.96：网络策略、DNS 推理切换、OpenShell 网关、可选 MCP 发现与沙箱加固 | [NVIDIA Release Notes](https://docs.nvidia.com/nemoclaw/latest/user-guide/openclaw/release-notes) |
| Gemini Spark | 06-30 | macOS 应用、本地文件执行、手机远程派单、第三方应用与实时跟踪 | [Google 官方](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/) |
| Loomy | 06-26 | 0.9.31：Alt+Space 全局入口、本地知识库 Beta、智能眼镜连接 | [官方更新日志](https://loomy.xunfei.cn/changelog) |
| Hermes Agent | 07-20 | 0.19：首 Token 延迟优化、智能审批、密钥源、后台结果持久投递与恢复 | [GitHub Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.20) |
| Kimi Work | 07-22 | Goal Mode、最多 300 个并行 Agent、插件、WebBridge、定时任务与本地执行 | [Kimi 官方介绍](https://www.kimi.com/resources/kimi-work-introduction) |
| OpenClaw | 07-13 | v2026.7.1：控制台重构、跨端应用、Codex/Claude Code 委派、原生子 Agent 与远程浏览器 | [GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1) |

## 二、逐项检查后未补录的原有产品

| 产品 | 检查结果 |
|---|---|
| QoderWork | “意识 / Awareness”官方记录已由现有 06-16 事件覆盖；未发现更新、更高影响且未收录的后续官方记录。 |
| 阶跃 AI 桌面 | 检索官方产品页与公开发布记录，未找到 07-19 后可核验的重大功能版本。 |
| MiniMax Agent | 官方 Changelog 可见版本未超出当前已收录的 Agent Teams、Pocket、Computer Use 等核心变化。 |
| Manus | 当前记录已覆盖产品关键迭代；未找到 07-19 后一手、带明确日期的未收录重大版本。 |
| Marvis | 官方公开页面未提供可稳定检索的版本日志；未补录。 |
| KroWork | 未找到一手、带明确日期且达到重大更新口径的新记录。 |
| Codex | 本轮此前已补入 07-29 Codex Security CLI/SDK；本次逐产品回看未再发现遗漏。 |
| Lantay | 官方公开更新信息不足，未找到可核验的重大遗漏。 |
| JVS Claw | 现有记录已覆盖 V2.4、移动端、Skill 管控、双引擎和安全能力；未发现新的官方重大版本。 |
| AutoClaw | 未找到 07-19 后一手、带明确日期的重大更新日志。 |
| MaxClaw | 未找到可核验且超出现有记录的重大更新。 |
| StepClaw | 未找到可核验且超出现有记录的重大更新。 |
| SkyClaw | 官方帮助中心出现记忆导入等说明，但公开信息不足以确认独立重大版本，暂不收录。 |
| LobsterAI | 未找到可核验且超出现有记录的重大更新。 |
| Molili | 未找到一手、带明确日期且达到重大更新口径的记录。 |
| EasyClaw | 未找到一手、带明确日期且达到重大更新口径的记录。 |
| Celia Claw | 未找到可核验且超出现有记录的重大更新。 |
| 小米 MiClaw | 现有记录已覆盖 06-17 正式版与连续工具调用；未发现新的官方重大版本。 |
| OfficeClaw | 官方文档显示小版本变化，但没有足够的变更内容支持“重大更新”判断。 |
| MaxHermes | 未找到一手、带明确日期且达到重大更新口径的后续记录。 |
| YOYO Claw | 荣耀官方页显示 2026.7 版本，但没有明确日期和相对上一版的重大变化说明，暂不收录。 |
| QbotClaw | 官方产品入口可用，但未找到独立、带日期的重大功能更新日志。 |
| Coze 3.0 | 当前记录已覆盖 3.0 的多 Agent、云电脑与本地 Agent 接入；未找到新的未收录重大版本。 |
| Lenovo AI Claw | 当前记录已覆盖发布期核心能力；未找到 07-19 后官方重大更新。 |
| WPS Claw | 未找到稳定的一手版本日志；论坛/讨论信息不足以支撑重大更新。 |
| AstronClaw | 未找到一手、带明确日期且达到重大更新口径的后续记录。 |
| Microsoft Scout | 当前记录已覆盖 Build 发布和企业常驻 Agent 定位；未找到新的官方重大版本。 |
| Qoder Cloud Agents | 当前记录已覆盖 Agent、Environment、Session、事件流、记忆与定时任务体系；未发现新的重大遗漏。 |

## 三、新增产品与行业组织/产品调整

- 新增产品卡：**千问办公（Qwen Office）**。07-27 开启限量测试，桌面端先行，网页端和钉钉内嵌版规划中。[官方产品页](https://qwenwork.cn/)
- 新增行业事件：**豆包企业版以 Agent 形态进入飞书**，可调用飞书文档、搜索、聊天和会议，成果继承组织权限。[飞书官方](https://www.feishu.cn/content/article/7664559035831635186)
- QClaw 调整：已作为“媒体报道”收录，明确标注暂未找到腾讯官方组织公告。
- 飞书组织调整：用户提供文章所述“飞书产品团队与豆包整合、GTM 与火山引擎合并”未找到字节跳动官方公告，因此没有把组织归属当作已证实事实写入正式数据；正式收录的是飞书官方可确认的产品与权限整合。

## 四、数据落点

- 所有带 `productSlug` 的重大更新均由 `data/major-updates.js` 自动进入对应产品详情页。
- QwenPaw 与 AgentTeams 的产品名称、官网入口和更新时间已同步修订。
- 千问办公已加入 `data/site-data.js`，产品总数从 45 调整为 46。
