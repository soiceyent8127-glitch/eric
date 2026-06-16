window.RESEARCH_DATA = {
  "meta": {
    "title": "类 OpenClaw 和类 Claude Cowork 竞品调研",
    "source": "类OpenClaw&类ClaudeCowork竞品调研.docx",
    "generatedAt": "2026-06-08",
    "productCount": 45
  },
  "strategy": {
    "overview": "海外正在分化为两条路线：OpenAI / Anthropic 抢本地桌面 Agent 和个人生产力入口，Google / AWS / Microsoft 抢云端常驻 Agent 和企业工作流入口；国内则围绕 OpenClaw 生态做产品化封装，竞争核心是 IM 分发、混合执行环境、Skill 生态、办公场景交付和企业化治理。",
    "items": [
      {
        "id": 1,
        "title": "国外路线开始分叉：OpenAI / Anthropic 抢本地桌面 Agent，Google / AWS 更偏云端与企业工作流",
        "judgment": "国外大厂不是都在做同一种 Agent。OpenAI 和 Anthropic 更像是在对标 Claude Code / Claude Cowork，往本地桌面、浏览器、代码库和真实工作环境里扎；Google Spark 和 AWS Quick 则更偏云端常驻、企业数据连接和组织级工作流，B 端属性更强。",
        "evidence": "Codex 桌面版 5 月以来连续更新 Chrome 插件、手机远程控制、本地桌面任务、Appshots、Goal mode、Remote computer use，说明 OpenAI 想做的是“本地桌面 Agent 工作台”，而不是类 OpenClaw 部署器。AWS Quick 则被定义为 AI 原生企业操作台，强调 Slack、Teams、Outlook、Salesforce 等企业工具连接，以及 Deep Research、Workflow、知识复用等企业场景。"
      },
      {
        "id": 2,
        "title": "国内竞争重点不是纯本地或纯云端，而是 IM 入口 + 混合执行 + Skill 生态的产品化封装",
        "judgment": "国内厂商更像是在围绕 OpenClaw 生态做产品化封装：一边抢微信、飞书、钉钉、企微等 IM 入口，一边同时提供本地执行和云端沙箱，再叠加 Skill 市场、多模型选择、专家 Agent、办公场景工作台。国内不会简单走纯本地或纯云端路线，而是更强调“随时发起、远程调度、混合执行”。",
        "evidence": "QoderWork 接入微信、钉钉、飞书，支持手机远程调度桌面 AI；WorkBuddy 微信小程序提供本地电脑执行和云端沙箱两种模式；MiniMax Agent Pocket 接入飞书、微信、企微、Slack；QClaw、ArkClaw、Kimi Claw、AutoClaw、MaxClaw、StepClaw 等也都强调 IM 接入、Skill 生态和 OpenClaw 兼容。"
      },
      {
        "id": 3,
        "title": "类 Cowork 和类 OpenClaw 正在合流，最终会变成“可执行的工作操作系统”",
        "judgment": "这类产品的竞争重心正在从“AI 回答得好不好”转向“AI 能不能进入真实工作流并交付结果”。OpenClaw 更像执行底座，Cowork 更像办公场景封装，两者边界会越来越模糊。",
        "evidence": "Skywork 桌面版集成 SkyClaw，MiniMax Agent 集成 MaxClaw，阶跃桌面伙伴集成 StepClaw；WorkBuddy 兼容 OpenClaw 体系，QoderWork 兼容 Claude Code Skills。这说明 Cowork 产品正在吸收 Claw 的执行能力，OpenClaw 生态也在被包装成更易用的办公产品。"
      },
      {
        "id": 4,
        "title": "跨端入口会成为关键分发战场，尤其是 IM、手机、浏览器和桌面之间的连续任务流",
        "judgment": "用户不会只在桌面端发起任务。真正高频的入口会分布在微信、飞书、Slack、Teams、手机、浏览器和桌面悬浮窗之间。谁能把“随手发指令”和“后台长期执行”打通，谁就更容易占据用户心智。",
        "evidence": "QoderWork 支持手机通过微信、钉钉、飞书远程调度桌面 AI；WorkBuddy 微信小程序支持云端和本地两种执行模式；MiniMax Pocket 支持在 IM 中唤起 Agent 并把结果回传；Manus 支持手机远程控制 Desktop；Codex 也支持从 ChatGPT 手机 App 连接运行 Codex 的 Mac。"
      },
      {
        "id": 5,
        "title": "安全、权限、沙箱、审批、审计会从“加分项”变成基础门槛",
        "judgment": "Agent 一旦开始操作电脑、文件、浏览器和企业系统，用户最担心的就不只是效果，而是它会不会乱动、删错、越权或泄露数据。因此，安全控制会成为产品可信度和企业采购的前置条件。",
        "evidence": "QoderWork 设计了本地沙盒、逻辑删除、高危拦截、沙箱隔离；OpenWork 强调独立浏览环境、人工批准和日志可追；Microsoft Copilot Cowork 强调检查点、暂停、修改、执行前审批，以及 Microsoft 365 权限、安全和审计边界；Manus 的终端指令需要用户实时确认。"
      },
      {
        "id": 6,
        "title": "通用 Agent 会被垂直工作台切开，高频办公场景会优先产品化",
        "judgment": "泛用 Agent 很容易陷入“什么都能做但什么都不稳定”。竞品正在把高频场景拆成明确工作台，比如 PPT、写作、设计、文档、数据仪表盘、研究、周报等。短期内，垂直场景的完成度会比泛化能力更能带来留存。",
        "evidence": "QoderWork 上线设计工作台、PPT 工作台、写作工作台，覆盖 AI 办公高频场景；WorkBuddy 更新连接器、专家团、数据仪表盘、多模态生成；Lantay 聚焦专业文档智能体工作台，强调法律等专业场景的知识库、溯源和安全部署。"
      },
      {
        "id": 7,
        "title": "多 Agent 团队化会成为长任务的标准形态，但核心价值在“拆解、协作、验证和交付”",
        "judgment": "多 Agent 不是为了概念炫技，而是为了解决长链路任务中一个 Agent 容易跑偏、难检查、难复用的问题。未来复杂任务会标配 Leader / Worker / Verifier 或 Manager / Worker 结构。",
        "evidence": "MiniMax Agent Teams 中，Leader 负责目标理解、任务拆解、分配和汇总，Worker 负责具体执行，Verifier 负责事实、代码、格式和覆盖清单检查；WorkBuddy 的 Agent 专家团把任务拆给产品经理、架构师、设计师、测试和主理人等角色；Marvis 也采用一个统筹 Agent 加五个专家 Agent 的结构。"
      },
      {
        "id": 8,
        "title": "Skill 生态会快速商品化，单纯“兼容很多 Skill”不再构成壁垒",
        "judgment": "大量产品都在兼容 OpenClaw、Claude Skills、GitHub、ClawHub、SkillHub。Skill 会像插件一样逐渐标准化。真正的壁垒不是“能装很多 Skill”，而是能否筛选、组合、验证、分发高质量工作流。",
        "evidence": "QoderWork 兼容 Claude Code Skills；WorkBuddy 兼容 OpenClaw 体系；阶跃“妙计”兼容 Claude Skills；MiniMax Expert Agents 兼容 Claude Skills；Codex 支持来自 OpenClaw、ClaudeCode 等平台的技能；QClaw、ArkClaw、CoPaw、JVS Claw 等也都围绕 ClawHub、GitHub、SkillHub 构建技能生态。"
      },
      {
        "id": 9,
        "title": "成本和复用会成为用户是否持续使用的关键变量",
        "judgment": "Agent 类产品天然消耗 Token 和算力。如果用户每次都要从头推理、从头执行、从头付费，长期使用会有心理负担。未来产品需要把高频工作流固化、缓存、模板化，降低重复任务成本。",
        "evidence": "QoderWork 通过模型分级选择，在日常任务和复杂任务之间平衡成本和效果；MiniMax 将 TokenPlan 和 Agent Plan 合并，CLI、API、Agent credits 共享；KroWork 强调“一次生成、永久复用”，把工作流固化成本地桌面应用，下次点击运行，无需再消耗积分或 Token。"
      }
    ]
  },
  "products": [
    {
      "name": "QoderWork（阿里巴巴）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "阿里巴巴",
      "launchDate": "3.3",
      "updatedAt": "5.20 5.20 3.27",
      "deployment": "",
      "businessModel": "* 个人方案：分层订阅制+Credits计量* Teams：$30/席位/月，每席位2,000 Credits，支持集中计费、管理员控制台和SSO，适合小型团队协作* 企业：价格待定，包含Teams全部功能，支持SCIM席位管理、企业级知识管理和更好的支持服务，适合大型组织定制需求",
      "features": "在设备端构建全隔离的本地沙盒 - 沙箱内预置了核心运行环境与工具链，免配置启动即用。执行起任务来，不仅更快、更稳，而且成功率也更高 - 此外，虚拟机沙盒也是QoderWork三层安全防护中重要的一环： - 逻辑删除：文件删除从物理删除改为逻辑删除，误操作可恢复； - 高危拦截：遇到高风险命令自动弹窗，需用户确认后方可执行； - 沙箱隔离：任务在独立沙箱中运行，不污染宿主系统；Agent可在其中安装依赖、运行脚本，结果再同步回主界面。 - 模型分级选择 - 日常文档处理、信息整理，选标准档，流畅完成，大幅节省Credits - 复杂分析、深度推理，切旗舰档，算力拉满。",
      "ecosystem": "模型生态 - 模型分级选择器 - 为开发者提供五个高性能模型池，在成本与性能之间取得不同平衡。如同智能汽车的驾驶模式，为每项任务选用最合适的档位 - 模型直选 - 包括：Qwen-Coder-Qoder-1.0（基于 Qwen Coder 的定制模型）Qwen3.5-Plus、GLM-5等 - 支持API Key自定义模型 - 技能生态 - 技能广场 - 集成了更多场景化Skills，同时也支持自定义Skills，让AI能力真正融入你的每个工作流 - 兼容 Claude Code Skills",
      "partnership": "",
      "website": "https://qoder.com/en/qoderwork",
      "pricing": "https://docs.qoder.com/account/pricing",
      "updates": "3.27 QoderWork 直接接入 IM——微信、钉钉、飞书 在手机上与QoderWork对话，即可随时随地调度桌面AI助手的全部能力，并支持发送文字、图片、文件、语音以及图文组合等信息，远程完成文件整理、数据处理、文档生成等任务 截至 2026-05-27 首发上线「三大领域模式」：设计工作台、PPT工作台、写作工作台，一次性覆盖AI办公高频场景。 设计工作台（Code as Design）：设计产物即可运行的工程文件，跳过\"设计到代码\"的翻译链；通过 Questions（先追问对齐意图）、Design Plan（先出结构化设计计划再执行）、Nudge（配色/间距/圆角等以可调参数暴露，拖动即微调）三个机制将\"抽卡\"变为\"协作\"；支持画笔圈选区域定向修改；生成产物可一键交付 Qoder IDE 进入研发流水线。 PPT 工作台：将制作拆解为 11 个可介入阶段，用户在大纲、主题、图像、内页四个层级均可介入；每页演示稿以独立 HTML 文件落盘、Theme JSON 为视觉真值，可读、可 diff、可手改、断网可渲染；支持 PDF/HTML/PPTX 三种格式离线导出，PPTX 保留可编辑组件并自动生成 150–300 字演讲备注；内置 30+ 模板，任意成稿可一键抽取为团队模板复用。 写作工作台：提供正式、轻松、技术、创意四种预设语气；核心能力为\"选中即批注\"——圈选文本直接批注定向修改；提供润色、重写、扩写、缩短、修复语法、中英互译等快捷动作；支持人机接力、历史版本回看与一键导出 PDF",
      "summary": "在设备端构建全隔离的本地沙盒 - 沙箱内预置了核心运行环境与工具链，免配置启动即用",
      "featureBullets": [
        "在设备端构建全隔离的本地沙盒",
        "沙箱内预置了核心运行环境与工具链，免配置启动即用。执行起任务来，不仅更快、更稳，而且成功率也更高",
        "此外，虚拟机沙盒也是QoderWork三层安全防护中重要的一环：",
        "逻辑删除：文件删除从物理删除改为逻辑删除，误操作可恢复",
        "高危拦截：遇到高风险命令自动弹窗，需用户确认后方可执行",
        "沙箱隔离：任务在独立沙箱中运行，不污染宿主系统",
        "Agent可在其中安装依赖、运行脚本，结果再同步回主界面"
      ],
      "ecosystemBullets": [
        "为开发者提供五个高性能模型池，在成本与性能之间取得不同平衡。如同智能汽车的驾驶模式，为每项任务选用最合适的档位",
        "包括：Qwen-Coder-Qoder-1.0（基于 Qwen Coder 的定制模型）Qwen3.5-Plus、GLM-5等",
        "支持API Key自定义模型",
        "集成了更多场景化Skills，同时也支持自定义Skills，让AI能力真正融入你的每个工作流",
        "兼容 Claude Code Skills"
      ],
      "updateBullets": [
        "3.27 QoderWork 直接接入 IM——微信、钉钉、飞书 在手机上与QoderWork对话，即可随时随地调度桌面AI助手的全部能力，并支持发送文字、图片、文件、语音以及图文组合等信息，远程完成文件整理、数据处理、文档生成等任务 截至 2026-05-27 首发上线「三大领域模式」：设计工作台、PPT工作台、写作工作台，一次性覆盖AI办公高频场景",
        "设计工作台（Code as Design）：设计产物即可运行的工程文件，跳过\"设计到代码\"的翻译链",
        "通过 Questions（先追问对齐意图）、Design Plan（先出结构化设计计划再执行）、Nudge（配色/间距/圆角等以可调参数暴露，拖动即微调）三个机制将\"抽卡\"变为\"协作\"",
        "支持画笔圈选区域定向修改",
        "生成产物可一键交付 Qoder IDE 进入研发流水线",
        "PPT 工作台：将制作拆解为 11 个可介入阶段，用户在大纲、主题、图像、内页四个层级均可介入",
        "每页演示稿以独立 HTML 文件落盘、Theme JSON 为视觉真值，可读、可 diff、可手改、断网可渲染"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p01-qoderwork"
    },
    {
      "name": "WorkBuddy（腾讯）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "腾讯",
      "launchDate": "3.9",
      "updatedAt": "5月 5月 3.31",
      "deployment": "",
      "businessModel": "* 个人/企业分层订阅制+ Credits 资源包",
      "features": "微信一键直连 - 企微稳连+定时任务：仅需设置一次，自动打工不操心 - 技能无缝迁移，腾讯全链路安全保驾护航 - 内置了超20种技能包，完全兼容OpenClaw体系 - 专属Skills管理功能。支持技能一键导入、在对话中快速引用、随手启用或禁用 - 支持多窗口、多Agent并行工作",
      "ecosystem": "模型生态 - 支持腾讯混元、DeepSeek、GLM、Kimi、MiniMax等主流大模型 - IM生态 - 支持微信、企业微信、QQ、钉钉、飞书 - 技能生态 - 内置超 20 种 Skills 技能包 - 与CodeBuddy同源共生 - WorkBuddy与腾讯双方推出的AI编程工具CodeBuddy采用同一套智能体架构，二者共存统一账号、管理后台和控制体系。Credits 共享",
      "partnership": "",
      "website": "https://www.codebuddy.cn/work/",
      "pricing": "https://www.codebuddy.cn/docs/workbuddy/Pricing",
      "updates": "3.31 WorkBuddy 微信小程序正式上线，成为客服消息和 ClawBot 之后，WorkBuddy 在微信里的第三个入口 云端和本地电脑两种执行模式 本地模式，电脑开机即可使用。手机下指令，电脑端的 WorkBuddy 远程执行，能读取、操作本地软件 云端模式，彻底不依赖电脑。WorkBuddy 在云端沙箱里独立运行，出差、通勤、周末，通过手机微信即可操控。云端模式还有定时任务能力 WorkBuddy 小程序内置多个主流大模型——GLM-5.0、Kimi-K2.5、MiniMax-M2.7 等，可以根据任务随时切换使用 截至 2026-05-27 连接器：在 WorkBuddy 内授权后由 AI 直接读取数据、结果一键存回云端，将原本下载—放入—解析—生成—复制的流程从约 10 分钟压到 30 秒；已打通腾讯文档、QQ 邮箱、TAPD、腾讯会议等 Agent 专家团：系统把任务拆给多个角色并行处理（产品经理做需求分析、架构师做技术方案、设计师做原型、测试做检验、主理人汇总交付）；平台已有 29 个方向的专家团、超过 100 个角色 探索：入口在左侧菜单\"探索\"，提供各类精选案例及其 Prompt、Skill 配置、专家调用方式，可一键复制到自己项目改关键词出结果，覆盖办公协同、效率工具、商业运营、旅行出行等 11 个高频场景。 自动更新 ima 知识库：接入 ima，设置追踪主题与来源后定期自动抓取最新内容并整理入库； 自动生成数据仪表盘：把表格发给它并下指令，自动判断数据归类与图表类型（柱状图/饼图等）、自动配色，生成可视化看板；无需打开 Excel，可将 HTML 保存后贴入汇报 PPT。 接入多模态技能（生图/生视频）：接入腾讯混元大模型，自带生图、生视频功能，可在 WorkBuddy 内一站式做海报、生成 AI 视频。",
      "summary": "微信一键直连 - 企微稳连+定时任务：仅需设置一次，自动打工不操心 - 技能无缝迁移，腾讯全链路安全保驾护航 - 内置了超20种技能包，完全兼容OpenClaw体系 - 专属Skills管理功能",
      "featureBullets": [
        "企微稳连+定时任务：仅需设置一次，自动打工不操心",
        "技能无缝迁移，腾讯全链路安全保驾护航",
        "内置了超20种技能包，完全兼容OpenClaw体系",
        "专属Skills管理功能。支持技能一键导入、在对话中快速引用、随手启用或禁用",
        "支持多窗口、多Agent并行工作"
      ],
      "ecosystemBullets": [
        "支持腾讯混元、DeepSeek、GLM、Kimi、MiniMax等主流大模型",
        "支持微信、企业微信、QQ、钉钉、飞书",
        "内置超 20 种 Skills 技能包",
        "与CodeBuddy同源共生",
        "WorkBuddy与腾讯双方推出的AI编程工具CodeBuddy采用同一套智能体架构，二者共存统一账号、管理后台和控制体系。Credits 共享"
      ],
      "updateBullets": [
        "3.31 WorkBuddy 微信小程序正式上线，成为客服消息和 ClawBot 之后，WorkBuddy 在微信里的第三个入口 云端和本地电脑两种执行模式 本地模式，电脑开机即可使用。手机下指令，电脑端的 WorkBuddy 远程执行，能读取、操作本地软件 云端模式，彻底不依赖电脑。WorkBuddy 在云端沙箱里独立运行，出差、通勤、周末，通过手机微信即可操控。云端模式还有定时任务能力 WorkBuddy 小程序内置多个主流大模型——GLM-5.0、Kimi-K2.5、MiniMax-M2.7 等，可以根据任务随时切换使用 截至 2026-05-27 连接器：在 WorkBuddy 内授权后由 AI 直接读取数据、结果一键存回云端，将原本下载—放入—解析—生成—复制的流程从约 10 分钟压到 30 秒",
        "已打通腾讯文档、QQ 邮箱、TAPD、腾讯会议等 Agent 专家团：系统把任务拆给多个角色并行处理（产品经理做需求分析、架构师做技术方案、设计师做原型、测试做检验、主理人汇总交付）",
        "平台已有 29 个方向的专家团、超过 100 个角色 探索：入口在左侧菜单\"探索\"，提供各类精选案例及其 Prompt、Skill 配置、专家调用方式，可一键复制到自己项目改关键词出结果，覆盖办公协同、效率工具、商业运营、旅行出行等 11 个高频场景",
        "自动更新 ima 知识库：接入 ima，设置追踪主题与来源后定期自动抓取最新内容并整理入库",
        "自动生成数据仪表盘：把表格发给它并下指令，自动判断数据归类与图表类型（柱状图/饼图等）、自动配色，生成可视化看板",
        "无需打开 Excel，可将 HTML 保存后贴入汇报 PPT",
        "接入多模态技能（生图/生视频）：接入腾讯混元大模型，自带生图、生视频功能，可在 WorkBuddy 内一站式做海报、生成 AI 视频。"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "多 Agent",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p02-workbuddy"
    },
    {
      "name": "阶跃 AI 桌面伙伴（阶跃星辰）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "阶跃星辰",
      "launchDate": "1.19",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "* 免费",
      "features": "悬浮窗常驻交互形态 - 以悬浮窗形式常驻桌面右上角，随时唤醒，区别于大多数桌面Agent采用的独立窗口/对话框形态 - 主动执行任务 - 当条件触发时会自动开始任务，帮你不用开口也能获得结果 - 全局记忆功能： - 可记录用户电脑活动轨迹，生成复盘报告/工作日报 - 数据存储于本地保障隐私安全 - 同步应用： - 自动将当前网页/文件/应用信息同步进输入框",
      "ecosystem": "模型生态 - 阶跃自研模型体系 - 技能生态 - 接入技能社区5000+技能 - 把经验变成妙计 - 将常用指令保存为妙计，也可以在社群里获得他人的经验妙计 - 妙计能完美兼容Claude Skills——这意味着你在Claude那边写的Skills，可以直接丢到小跃的妙计里运行，不需要改任何代码 - Claw生态 - 集成StepClaw",
      "partnership": "",
      "website": "https://www.stepfun.com/chats/new",
      "pricing": "未找到独立公开定价页",
      "updates": "",
      "summary": "悬浮窗常驻交互形态 - 以悬浮窗形式常驻桌面右上角，随时唤醒，区别于大多数桌面Agent采用的独立窗口/对话框形态 - 主动执行任务 - 当条件触发时会自动开始任务，帮你不用开口也能获得结果 - 全局记忆功能： - 可记",
      "featureBullets": [
        "以悬浮窗形式常驻桌面右上角，随时唤醒，区别于大多数桌面Agent采用的独立窗口/对话框形态",
        "当条件触发时会自动开始任务，帮你不用开口也能获得结果",
        "可记录用户电脑活动轨迹，生成复盘报告/工作日报",
        "数据存储于本地保障隐私安全",
        "自动将当前网页/文件/应用信息同步进输入框"
      ],
      "ecosystemBullets": [
        "接入技能社区5000+技能",
        "将常用指令保存为妙计，也可以在社群里获得他人的经验妙计",
        "妙计能完美兼容Claude Skills——这意味着你在Claude那边写的Skills，可以直接丢到小跃的妙计里运行，不需要改任何代码"
      ],
      "updateBullets": [],
      "capabilities": [
        "本地执行",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p03-ai"
    },
    {
      "name": "MiniMax Agent（MiniMax）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "MiniMax",
      "launchDate": "1.20",
      "updatedAt": "5.13 5.13 4.14",
      "deployment": "",
      "businessModel": "* 分层订阅制+增值包（积分）补充",
      "features": "10000+Expert Agents - 打造垂直领域的顶级专家分身。Expert Agents 超越了现有预设的 Multi-agent 的 Pro 模式，通过封装私有知识和行业独家 SOP（标准操作流程），用专家级的知识、能力和经验储备来武装用户 - 定义自己的 Expert Agents，通过更多的上下文信息和更自由的自定义设置，让 Agent 在更懂你的基础上提供个性化的专家服务",
      "ecosystem": "模型生态 - MiniMax自研模型体系 - 技能生态 - Expert Agents - 兼容Claude Skills - Claw生态 - 集成MaxClaw - IM生态 - 接入微信，飞书",
      "partnership": "",
      "website": "https://agent.minimaxi.com/",
      "pricing": "https://agent.minimaxi.com/pricing",
      "updates": "截至 2026-04-17 Pocket 功能（Beta 版），支持接入飞书、微信、企业微信、Slack 等主流 IM 通讯软件，让桌面智能体可以随身携带。用户在 IM 中唤起 Pocket 并发送指令后，Agent 即在其电脑上执行任务，并将结果回传至原对话。 Computer Use 功能，Agent 可以像人一样看屏幕、操作鼠标和键盘，直接操作用户电脑上的软件。本地安装的设计工具、内部的报表系统、藏在偏好设置中的开关、需要在多个应用之间手动衔接的流程——这些过去 Agent 难以触达的任务，现在都可以由它完成。 使用场景：远程找文件、筛选简历并生成飞书文档、操作本地应用与系统设置等 截至 2026-05-27 升级后的 Agent 的新名字Mavis — MiniMax as a Jarvis。 上线 Agent Teams。MiniMax Agent 桌面端现在支持多个 Agent 并行工作，你可以创建不同角色的 Agent，让它们组成一个团队协作完成任务，适合那些又长又复杂、一个 Agent 搞不定的任务。 Leader 是整个 Team 的控制面，负责理解用户目标、拆分子任务、决定执行顺序、分配每个任务由哪个 Worker 来接、合并结果、控制什么时候停止。你可以理解为项目经理。 Worker 负责具体执行。不同 Worker 可以拥有不同的工具、上下文和输出要求。有的做资料检索，有的写代码，有的生成文档，有的处理表格，有的调用外部系统。Worker 的价值在于专业化，角色越清楚，它的输出就越容易被复用、比较和检查。 Verifier 负责把「完成」变成「可以交付」。它可以检查事实来源、跑代码测试、核对格式要求、对照覆盖清单，也可以对 Worker 的结果提出修改意见。这里有一个关键的设计逻辑：Worker 停止的条件是 Verifier 启动的原因，Verifier 停止的条件是尽可能发现 Worker 的问题，而发现的问题又成为 Worker 重新启动的原因。它们之间是相互制衡的关系。 TokenPlan 和 Agent Plan 合并。一份订阅，CLI、API、Agent 全打通，M2.7、音乐、视频、语音所有模型都包含在内。Credits 额度在 Agent 和 API 之间可以共享，用法更灵活。如果你之前同时订阅了两个 Plan，会额外赠送一个月会员。",
      "summary": "10000+Expert Agents - 打造垂直领域的顶级专家分身",
      "featureBullets": [
        "10000+Expert Agents",
        "打造垂直领域的顶级专家分身。Expert Agents 超越了现有预设的 Multi-agent 的 Pro 模式，通过封装私有知识和行业独家 SOP（标准操作流程），用专家级的知识、能力和经验储备来武装用户",
        "定义自己的 Expert Agents，通过更多的上下文信息和更自由的自定义设置，让 Agent 在更懂你的基础上提供个性化的专家服务"
      ],
      "ecosystemBullets": [
        "MiniMax自研模型体系",
        "Expert Agents",
        "兼容Claude Skills"
      ],
      "updateBullets": [
        "截至 2026-04-17 Pocket 功能（Beta 版），支持接入飞书、微信、企业微信、Slack 等主流 IM 通讯软件，让桌面智能体可以随身携带。用户在 IM 中唤起 Pocket 并发送指令后，Agent 即在其电脑上执行任务，并将结果回传至原对话",
        "Computer Use 功能，Agent 可以像人一样看屏幕、操作鼠标和键盘，直接操作用户电脑上的软件。本地安装的设计工具、内部的报表系统、藏在偏好设置中的开关、需要在多个应用之间手动衔接的流程——这些过去 Agent 难以触达的任务，现在都可以由它完成",
        "使用场景：远程找文件、筛选简历并生成飞书文档、操作本地应用与系统设置等 截至 2026-05-27 升级后的 Agent 的新名字Mavis — MiniMax as a Jarvis",
        "上线 Agent Teams。MiniMax Agent 桌面端现在支持多个 Agent 并行工作，你可以创建不同角色的 Agent，让它们组成一个团队协作完成任务，适合那些又长又复杂、一个 Agent 搞不定的任务",
        "Leader 是整个 Team 的控制面，负责理解用户目标、拆分子任务、决定执行顺序、分配每个任务由哪个 Worker 来接、合并结果、控制什么时候停止。你可以理解为项目经理",
        "Worker 负责具体执行。不同 Worker 可以拥有不同的工具、上下文和输出要求。有的做资料检索，有的写代码，有的生成文档，有的处理表格，有的调用外部系统。Worker 的价值在于专业化，角色越清楚，它的输出就越容易被复用、比较和检查",
        "Verifier 负责把「完成」变成「可以交付」。它可以检查事实来源、跑代码测试、核对格式要求、对照覆盖清单，也可以对 Worker 的结果提出修改意见。这里有一个关键的设计逻辑：Worker 停止的条件是 Verifier 启动的原因，Verifier 停止的条件是尽可能发现 Worker 的问题，而发现的问题又成为 Worker 重新启动的原因。它们之间是相互制衡的关系"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "多 Agent",
        "长期记忆"
      ],
      "slug": "p04-minimax-agent-minimax"
    },
    {
      "name": "Skywork桌面版（昆仑万维）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "昆仑万维",
      "launchDate": "2.4",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "* 分层订阅制",
      "features": "Windows原生覆盖，更懂Windows上班族的桌面AI - 支持Claude和Gemini模型，让用户实现“模型选择自由” - 用户可以在Claude Opus 4.5、Claude Sonnet 4.5和Gemini 3 Pro模型之间选择， - 亦可启用“auto”模式，由系统根据任务类型智能推荐最适合的模型，实现更高效、更精准的任务处理。 - 自主调用海量Skills，智能灵活选择模型和Skills",
      "ecosystem": "模型生态 - 支持Claude Opus 4.5、Claude Sonnet 4.5 和 Gemini 3 Pro - auto模式 - 技能生态 - 内置集成了100+个经过精选的、真正有用Skills - Claw生态 - 集成SkyClaw - 在Skywork页面点击即可，100%云端部署，无需自行配置硬件或云主机",
      "partnership": "",
      "website": "https://skywork.ai/",
      "pricing": "https://skywork.ai/pricing",
      "updates": "",
      "summary": "Windows原生覆盖，更懂Windows上班族的桌面AI - 支持Claude和Gemini模型，让用户实现“模型选择自由” - 用户可以在Claude Opus 4.5、Claude Sonnet 4.5和Gemin",
      "featureBullets": [
        "Windows原生覆盖，更懂Windows上班族的桌面AI",
        "支持Claude和Gemini模型，让用户实现“模型选择自由”",
        "用户可以在Claude Opus 4.5、Claude Sonnet 4.5和Gemini 3 Pro模型之间选择，",
        "亦可启用“auto”模式，由系统根据任务类型智能推荐最适合的模型，实现更高效、更精准的任务处理",
        "自主调用海量Skills，智能灵活选择模型和Skills"
      ],
      "ecosystemBullets": [
        "支持Claude Opus 4.5、Claude Sonnet 4.5 和 Gemini 3 Pro",
        "内置集成了100+个经过精选的、真正有用Skills",
        "在Skywork页面点击即可，100%云端部署，无需自行配置硬件或云主机"
      ],
      "updateBullets": [],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "Skill 生态"
      ],
      "slug": "p05-skywork"
    },
    {
      "name": "Marvis（腾讯）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "腾讯",
      "launchDate": "5.20",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "公测中，每日1000万免费token",
      "features": "操作系统层级的个人AI助手 - 一个统筹Agent+五个专家 Agent+卡通 Agent 工作室：为执行中长程任务的等待过程设计了卡通风格办公室，预设 6 个不同角色与状态的 Agent 组成团队，呈现工作信息。分别是PM、Windows 系统运维、APP操作专员、网页交互专员、数字资产管家、搜索专家 - 本地知识库：安装时自动扫描电脑内的所有文档、应用、图库，放入本地知识库 - 端侧隐私模式：针对有隐私需求的用户（如财务、HR），将任务完全固定在端侧模型运行，无需联网，且端侧模型「零 Token 消耗」。 - 真正执行的电脑操控：能感知电脑硬件配置并联网搜索游戏配置要求向用户反馈、关闭 Windows 系统广告等，接到指令后真正去完成任务，而非仅提供文字指南或索要权限后让用户自行执行。 - 桌面端操控移动应用：在桌面端运行 Android 应用，支持多开、不与用户抢键鼠，可完成签到打卡、点外卖、小程序点饮料等操作，有望帮 PC 产业从移动设备「抢」回部分用户使用时长。",
      "ecosystem": "IM生态：连接手机端和微信 - Skill生态：技能广场，支持接入clawhub,skillhub,github的skill - 终端生态：安卓客户端，支持手机远程控制电脑执行任务",
      "partnership": "",
      "website": "https://marvis.qq.com/",
      "pricing": "未找到公开定价页",
      "updates": "",
      "summary": "操作系统层级的个人AI助手 - 一个统筹Agent+五个专家 Agent+卡通 Agent 工作室：为执行中长程任务的等待过程设计了卡通风格办公室，预设 6 个不同角色与状态的 Agent 组成团队，呈现工作信息",
      "featureBullets": [
        "操作系统层级的个人AI助手",
        "一个统筹Agent+五个专家 Agent+卡通 Agent 工作室：为执行中长程任务的等待过程设计了卡通风格办公室，预设 6 个不同角色与状态的 Agent 组成团队，呈现工作信息。分别是PM、Windows 系统运维、APP操作专员、网页交互专员、数字资产管家、搜索专家",
        "本地知识库：安装时自动扫描电脑内的所有文档、应用、图库，放入本地知识库",
        "端侧隐私模式：针对有隐私需求的用户（如财务、HR），将任务完全固定在端侧模型运行，无需联网，且端侧模型「零 Token 消耗」",
        "真正执行的电脑操控：能感知电脑硬件配置并联网搜索游戏配置要求向用户反馈、关闭 Windows 系统广告等，接到指令后真正去完成任务，而非仅提供文字指南或索要权限后让用户自行执行",
        "桌面端操控移动应用：在桌面端运行 Android 应用，支持多开、不与用户抢键鼠，可完成签到打卡、点外卖、小程序点饮料等操作，有望帮 PC 产业从移动设备「抢」回部分用户使用时长。"
      ],
      "ecosystemBullets": [
        "IM生态：连接手机端和微信",
        "Skill生态：技能广场，支持接入clawhub,skillhub,github的skill",
        "终端生态：安卓客户端，支持手机远程控制电脑执行任务"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p09-marvis"
    },
    {
      "name": "KroWork（快手）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "快手",
      "launchDate": "4.30",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "",
      "features": "本地桌面工具生成助手 - 一次生成、永久复用：区别于其他AI产品“每次从头推理”的模式，KroWork可将用户的工作流固化为本地桌面应用，下次使用只需点击“运行”，无需再消耗积分或token。（e.g.财务人员只需描述“做一个发票报销汇总工具”，KroWork即可生成一个本地应用，自动按部门归类发票、校验金额并生成汇总报表) - 全链路零代码生成与本地部署：从代码生成、界面搭建到应用打包一步到位，生成的应用直接出现在桌面、双击即用，支持开机自启和系统级管理，彻底解决了非技术用户在配环境、装依赖等方面的痛点 - 本地沙箱执行，数据安全可控：所有任务在本地沙盒中隔离执行，数据不上传云端。每项操作都在隔离的工作区中运行，触碰沙箱外的任何内容前会征求用户同意，用户可查看执行的每一个步骤",
      "ecosystem": "模型生态：国内版支持Qwen、Kimi、DeepSeek等最新模型，国际版支持OpenAI和Anthropic最新旗舰模型，用户可根据需求选择最佳底层模型",
      "partnership": "",
      "website": "https://krowork.com/",
      "pricing": "https://krowork.com/docs/en/membership-points/membership-policy",
      "updates": "",
      "summary": "本地桌面工具生成助手 - 一次生成、永久复用：区别于其他AI产品“每次从头推理”的模式，KroWork可将用户的工作流固化为本地桌面应用，下次使用只需点击“运行”，无需再消耗积分或token",
      "featureBullets": [
        "一次生成、永久复用：区别于其他AI产品“每次从头推理”的模式，KroWork可将用户的工作流固化为本地桌面应用，下次使用只需点击“运行”，无需再消耗积分或token。（e.g.财务人员只需描述“做一个发票报销汇总工具”，KroWork即可生成一个本地应用，自动按部门归类发票、校验金额并生成汇总报表)",
        "全链路零代码生成与本地部署：从代码生成、界面搭建到应用打包一步到位，生成的应用直接出现在桌面、双击即用，支持开机自启和系统级管理，彻底解决了非技术用户在配环境、装依赖等方面的痛点",
        "本地沙箱执行，数据安全可控：所有任务在本地沙盒中隔离执行，数据不上传云端。每项操作都在隔离的工作区中运行，触碰沙箱外的任何内容前会征求用户同意，用户可查看执行的每一个步骤"
      ],
      "ecosystemBullets": [
        "模型生态：国内版支持Qwen、Kimi、DeepSeek等最新模型，国际版支持OpenAI和Anthropic最新旗舰模型，用户可根据需求选择最佳底层模型"
      ],
      "updateBullets": [],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p10-krowork"
    },
    {
      "name": "Lantay（面壁智能）",
      "type": "类 Cowork",
      "group": "国内",
      "region": "国内",
      "vendor": "面壁智能",
      "launchDate": "4.14",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "* 公测中",
      "features": "类 Cursor 的专业级文档智能体工作台 - Vibedocing 智能文档交互新范式——人与 AI在同一界面/文档/空间里实时协同和共创。产品采用 导航区 + 工作区 + 对话区 三合一模式，不用再在十几个窗口之间来回切换，所有操作都在同一界面完成。 - 便捷性：作为 24 小时在线的助手，可理解用户文字和语音形式的复杂指令，并支持同时处理 200 个 100 MB 规模的文档，效率充沛，状态稳定。 - 专业性：内置垂直领域的专业知识库，有效减少 AI 幻觉。法律从业者使用时，模型会根据任务规划自动调用专业知识库进行检索，检索过程与依据来源在任务执行中全程可见，确保分析与建议均有溯源、可核实。 - 安全性：提供 Lantay 一体机版本，依托面壁智能的端云协同架构，可根据客户需求确保敏感数据不上传至云端模型。 - 三大核心能力：智能工作空间、线性 Agent 画布、智能工作台",
      "ecosystem": "",
      "partnership": "",
      "website": "https://lantay.modelbest.cn/",
      "pricing": "未找到公开定价页",
      "updates": "",
      "summary": "类 Cursor 的专业级文档智能体工作台 - Vibedocing 智能文档交互新范式——人与 AI在同一界面/文档/空间里实时协同和共创",
      "featureBullets": [
        "类 Cursor 的专业级文档智能体工作台",
        "Vibedocing 智能文档交互新范式——人与 AI在同一界面/文档/空间里实时协同和共创。产品采用 导航区 + 工作区 + 对话区 三合一模式，不用再在十几个窗口之间来回切换，所有操作都在同一界面完成",
        "便捷性：作为 24 小时在线的助手，可理解用户文字和语音形式的复杂指令，并支持同时处理 200 个 100 MB 规模的文档，效率充沛，状态稳定",
        "专业性：内置垂直领域的专业知识库，有效减少 AI 幻觉。法律从业者使用时，模型会根据任务规划自动调用专业知识库进行检索，检索过程与依据来源在任务执行中全程可见，确保分析与建议均有溯源、可核实",
        "安全性：提供 Lantay 一体机版本，依托面壁智能的端云协同架构，可根据客户需求确保敏感数据不上传至云端模型",
        "三大核心能力：智能工作空间、线性 Agent 画布、智能工作台"
      ],
      "ecosystemBullets": [],
      "updateBullets": [],
      "capabilities": [
        "云端沙箱",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p13-lantay"
    },
    {
      "name": "OpenWork（different-ai）",
      "type": "类 Cowork",
      "group": "国外",
      "region": "国外",
      "vendor": "different-ai",
      "launchDate": "1.19",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "* 免费桌面端获客（支持自带模型）降低用户门槛* 云端托管（按worker订阅）+企业定制销售",
      "features": "完全免费、100% 开源 - 支持本地模型/API Key - 两种运行模式： - Host Mode：直接在本地启动 OpenCode 服务，选择一个文件夹作为工作区，AI 就在你眼皮底下帮你干活。 - Client Mode：如果你有一个远程的 OpenCode 服务器，OpenWork 也可以通过 URL 连接上去，实现远程办公。 - 速度约为 Claude for Chrome、Cowork 的 4 倍 - Token 消耗显著更低 - 独立浏览环境，隔离主浏览器登录态 - 所有操作需人工批准，日志全程可追",
      "ecosystem": "模型生态 - 支持 50+ LLMs - IM生态 - 支持接入WhatsApp、Slack、Telegram - 技能生态 - 内置skill管理器，支持从Github导入技能",
      "partnership": "",
      "website": "https://openworklabs.com/",
      "pricing": "https://openworklabs.com/pricing",
      "updates": "",
      "summary": "完全免费、100% 开源 - 支持本地模型/API Key - 两种运行模式： - Host Mode：直接在本地启动 OpenCode 服务，选择一个文件夹作为工作区，AI 就在你眼皮底下帮你干活",
      "featureBullets": [
        "完全免费、100% 开源",
        "支持本地模型/API Key",
        "Host Mode：直接在本地启动 OpenCode 服务，选择一个文件夹作为工作区，AI 就在你眼皮底下帮你干活",
        "Client Mode：如果你有一个远程的 OpenCode 服务器，OpenWork 也可以通过 URL 连接上去，实现远程办公",
        "速度约为 Claude for Chrome、Cowork 的 4 倍",
        "Token 消耗显著更低",
        "独立浏览环境，隔离主浏览器登录态"
      ],
      "ecosystemBullets": [
        "支持 50+ LLMs",
        "支持接入WhatsApp、Slack、Telegram",
        "内置skill管理器，支持从Github导入技能"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "安全治理"
      ],
      "slug": "p06-openwork-different-ai"
    },
    {
      "name": "Microsoft Copilot Cowork（Microsoft）",
      "type": "类 Cowork",
      "group": "国外",
      "region": "国外",
      "vendor": "Microsoft",
      "launchDate": "3.9",
      "updatedAt": "3.30",
      "deployment": "",
      "businessModel": "* Cowork 目前处于有限的研究预览阶段，它将随新的 E7 层级一同推出，该层级定价为每位用户 99 美元，捆绑了 Copilot 以及智能体管理平台Agent 365和企业级安全方案",
      "features": "强项是“跨 Office 协作”（i.e.“根据上周的 Teams 会议纪要（Teams），写一份 PPT（PowerPoint），并将数据更新到我的财务报表（Excel）中。”) - 强调用户可控，包括检查点、暂停、修改和执行前审批。 - 主打企业级治理与合规，运行在 Microsoft 365 的权限、安全和审计边界内。",
      "ecosystem": "模型生态 - 与Anthropic合作，把 Claude Cowork 的 agent 引擎，包进自己的安全合规层 - 原生融合 Microsoft 365 生态，深度 Office/企业流程自动化，在Outlook、Teams、Excel、PowerPoint中实现真正的\"跨应用自动干活\"",
      "partnership": "",
      "website": "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/",
      "pricing": "https://www.microsoft.com/en-us/microsoft-365/copilot/pricing",
      "updates": "更新 Copilot Cowork 已通过 Frontier 计划开放使用，企业用户可通过该计划提前体验这款专为 Microsoft 365打造、支持长时程多步骤工作的全新 AI 工具",
      "summary": "强项是“跨 Office 协作”（i.e.“根据上周的 Teams 会议纪要（Teams），写一份 PPT（PowerPoint），并将数据更新到我的财务报表（Excel）中",
      "featureBullets": [
        "强项是“跨 Office 协作”（i.e.“根据上周的 Teams 会议纪要（Teams），写一份 PPT（PowerPoint），并将数据更新到我的财务报表（Excel）中。”)",
        "强调用户可控，包括检查点、暂停、修改和执行前审批",
        "主打企业级治理与合规，运行在 Microsoft 365 的权限、安全和审计边界内。"
      ],
      "ecosystemBullets": [
        "与Anthropic合作，把 Claude Cowork 的 agent 引擎，包进自己的安全合规层",
        "原生融合 Microsoft 365 生态，深度 Office/企业流程自动化，在Outlook、Teams、Excel、PowerPoint中实现真正的\"跨应用自动干活\""
      ],
      "updateBullets": [
        "更新 Copilot Cowork 已通过 Frontier 计划开放使用，企业用户可通过该计划提前体验这款专为 Microsoft 365打造、支持长时程多步骤工作的全新 AI 工具"
      ],
      "capabilities": [
        "IM 入口",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p07-microsoft-copilot-cowork-microsoft"
    },
    {
      "name": "Manus桌面版（Manus）",
      "type": "类 Cowork",
      "group": "国外",
      "region": "国外",
      "vendor": "Manus",
      "launchDate": "3.16 3.16 3.16",
      "updatedAt": "3.30，4.30，5.12",
      "deployment": "",
      "businessModel": "* 分层订阅制",
      "features": "核心功能：My Computer - 本地文件，全权限智能处理 - 本地应用与环境，全链路掌控 - 能启动和控制电脑里已安装的应用程序， - 能直接调用本地的开发工具、运行环境，甚至是闲置的GPU算力 - 云-端联动，解锁24小时无人值守能力 - 结合原本内置的Gmail、日历、在线文档等Connectors连接器，Manus可以实现跨设备、跨平台的全链路自动化 - 安全红线：每一次操作都需“人工点头” - 人工介入授权机制，生成的每一条拟执行的终端指令，都必须经过用户的实时点击确认 - 跨设备 Agent - 可以在多个设备间无缝工作",
      "ecosystem": "IM生态 - 支持Telegram,Slack等平台 - 技能生态 - 支持skills - 支持从Github导入 - 官方技能库",
      "partnership": "",
      "website": "https://help.manus.im/zh-CN/articles/14089011-%E5%A6%82%E4%BD%95%E4%B8%8B%E8%BD%BD-manus-%E6%A1%8C%E9%9D%A2%E7%AB%AF%E5%BA%94%E7%94%A8",
      "pricing": "https://manus.im/pricing",
      "updates": "3.30 支持从手机远程控制 Desktop 4.30 claude computer：一台永远不关机的电脑，一台 Ubuntu 系统的专属云端机器，24 小时运转，无休无止。 5.12 浏览器插件：产品入口进入浏览器，与编程插件和网页侧工作流结合，进一步贴近日常操作场景",
      "summary": "核心功能：My Computer - 本地文件，全权限智能处理 - 本地应用与环境，全链路掌控 - 能启动和控制电脑里已安装的应用程序， - 能直接调用本地的开发工具、运行环境，甚至是闲置的GPU算力 - 云-端联动，解",
      "featureBullets": [
        "核心功能：My Computer",
        "本地文件，全权限智能处理",
        "本地应用与环境，全链路掌控",
        "能启动和控制电脑里已安装的应用程序，",
        "能直接调用本地的开发工具、运行环境，甚至是闲置的GPU算力",
        "云-端联动，解锁24小时无人值守能力",
        "结合原本内置的Gmail、日历、在线文档等Connectors连接器，Manus可以实现跨设备、跨平台的全链路自动化"
      ],
      "ecosystemBullets": [
        "支持Telegram,Slack等平台",
        "支持从Github导入"
      ],
      "updateBullets": [
        "3.30 支持从手机远程控制 Desktop 4.30 claude computer：一台永远不关机的电脑，一台 Ubuntu 系统的专属云端机器，24 小时运转，无休无止",
        "5.12 浏览器插件：产品入口进入浏览器，与编程插件和网页侧工作流结合，进一步贴近日常操作场景"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p08-manus-manus"
    },
    {
      "name": "Amazon Quick（AWS）",
      "type": "类 Cowork",
      "group": "国外",
      "region": "国外",
      "vendor": "AWS",
      "launchDate": "4.28",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "分层订阅制企业版",
      "features": "AI原生企业操作台 - 角色化助理：预置了 15 个专家助理，用户不用先写一大段提示词，直接选更接近任务的角色就能进入工作状态； - Deep Research（深度研究）：面向需要持续收集信息、整理逻辑并形成初步判断的复杂问题。 - Workflow（flow）：把高频、重复、规则相对明确的工作固定下来，下次不用从零开始，典型场景是周会、周报、数据汇报。 - 协同汇总：针对多人协同时信息分散的问题。支持打通飞书 CLI，可总结用户社群消息、提炼讨论热点、共性问题和高频需求，省去逐条翻聊天记录、爬楼找上下文的成本。 - 知识复用：可按需圈定知识范围（如把某个文件夹设为 Agent 可访问内容），让历史资料能被搜索、调用、对比和复用。",
      "ecosystem": "IM生态：接入Slack、Teams、Outlook、Salesforce等 - Skill生态：内置部分skill，支持上传skill - 模型生态：由Amazon Bedrock支持",
      "partnership": "",
      "website": "https://aws.amazon.com/quick/",
      "pricing": "https://aws.amazon.com/quick/pricing/",
      "updates": "",
      "summary": "AI原生企业操作台 - 角色化助理：预置了 15 个专家助理，用户不用先写一大段提示词，直接选更接近任务的角色就能进入工作状态",
      "featureBullets": [
        "角色化助理：预置了 15 个专家助理，用户不用先写一大段提示词，直接选更接近任务的角色就能进入工作状态",
        "Deep Research（深度研究）：面向需要持续收集信息、整理逻辑并形成初步判断的复杂问题",
        "Workflow（flow）：把高频、重复、规则相对明确的工作固定下来，下次不用从零开始，典型场景是周会、周报、数据汇报",
        "协同汇总：针对多人协同时信息分散的问题。支持打通飞书 CLI，可总结用户社群消息、提炼讨论热点、共性问题和高频需求，省去逐条翻聊天记录、爬楼找上下文的成本",
        "知识复用：可按需圈定知识范围（如把某个文件夹设为 Agent 可访问内容），让历史资料能被搜索、调用、对比和复用。"
      ],
      "ecosystemBullets": [
        "IM生态：接入Slack、Teams、Outlook、Salesforce等",
        "Skill生态：内置部分skill，支持上传skill",
        "模型生态：由Amazon Bedrock支持"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "Skill 生态",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p11-amazon-quick-aws"
    },
    {
      "name": "Codex桌面版（Open AI）",
      "type": "类 Cowork",
      "group": "国外",
      "region": "国外",
      "vendor": "Open AI",
      "launchDate": "2.2（桌面版正式上线）",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "分层订阅",
      "features": "Chat 与 Project 双模式：Chat 适合零碎对话、文件不保存；Project 模式会在电脑上对应创建文件夹、所有生成文件自动存入，适合写代码、做 PPT、做 Excel 等持续任务，配有终端工具、文件管理、侧边栏（实时总结进度、生成文件与执行步骤）。 - 多任务管理（顺序/插队/并行）：A 任务跑时可继续发 B 自动接着干、可用引导按钮让新指令立即改变当前方向、也可新建对话同时跑；不同对话不共享内容但共享同一项目文件夹。配合环境与工作树机制，多智能体并行时各分独立工作间避免改文件冲突。 - 插件与外部能力：内置 Chrome 浏览器插件可直接控制 Chrome 执行任务（后台新开标签、使用用户已登录账号态浏览网页、填表、操作页面）；集成 OpenAI Image 2 模型可对话内直接出图；支持电脑操控，目前仅 macOS、Windows 暂未支持。 - Skills 与自动化：自带预置技能，也可安装来自 OpenClaw、ClaudeCode 等平台的常用技能（Skill 跨平台流通）；自动化定时任务可选项目设执行频率让对话线程按计划自动跑 - 工程化能力：MCP 图形化配置无需手写 JSON 即可连接 GitHub、飞书、Notion 等外部工具；Hook 可在 Codex 干活前后自动触发预设脚本做格式化、安全检查、日志记录、自动测试；Git 管理把核心操作集成进侧边栏，点选即可提交/回退/查记录 - 桌面宠物：为像素风、实时反映工作状态，官方内置 8 只可自创建；回复语气可切亲和或务实；自定义指令可提前写一段说明要求 Codex 用人话汇报、并要求它自己先验证再来找你。",
      "ecosystem": "IM生态：slack等 - Skill生态：内置部分skill，支持上传skill - 模型生态：GPT系列模型 - 终端生态：手机端集成进 ChatGPT App、双端实时同步",
      "partnership": "",
      "website": "https://openai.com/codex/",
      "pricing": "https://help.openai.com/en/articles/20001106",
      "updates": "时间 / 模块 更新内容 2026-02-02 Introducing the Codex app - 推出Codex应用，适用于 macOS 的 Codex 应用是一个桌面界面，用于并行运行代理线程，并与代理协作处理长时间运行的任务。它包含项目侧边栏、线程列表和用于跨项目跟踪工作的审阅窗格 2026-03-25 Build and install plugins in Codex - Codex 支持插件：插件是可安装的包，可以把 skills、app 集成和 MCP server 配置打包成可复用的工作流插件可用于 Codex app、CLI 和 IDE 扩展 2026-04-16 Codex can now help with more of your work - Codex 正在成为一个更广泛的 AI 工作空间。此次更新让用户更容易开始工作、验证 Codex 正在构建的内容、创建更丰富的输出，并在更长时间运行的任务中保持进度。重点包括：app 内浏览器、Computer use、Chats、thread automations、任务侧栏、GitHub PR 工作流、artifact viewer、Remote connections、多终端、多窗口和 Intel Mac 支持 2026-04-23 GPT-5.5 and Codex app updates - GPT-5.5 现在可用于 Codex，是面向复杂编码、computer use、知识工作和研究工作流的新 frontier modelCodex app 现在可以让 Codex 操作 app 内浏览器，用于点击渲染后的 UI、复现视觉 bug、或在 app 内验证本地修复Codex 还可以把符合条件的 approval prompts 交给自动 reviewer agent 先审查 2026-05-07 Codex for Chrome - 新的 Chrome 扩展让 Codex 更擅长处理浏览器中的 app 和网站它可以在后台跨标签页并行工作，不接管浏览器，同时用户仍然控制 Codex 可以使用哪些网站 2026-05-14 Work with Codex from anywhere - 现在可以在 ChatGPT 手机 app 中，通过连接一台运行 Codex app 的 Mac 来使用 CodexCodex 从连接的主机运行，因此手机上也可以使用同一套项目、文件、凭据、插件、skills 和配置。 2026-05-21 Appshots, goal mode, and more - Appshots 现在可用于 macOS 的 Codex app：按下两个 Command 键，即可把最前面的 app 窗口以截图和可用文本的形式发送给 CodexGoal mode 不再是实验功能，可让 Codex 朝一个具体目标持续工作数小时甚至数天Remote computer use 让 Codex 可在 Mac 锁屏后继续使用桌面 app，包括通过 Codex Mobile 远程使用",
      "summary": "Chat 与 Project 双模式：Chat 适合零碎对话、文件不保存",
      "featureBullets": [
        "Chat 与 Project 双模式：Chat 适合零碎对话、文件不保存",
        "Project 模式会在电脑上对应创建文件夹、所有生成文件自动存入，适合写代码、做 PPT、做 Excel 等持续任务，配有终端工具、文件管理、侧边栏（实时总结进度、生成文件与执行步骤）",
        "多任务管理（顺序/插队/并行）：A 任务跑时可继续发 B 自动接着干、可用引导按钮让新指令立即改变当前方向、也可新建对话同时跑",
        "不同对话不共享内容但共享同一项目文件夹。配合环境与工作树机制，多智能体并行时各分独立工作间避免改文件冲突",
        "插件与外部能力：内置 Chrome 浏览器插件可直接控制 Chrome 执行任务（后台新开标签、使用用户已登录账号态浏览网页、填表、操作页面）",
        "集成 OpenAI Image 2 模型可对话内直接出图",
        "支持电脑操控，目前仅 macOS、Windows 暂未支持"
      ],
      "ecosystemBullets": [
        "IM生态：slack等",
        "Skill生态：内置部分skill，支持上传skill",
        "模型生态：GPT系列模型",
        "终端生态：手机端集成进 ChatGPT App、双端实时同步"
      ],
      "updateBullets": [
        "时间 / 模块 更新内容 2026-02-02 Introducing the Codex app",
        "推出Codex应用，适用于 macOS 的 Codex 应用是一个桌面界面，用于并行运行代理线程，并与代理协作处理长时间运行的任务。它包含项目侧边栏、线程列表和用于跨项目跟踪工作的审阅窗格 2026-03-25 Build and install plugins in Codex",
        "Codex 支持插件：插件是可安装的包，可以把 skills、app 集成和 MCP server 配置打包成可复用的工作流插件可用于 Codex app、CLI 和 IDE 扩展 2026-04-16 Codex can now help with more of your work",
        "Codex 正在成为一个更广泛的 AI 工作空间。此次更新让用户更容易开始工作、验证 Codex 正在构建的内容、创建更丰富的输出，并在更长时间运行的任务中保持进度。重点包括：app 内浏览器、Computer use、Chats、thread automations、任务侧栏、GitHub PR 工作流、artifact viewer、Remote connections、多终端、多窗口和 Intel Mac 支持 2026-04-23 GPT-5.5 and Codex app updates",
        "GPT-5.5 现在可用于 Codex，是面向复杂编码、computer use、知识工作和研究工作流的新 frontier modelCodex app 现在可以让 Codex 操作 app 内浏览器，用于点击渲染后的 UI、复现视觉 bug、或在 app 内验证本地修复Codex 还可以把符合条件的 approval prompts 交给自动 reviewer agent 先审查 2026-05-07 Codex for Chrome",
        "新的 Chrome 扩展让 Codex 更擅长处理浏览器中的 app 和网站它可以在后台跨标签页并行工作，不接管浏览器，同时用户仍然控制 Codex 可以使用哪些网站 2026-05-14 Work with Codex from anywhere",
        "现在可以在 ChatGPT 手机 app 中，通过连接一台运行 Codex app 的 Mac 来使用 CodexCodex 从连接的主机运行，因此手机上也可以使用同一套项目、文件、凭据、插件、skills 和配置"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p12-codex-open-ai"
    },
    {
      "name": "Qclaw（腾讯）",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "腾讯",
      "launchDate": "3.10",
      "updatedAt": "5.20，5.9 5.20，5.9 4.21，4.22，4.23 4.9 3.18，3.20",
      "deployment": "本地",
      "businessModel": "* 每天四千万免费token，每日零点重置* 可通过API和Coding plan接入自定义大模型",
      "features": "帮助用户一键本地部署 OpenClaw - 可视化龙虾界面：像素工作室 - 用户可以根据工作状态看到龙虾在整理资料，执行任务或待机等过程 - 定时任务（i.e.每天查星座运势，看科技新闻，提醒按时喝水） - 远程电脑操控 - 用户通过微信给 QClaw 发消息，它就能直接操作家里或办公室的电脑（i.e.文件整理，打包等）",
      "ecosystem": "IM生态 - 一键扫码接入微信和企业微信 - 同步打通QQ，飞书，钉钉 - 技能生态 - 灵感广场——预置常用任务与skills - 支持接入ClawHub 和 GitHub的skill",
      "partnership": "",
      "website": "https://claw.guanjia.qq.com",
      "pricing": "未找到公开定价页",
      "updates": "4.21 QClaw 正式开启海外版内测，现已开放：美国、加拿大、新加坡等多个国家和地区，内测期间每天赠送4000万token 4.22 V0.2.12 版本 灵感广场全新升级专家广场 上线QClaw专属小程序 支持通过连接器操作百度网盘、携程、飞猪、腾讯新闻 支持自主选择默认模型 支持自定义方式接入更多模型 用量统计从4千万token换成了积分模式，每天更新800积分 4.23 V0.2.13 版本 Mac端支持创建Hermes Agent 4月9日 QClaw V2大版本正式上线，新版本（V0.2.5）主要更新内容如下 Connector：让 AI 生成的内容可以直接\"投递\"到实际工作流中，不用再手动复制粘贴。目前已接入腾讯文档、腾讯问卷、腾讯会议、ima、Notion、QQ邮箱、网易邮箱等应用。比如让它整理完项目进展后直接写入腾讯文档，格式自动保留 Multi-Agent（多虾人设）：可以创建多个不同性格和专长的 AI 角色同时工作，最多并行跑 3 个。预设了\"无不言\"（毒舌撰稿人）、\"林且慢\"（共情辅导员）、\"代可行\"（务实程序员）三个角色，用户也可以自建 业内首个自带安全防护的龙虾管家 开启这个功能后，电脑上会挂一个“龙虾管家保护条”。它能把AI死死按在安全限制范围内干活，实时盯着拦截高风险的执行脚本、文件误删和网络访问 3.18 微信入口升级为小程序，支持上传或接收电脑端文件 可以通过小程序给电脑端QClaw下发指令，直接在小程序里接收QClaw处理完的电脑文件。未来，还将陆续支持语音指令、图片传输等微信原生的多模态交互 「灵感广场」全新上线，预置常用任务与 skills，用户无需编写指令即可一键使用 围绕“办公提效”、“深度研究”、“娱乐游戏”、“自律生活”四大核心场景，预置了大量开箱即用的实用任务 3.20 正式开启全量公测，无需邀请码，用户通过官网下载最新版本 直连通道全面进化：五大 IM 工具全覆盖 支持一键扫码接入微信和企业微信，还同步打通了 QQ、飞书、钉钉等主流即时通信工具 “定时任务”，让周期任务管理更简单 “每天想查查星座运势、看看新闻资讯、提醒股价波动，或者只是提醒您喝杯水”，现在，所有定时任务都能统一可视化操作！开关、随时调整，智能生活从此更省心。” 像素工作室 为龙虾打造了一间像素风格的专属工作室。它不再只是后台的一个进程，而是会根据工作状态忙前忙后 5.20 新增记忆模块，管理agent记忆 5.9 上线腾讯文档协作，上线ima文档协作，远控通道支持连接元宝",
      "summary": "帮助用户一键本地部署 OpenClaw - 可视化龙虾界面：像素工作室 - 用户可以根据工作状态看到龙虾在整理资料，执行任务或待机等过程 - 定时任务（i.e.每天查星座运势，看科技新闻，提醒按时喝水） - 远程电脑操控",
      "featureBullets": [
        "帮助用户一键本地部署 OpenClaw",
        "可视化龙虾界面：像素工作室",
        "用户可以根据工作状态看到龙虾在整理资料，执行任务或待机等过程",
        "定时任务（i.e.每天查星座运势，看科技新闻，提醒按时喝水）",
        "用户通过微信给 QClaw 发消息，它就能直接操作家里或办公室的电脑（i.e.文件整理，打包等）"
      ],
      "ecosystemBullets": [
        "一键扫码接入微信和企业微信",
        "同步打通QQ，飞书，钉钉",
        "灵感广场——预置常用任务与skills",
        "支持接入ClawHub 和 GitHub的skill"
      ],
      "updateBullets": [
        "4.21 QClaw 正式开启海外版内测，现已开放：美国、加拿大、新加坡等多个国家和地区，内测期间每天赠送4000万token 4.22 V0.2.12 版本 灵感广场全新升级专家广场 上线QClaw专属小程序 支持通过连接器操作百度网盘、携程、飞猪、腾讯新闻 支持自主选择默认模型 支持自定义方式接入更多模型 用量统计从4千万token换成了积分模式，每天更新800积分 4.23 V0.2.13 版本 Mac端支持创建Hermes Agent 4月9日 QClaw V2大版本正式上线，新版本（V0.2.5）主要更新内容如下 Connector：让 AI 生成的内容可以直接\"投递\"到实际工作流中，不用再手动复制粘贴。目前已接入腾讯文档、腾讯问卷、腾讯会议、ima、Notion、QQ邮箱、网易邮箱等应用。比如让它整理完项目进展后直接写入腾讯文档，格式自动保留 Multi-Agent（多虾人设）：可以创建多个不同性格和专长的 AI 角色同时工作，最多并行跑 3 个。预设了\"无不言\"（毒舌撰稿人）、\"林且慢\"（共情辅导员）、\"代可行\"（务实程序员）三个角色，用户也可以自建 业内首个自带安全防护的龙虾管家 开启这个功能后，电脑上会挂一个“龙虾管家保护条”。它能把AI死死按在安全限制范围内干活，实时盯着拦截高风险的执行脚本、文件误删和网络访问 3.18 微信入口升级为小程序，支持上传或接收电脑端文件 可以通过小程序给电脑端QClaw下发指令，直接在小程序里接收QClaw处理完的电脑文件。未来，还将陆续支持语音指令、图片传输等微信原生的多模态交互 「灵感广场」全新上线，预置常用任务与 skills，用户无需编写指令即可一键使用 围绕“办公提效”、“深度研究”、“娱乐游戏”、“自律生活”四大核心场景，预置了大量开箱即用的实用任务 3.20 正式开启全量公测，无需邀请码，用户通过官网下载最新版本 直连通道全面进化：五大 IM 工具全覆盖 支持一键扫码接入微信和企业微信，还同步打通了 QQ、飞书、钉钉等主流即时通信工具 “定时任务”，让周期任务管理更简单 “每天想查查星座运势、看看新闻资讯、提醒股价波动，或者只是提醒您喝杯水”，现在，所有定时任务都能统一可视化操作！开关、随时调整，智能生活从此更省心。” 像素工作室 为龙虾打造了一间像素风格的专属工作室。它不再只是后台的一个进程，而是会根据工作状态忙前忙后 5.20 新增记忆模块，管理agent记忆 5.9 上线腾讯文档协作，上线ima文档协作，远控通道支持连接元宝"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "多 Agent",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p14-qclaw"
    },
    {
      "name": "ArkClaw（字节）",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "字节",
      "launchDate": "3.9",
      "updatedAt": "5.19，5.22 5.19，5.22 4.18 3.18，3.22，3.26",
      "deployment": "云端SaaS（无需安装）",
      "businessModel": "* 方舟 Coding Plan Pro 套餐分层订阅制 * Lite 套餐：40 元/月，送 7 天ArkClaw体验，到期后创建的 ArkClaw 会被删除 * Pro 套餐：200 元/月，持续使用 ArkClaw， 一对一专属 ECS 资源、7×24 在线",
      "features": "帮助用户一键云端部署 OpenClaw - 无缝集成飞书，扫码安装 - 点击“飞书配对”功能，用手机飞书扫描终端弹出的二维码，轻松几步即可完成 ArkClaw 与飞书机器人配对 - 安全可信的专属环境 - 不暴露公网服务与端口，全面保护数据与隐私安全 - 支持火山引擎专属 Skills Hub，确保 Skills 能力质量与信息合规 - AI助手安全加固，防范数据泄露、系统损坏等风险",
      "ecosystem": "模型生态 - 除了接入豆包模型之外，还可以使用 Kimi-K2.5、MiniMax-M2.5、DeepSeek-V3.2 等其他的国产大模型，任意切换 - IM生态 - 接入飞书、钉钉、企业微信、微信 - 技能生态 - 内置了 10000+ Skills - 支持通过火山引擎专属 Skill Hub、ClawHub 等渠道安装各类技能插件",
      "partnership": "",
      "website": "https://www.volcengine.com/product/arkclaw",
      "pricing": "https://www.volcengine.com/docs/82379/1925114?lang=zh",
      "updates": "3.18 火山联网搜索Skill，只需简单配置就能在 ArkClaw和 OpenClaw 中调用 3.22 微信正式上线“ClawBot”插件，支持用户将 OpenClaw 接入微信，ArkClaw 也第一时间完成适配 3.26 微博官宣接入火山引擎ArkClaw，用户通过@微博龙虾助手 即可便捷调用这一AI服务 5.19 AI 持仓哨兵：不是全新 Agent，而是基于现有「A 股分析师」Agent 通过 8 轮对话训练调教出的专属持仓监控模式。用户用对话告诉它盯谁、怎么盯、怎么汇报，无需重写 Prompt、改配置或调 API，约 3 分钟完成训练；训练后写入长期记忆，下次说一句\"开始今日盯股\"即可激活。 5.22 AI 盯盘管家：在「AI 持仓哨兵」基础上，ArkClaw 推出「AI 盯盘管家」，将投研全流程封装为定时任务，系统自动执行并推送结果，告别每次手动输入口令。两者区别为：持仓哨兵是手动发口令的被动问答模式，盯盘管家是定时自动推送的主动管家模式；安装「A 股分析师」Agent 后系统自动预置 4 套模版，一键启用、无需配置 Prompt",
      "summary": "帮助用户一键云端部署 OpenClaw - 无缝集成飞书，扫码安装 - 点击“飞书配对”功能，用手机飞书扫描终端弹出的二维码，轻松几步即可完成 ArkClaw 与飞书机器人配对 - 安全可信的专属环境 - 不暴露公网服务",
      "featureBullets": [
        "帮助用户一键云端部署 OpenClaw",
        "无缝集成飞书，扫码安装",
        "点击“飞书配对”功能，用手机飞书扫描终端弹出的二维码，轻松几步即可完成 ArkClaw 与飞书机器人配对",
        "不暴露公网服务与端口，全面保护数据与隐私安全",
        "支持火山引擎专属 Skills Hub，确保 Skills 能力质量与信息合规",
        "AI助手安全加固，防范数据泄露、系统损坏等风险"
      ],
      "ecosystemBullets": [
        "除了接入豆包模型之外，还可以使用 Kimi-K2.5、MiniMax-M2.5、DeepSeek-V3.2 等其他的国产大模型，任意切换",
        "接入飞书、钉钉、企业微信、微信",
        "内置了 10000+ Skills",
        "支持通过火山引擎专属 Skill Hub、ClawHub 等渠道安装各类技能插件"
      ],
      "updateBullets": [
        "3.18 火山联网搜索Skill，只需简单配置就能在 ArkClaw和 OpenClaw 中调用 3.22 微信正式上线“ClawBot”插件，支持用户将 OpenClaw 接入微信，ArkClaw 也第一时间完成适配 3.26 微博官宣接入火山引擎ArkClaw，用户通过@微博龙虾助手 即可便捷调用这一AI服务 5.19 AI 持仓哨兵：不是全新 Agent，而是基于现有「A 股分析师」Agent 通过 8 轮对话训练调教出的专属持仓监控模式。用户用对话告诉它盯谁、怎么盯、怎么汇报，无需重写 Prompt、改配置或调 API，约 3 分钟完成训练",
        "训练后写入长期记忆，下次说一句\"开始今日盯股\"即可激活",
        "5.22 AI 盯盘管家：在「AI 持仓哨兵」基础上，ArkClaw 推出「AI 盯盘管家」，将投研全流程封装为定时任务，系统自动执行并推送结果，告别每次手动输入口令。两者区别为：持仓哨兵是手动发口令的被动问答模式，盯盘管家是定时自动推送的主动管家模式",
        "安装「A 股分析师」Agent 后系统自动预置 4 套模版，一键启用、无需配置 Prompt"
      ],
      "capabilities": [
        "IM 入口",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p15-arkclaw"
    },
    {
      "name": "悟空（阿里）",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "阿里",
      "launchDate": "3.17",
      "updatedAt": "5.22 5.22 4.12，4.14 4.2 3.18，3.20",
      "deployment": "云端",
      "businessModel": "* 邀请码内测中* 分层订阅制* 悟空目前仅限个人使用，暂不支持企业购买（已有计划支持）* 所有用户（含未付费）每天赠送 100 算粒，次日清零，单月上限500算粒",
      "features": "AI 驱动的智能体工作平台 - CLI化 - 将整个钉钉的既有能力体系全面 CLI 化（Command-line Interface，命令行界面）悟空不再需要像人类一样去点击按钮，而是通过原生指令，直接调用钉钉的一切能力和数据 - 原生文件操作语言Realdoc - 悟空为此专门从零搭建了一套 AI 原生文件系统 Realdoc，这是行业首次有人专门为 AI 重新设计一套文件操作语言 - 按行号、按关键词定位，只动需要动的地方，其他内容一字不碰 - 版本管理：可随时退回任意版本 - 每个 AI Agent 都有分配独立的云端工作空间 - 悟空首发十个 OPT Skills 套件，钉钉原生协同 - 悟空首批推出十大行业 OPT（One Person Team，一人团队）技能套件，覆盖一人电商、跨境电商、知识类博主、开发、门店、设计、制造、法律、财税、猎头十大场景。每个行业包预置了若干串联 Skill，把过去需要团队协作才能完成的工作流，压缩成一个人可以独立驾驭的操作序列",
      "ecosystem": "IM生态 - 悟空”可原生接入钉钉，并将支持接入包括 Slack、Microsoft Teams及微信在内的其他通讯平台 - 技能生态 - 推出了AI能力市场，目标直指“全球最大的ToB Skill市场”。该市场将携手开发者生态，提供从开发、审核、上架到分发的全链路体系，并全面兼容开源Skill体系 - 阿里巴巴集团旗下淘宝、天猫、1688、支付宝、阿里云等B端商业能力将以Skill形式逐步接入悟空",
      "partnership": "",
      "website": "https://www.dingtalk.com/wukong",
      "pricing": "https://alidocs.dingtalk.com/i/p/Y7kmb6ww8yeq4mLq/docs/Y1OQX0akWm3g2GBdsQoQLX0LJGlDd3mE?dontjump=true",
      "updates": "9.28 A2A 能力与体验全面升级 本版本重磅上线 A2A 与 SubAgent 能力，实现 AI 搜问和 AI 应用接入悟空的完整链路；同时全新升级新用户抵达体验，优化中控台功能，并带来底层服务稳定性的大幅提升，让悟空更加强大可靠。 A2A & SubAgent 能力正式上线 AI 搜问和 AI 应用现在可以无缝接入悟空，通过标准化的 A2A 协议实现智能能力的扩展与联动，让悟空拥有更丰富的技能生态。 4月12日 悟空v0. 9.26 定时任务上线与技能中心全面升级 本次更新带来两大重磅功能：全新的定时任务系统让你可以自动化安排各类任务，大幅提升工作效率；同时技能中心迎来全面升级，从界面到功能都有显著优化。此外，底层架构也完成了重要升级，整体稳定性和响应速度进一步提升。 - 定时任务 可以创建定时任务，让悟空在指定时间自动执行预设操作。无论是定时提醒、定期数据整理还是自动化工作流，都能轻松设置，不用手动重复操作。 技能重命名 支持对自己上传的技能进行重命名，方便更好地管理和组织个人技能库，让技能查找和使用更加高效。 4月2日 阿里巴巴正式发布新一代大语言模型Qwen3.6-Plus，阿里在企业级市场的旗舰 AI 应用悟空率先完成接入 3.18 在测试期间（3月31日前）将每日算粒加码 每日上限： 原50算粒 ➔ 100 算粒（5,000,000 tokens） 3.20 登录体验优化： 修复了 Windows 环境下的登录异常问题，接入更顺畅 邀请码系统优化： 改进了邀请码的使用逻辑，提升激活成功率 自定义模型配置： 优化了模型参数配置流程，满足个性化使用需求（仅高级会员可使用） 截至 2026-05-27 接入千问旗舰模型 Qwen3.7-Max 用户反馈 使用新模型可带来三大提升 智能体编程能力对比其他通用模型大幅提升，AI 从“副驾驶”进阶为能独立承担子任务的“协作者”，可自主编写跨文件代码、运行测试并迭代修复 长程任务规划与执行能力显著增强，面对企业场景中普遍的多步骤复杂工作流，能更可靠地拆解目标、调度资源并交付成果 性价比优势突出，每百万Tokens输入低至 2 元，大幅降低企业规模化使用门槛 战略方向 ATH成立后的核心价值正在于此，它让阿里的AI产品线开始从发散走向收敛，模型能力可以在迭代后的第一时间快速进入业务场景",
      "summary": "AI 驱动的智能体工作平台 - CLI化 - 将整个钉钉的既有能力体系全面 CLI 化（Command-line Interface，命令行界面）悟空不再需要像人类一样去点击按钮，而是通过原生指令，直接调用钉钉的一切能力",
      "featureBullets": [
        "AI 驱动的智能体工作平台",
        "将整个钉钉的既有能力体系全面 CLI 化（Command-line Interface，命令行界面）悟空不再需要像人类一样去点击按钮，而是通过原生指令，直接调用钉钉的一切能力和数据",
        "原生文件操作语言Realdoc",
        "悟空为此专门从零搭建了一套 AI 原生文件系统 Realdoc，这是行业首次有人专门为 AI 重新设计一套文件操作语言",
        "按行号、按关键词定位，只动需要动的地方，其他内容一字不碰",
        "版本管理：可随时退回任意版本",
        "每个 AI Agent 都有分配独立的云端工作空间"
      ],
      "ecosystemBullets": [
        "悟空”可原生接入钉钉，并将支持接入包括 Slack、Microsoft Teams及微信在内的其他通讯平台",
        "推出了AI能力市场，目标直指“全球最大的ToB Skill市场”。该市场将携手开发者生态，提供从开发、审核、上架到分发的全链路体系，并全面兼容开源Skill体系",
        "阿里巴巴集团旗下淘宝、天猫、1688、支付宝、阿里云等B端商业能力将以Skill形式逐步接入悟空"
      ],
      "updateBullets": [
        "9.28 A2A 能力与体验全面升级 本版本重磅上线 A2A 与 SubAgent 能力，实现 AI 搜问和 AI 应用接入悟空的完整链路",
        "同时全新升级新用户抵达体验，优化中控台功能，并带来底层服务稳定性的大幅提升，让悟空更加强大可靠",
        "A2A & SubAgent 能力正式上线 AI 搜问和 AI 应用现在可以无缝接入悟空，通过标准化的 A2A 协议实现智能能力的扩展与联动，让悟空拥有更丰富的技能生态",
        "4月12日 悟空v0. 9.26 定时任务上线与技能中心全面升级 本次更新带来两大重磅功能：全新的定时任务系统让你可以自动化安排各类任务，大幅提升工作效率",
        "同时技能中心迎来全面升级，从界面到功能都有显著优化。此外，底层架构也完成了重要升级，整体稳定性和响应速度进一步提升",
        "定时任务 可以创建定时任务，让悟空在指定时间自动执行预设操作。无论是定时提醒、定期数据整理还是自动化工作流，都能轻松设置，不用手动重复操作",
        "技能重命名 支持对自己上传的技能进行重命名，方便更好地管理和组织个人技能库，让技能查找和使用更加高效"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "自动化任务"
      ],
      "slug": "p16-product"
    },
    {
      "name": "CoPaw",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "阿里云 / 开源社区",
      "launchDate": "2.14",
      "updatedAt": "4.12 4.12 3.31",
      "deployment": "云端/本地",
      "businessModel": "* 免费开源",
      "features": "开源个人智能体工作台 - 本地云端均可部署 - 配置CoPaw时，用户仅需在本地用三条命令就可以完成安装与启动，在云端能在魔搭云空间一键配置 - 虽然支持云端部署，但数据默认全在本地，不依赖第三方托管 - 主动心跳机制与长期记忆功能 - 内置定时任务调度系统，不仅会被动响应用户的需求，还可自主完成查邮件、整理待办事项等任务 - 同时，CoPaw自带长期记忆功能，还会主动将用户对话中的决策、偏好、待办等写入记忆，使用时间越长，CoPaw越懂用户",
      "ecosystem": "模型生态 - API key自主接入模型 - 云端：ModelScope、DashScope 或自定义 - 本地：支持 llama.cpp、MLX、Ollama - IM生态 - 支持接入钉钉、飞书、QQ - 技能生态 - 内置10+skill，支持接入ClawHub 和 GitHub的skill",
      "partnership": "面向企业协作的 HiClaw 项目已加入 AgentScope 生态，未来会与 CoPaw 联合优化",
      "website": "https://clawbot.ai/copaw",
      "pricing": "未找到公开定价页",
      "updates": "4月12日 阿里云宣布开源桌面Agent工具CoPaw正式更名为QwenPaw，并同步发布1.1.0版本。 更名旨在强化与通义千问（Qwen）开源生态的深度整合，突出智能体本地模型支持及大小模型协同能力；‘Paw’延续其陪伴型个人助手定位。项目仍坚持开源协作，支持钉钉、飞书、QQ等多平台一键部署，兼容本地及云端运行。此次升级不改变其打造实用、安全、个性化AI助手的核心目标。 CoPaw 1.0 版本正式发布 本地化部署与定制小模型：支持在 Mac/Windows/Linux 上一键安装运行，同步发布了专为 CoPaw 场景定制的CoPaw-Flash 系列小模型，可根据设备性能自动推荐合适的尺寸和量化版本，数据不离开设备 安全机制：采用分层防御架构，包括监控工具调用的\"工具守卫\"、敏感文件访问控制的\"文件防护\"，以及技能安装前风险扫描的\"技能扫描器\" 多智能体协作：可在同一实例中创建多个隔离的智能体工作区，支持并行运行、独立配置，以及智能体之间的异步通信与协作 记忆管理：通过 ReMe 机制分层管理上下文和长期记忆，对话中动态压缩历史内容，结合向量检索和全文检索调用沉淀记忆 发布 CoPaw 1.0 新版本 为 CoPaw 量身定制的小模型 全面支持本地化模型部署，一键低门槛安装，即装即用。可以在本地使用为 CoPaw 量身定制的 CoPaw-Flash 系列模型 安全机制:工具文件技能三重防护 工具守卫（Tool Guard） — 运行时防御层 文件防护（File Guard） — 访问控制层 技能扫描器（Skill Scanner） — 准入审计层 在技能安装前或被启用时自动扫描，检测风险模式，提供拦截/警告/关闭三种模式 多智能体协同 在同一实例内运行多个独立的智能体工作区，各自拥有专属配置、记忆与技能，既可独立响应不同频道，也可协作完成复杂任务 工作空间隔离：同一实例内可运行多个彼此隔离的智能体，各自拥有独立的配置、记忆、技能与对话历史 并发启动与隔离：应用启动时并发加载已启用的智能体工作区；各智能体可并行处理不同任务，并通过锁机制保证并发安全与工作空间隔离 零停机重载：支持单个智能体配置热重载，同一进程内新实例就绪后原子切换，旧实例完成当前任务后自动退出，避免中断正在进行的对话 异步协作：支持智能体间显式通信与后台协作，复杂任务可由多个角色分工处理，主智能体可先提交任务、后续查询结果 记忆管理：上下文管理与记忆存储 上下文管理 采用分层管理机制，在内存中保留当前对话所需的关键信息与近期交互内容，并将历史对话、阶段性摘要、及工具结果进行持久化存储；在推理前，对上下文进行动态整理，优先保留近期强相关的内容，并将较早期的信息压缩为结构化摘要，必要时再按索引回溯原始内容 个性化记忆 持续沉淀用户偏好、任务经验、和关键知识；在检索时融合向量检索与全文检索能力，兼顾相似内容召回与精确信息定位；在多智能体场景下，不同角色的记忆相互隔离，以减少跨任务干扰并提升结果稳定性",
      "summary": "开源个人智能体工作台 - 本地云端均可部署 - 配置CoPaw时，用户仅需在本地用三条命令就可以完成安装与启动，在云端能在魔搭云空间一键配置 - 虽然支持云端部署，但数据默认全在本地，不依赖第三方托管 - 主动心跳机制与",
      "featureBullets": [
        "配置CoPaw时，用户仅需在本地用三条命令就可以完成安装与启动，在云端能在魔搭云空间一键配置",
        "虽然支持云端部署，但数据默认全在本地，不依赖第三方托管",
        "主动心跳机制与长期记忆功能",
        "内置定时任务调度系统，不仅会被动响应用户的需求，还可自主完成查邮件、整理待办事项等任务",
        "同时，CoPaw自带长期记忆功能，还会主动将用户对话中的决策、偏好、待办等写入记忆，使用时间越长，CoPaw越懂用户"
      ],
      "ecosystemBullets": [
        "API key自主接入模型",
        "云端：ModelScope、DashScope 或自定义",
        "本地：支持 llama.cpp、MLX、Ollama",
        "支持接入钉钉、飞书、QQ",
        "内置10+skill，支持接入ClawHub 和 GitHub的skill"
      ],
      "updateBullets": [
        "4月12日 阿里云宣布开源桌面Agent工具CoPaw正式更名为QwenPaw，并同步发布1.1.0版本",
        "更名旨在强化与通义千问（Qwen）开源生态的深度整合，突出智能体本地模型支持及大小模型协同能力",
        "‘Paw’延续其陪伴型个人助手定位。项目仍坚持开源协作，支持钉钉、飞书、QQ等多平台一键部署，兼容本地及云端运行。此次升级不改变其打造实用、安全、个性化AI助手的核心目标",
        "CoPaw 1.0 版本正式发布 本地化部署与定制小模型：支持在 Mac/Windows/Linux 上一键安装运行，同步发布了专为 CoPaw 场景定制的CoPaw-Flash 系列小模型，可根据设备性能自动推荐合适的尺寸和量化版本，数据不离开设备 安全机制：采用分层防御架构，包括监控工具调用的\"工具守卫\"、敏感文件访问控制的\"文件防护\"，以及技能安装前风险扫描的\"技能扫描器\" 多智能体协作：可在同一实例中创建多个隔离的智能体工作区，支持并行运行、独立配置，以及智能体之间的异步通信与协作 记忆管理：通过 ReMe 机制分层管理上下文和长期记忆，对话中动态压缩历史内容，结合向量检索和全文检索调用沉淀记忆 发布 CoPaw 1.0 新版本 为 CoPaw 量身定制的小模型 全面支持本地化模型部署，一键低门槛安装，即装即用。可以在本地使用为 CoPaw 量身定制的 CoPaw-Flash 系列模型 安全机制:工具文件技能三重防护 工具守卫（Tool Guard） — 运行时防御层 文件防护（File Guard） — 访问控制层 技能扫描器（Skill Scanner） — 准入审计层 在技能安装前或被启用时自动扫描，检测风险模式，提供拦截/警告/关闭三种模式 多智能体协同 在同一实例内运行多个独立的智能体工作区，各自拥有专属配置、记忆与技能，既可独立响应不同频道，也可协作完成复杂任务 工作空间隔离：同一实例内可运行多个彼此隔离的智能体，各自拥有独立的配置、记忆、技能与对话历史 并发启动与隔离：应用启动时并发加载已启用的智能体工作区",
        "各智能体可并行处理不同任务，并通过锁机制保证并发安全与工作空间隔离 零停机重载：支持单个智能体配置热重载，同一进程内新实例就绪后原子切换，旧实例完成当前任务后自动退出，避免中断正在进行的对话 异步协作：支持智能体间显式通信与后台协作，复杂任务可由多个角色分工处理，主智能体可先提交任务、后续查询结果 记忆管理：上下文管理与记忆存储 上下文管理 采用分层管理机制，在内存中保留当前对话所需的关键信息与近期交互内容，并将历史对话、阶段性摘要、及工具结果进行持久化存储",
        "在推理前，对上下文进行动态整理，优先保留近期强相关的内容，并将较早期的信息压缩为结构化摘要，必要时再按索引回溯原始内容 个性化记忆 持续沉淀用户偏好、任务经验、和关键知识",
        "在检索时融合向量检索与全文检索能力，兼顾相似内容召回与精确信息定位"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p17-copaw"
    },
    {
      "name": "HiClaw",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "HiClaw 社区",
      "launchDate": "3.6",
      "updatedAt": "4.14 4.14 3-4月（4.2发布月报）",
      "deployment": "云端",
      "businessModel": "* 免费开源",
      "features": "开源协作式多 Agent 操作系统 - 引入了 Manager Agent（AI 管家）角色帮你管理的Worker Agent 团队 - 模式一：直接对话 Manager - 适合快速问答和简单操作 - 模式二：Manager 分派 Worker - 面对复杂项目，Manager 自动拆解任务并分配给专业的 Worker。每个 Worker 拥有独立的Skills和Memory - 企业级安全 - Worker 永远不持有真实的 API Key 或 GitHub PAT，只有一个消费者令牌（类似\"工牌\"）。即使 Worker 被攻击，攻击者也拿不到任何真实凭证 - 多 Agent 群聊网络 - Manager Agent 智能分解任务，协调多个 Worker Agent 并行执行，大幅提升复杂任务处理能力 - Matrix 协议驱动 - 基于开放的 Matrix IM 协议，所有 Agent 通信透明可审计，天然支持分布式部署和联邦通信 - 人工全程监督 - 人类可随时进入任意 Matrix 房间观察 Agent 对话，实时干预或修正 Agent 行为，确保安全可控",
      "ecosystem": "模型生态 - 内置了 Higress AI 网关，负责模型 API Key 管理以及入口流量的安全管控。模型 API Key 的切换、新增，以及路由、域名、证书管理 - IM生态 - 真正开箱即用的 IM - 内置 Matrix 服务器，不需要申请飞书/钉钉机器人，不需要等待审批。浏览器打开 Element Web 就能对话，或者用手机上的 Matrix 客户端（Element、FluffyChat）随时指挥，iOS、Android、Web 全平台支持 - 技能生态 - Worker可以按需从skills.sh社区技能库获取技能，社区已有80,000+个技能 - Worker内置find-skills能力，可主动检索并安装skills.sh社区技能",
      "partnership": "",
      "website": "https://hiclaw.io/",
      "pricing": "未找到公开定价页；开源部署成本取决于模型和基础设施",
      "updates": "3-4月（4.2发布月报） HiClaw 现已支持 Worker 模板，帮助团队把某一类问题中已经验证过的 Skill 组合、执行约束、输出结构和 SOP 沉淀为标准 Worker，让 Agent 在处理同类任务时不必每次从头组织能力，从而获得更稳定的输出，也更方便分发、管理和测试。 适用场景：模板更适合那些已经逐渐形成稳定处理框架的场景，例如： 售前方案编写 - 代码评审 发布前检查 项目启动与需求拆解 内容生产与渠道改写 面向特定业务系统的标准化分析任务 共享与分发：可以分发给不同团队直接复用；可以作为标准资产做版本管理；可以围绕模板建立测试和回归机制；可以持续迭代，而不是依赖个人经验传递 加入 AgentScope，与 CoPaw 共建多智能体基础设施：CoPaw 面向个人，HiClaw 面向企业。HiClaw 将以 CoPaw 作为 Agent 智能内核，提升长程、并行和协作类任务能力 阿里云原生部署上线：新增阿里云原生部署支持，提供统一的云/本地抽象层，包括对云端部署 CoPaw 工作进程的支持",
      "summary": "开源协作式多 Agent 操作系统 - 引入了 Manager Agent（AI 管家）角色帮你管理的Worker Agent 团队 - 模式一：直接对话 Manager - 适合快速问答和简单操作 - 模式二：Mana",
      "featureBullets": [
        "开源协作式多 Agent 操作系统",
        "引入了 Manager Agent（AI 管家）角色帮你管理的Worker Agent 团队",
        "模式一：直接对话 Manager",
        "适合快速问答和简单操作",
        "模式二：Manager 分派 Worker",
        "面对复杂项目，Manager 自动拆解任务并分配给专业的 Worker。每个 Worker 拥有独立的Skills和Memory",
        "Worker 永远不持有真实的 API Key 或 GitHub PAT，只有一个消费者令牌（类似\"工牌\"）。即使 Worker 被攻击，攻击者也拿不到任何真实凭证"
      ],
      "ecosystemBullets": [
        "内置了 Higress AI 网关，负责模型 API Key 管理以及入口流量的安全管控。模型 API Key 的切换、新增，以及路由、域名、证书管理",
        "内置 Matrix 服务器，不需要申请飞书/钉钉机器人，不需要等待审批。浏览器打开 Element Web 就能对话，或者用手机上的 Matrix 客户端（Element、FluffyChat）随时指挥，iOS、Android、Web 全平台支持",
        "Worker可以按需从skills.sh社区技能库获取技能，社区已有80,000+个技能",
        "Worker内置find-skills能力，可主动检索并安装skills.sh社区技能"
      ],
      "updateBullets": [
        "3-4月（4.2发布月报） HiClaw 现已支持 Worker 模板，帮助团队把某一类问题中已经验证过的 Skill 组合、执行约束、输出结构和 SOP 沉淀为标准 Worker，让 Agent 在处理同类任务时不必每次从头组织能力，从而获得更稳定的输出，也更方便分发、管理和测试",
        "适用场景：模板更适合那些已经逐渐形成稳定处理框架的场景，例如： 售前方案编写",
        "代码评审 发布前检查 项目启动与需求拆解 内容生产与渠道改写 面向特定业务系统的标准化分析任务 共享与分发：可以分发给不同团队直接复用",
        "可以作为标准资产做版本管理",
        "可以围绕模板建立测试和回归机制",
        "可以持续迭代，而不是依赖个人经验传递 加入 AgentScope，与 CoPaw 共建多智能体基础设施：CoPaw 面向个人，HiClaw 面向企业。HiClaw 将以 CoPaw 作为 Agent 智能内核，提升长程、并行和协作类任务能力 阿里云原生部署上线：新增阿里云原生部署支持，提供统一的云/本地抽象层，包括对云端部署 CoPaw 工作进程的支持"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "多 Agent",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p18-hiclaw"
    },
    {
      "name": "JVS claw（阿里）",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "阿里",
      "launchDate": "3.13",
      "updatedAt": "5.20 5.20 4.22 4.13 3.25",
      "deployment": "云端/本地",
      "businessModel": "* 分层订阅制",
      "features": "基于 OpenClaw 的开箱即用 AI 助理平台 - 多端可访问，任意终端均可轻松接入 - 支持iOS 和Android手机端，以及网页端和Pad端多端访问 - 云端专属环境，“龙虾”状态全程可观、可控 - 云端专属环境ClawSpace，可在屏幕上实时展现每一步操作流程 - 云端 + 本地双模式自由切换。 - 日常轻量办公可以使用低消耗、安全隔离的云端模式，如果需要处理私有数据或接入本地文档，也能迅速切换到本地模式 - 内置对话框，无需接入通讯工具",
      "ecosystem": "模型生态 - 目前模型完全由后台智能调度，用户无法手动指定，也不支持通过修改配置文件来强行切换模型 - IM生态 - 独立APP，无需接入第三方IM - skill生态 - 默认预置了 13 个技能，涵盖自媒体运营专家、智能浏览器操作引擎、智能行程助手、财经信息助手等常用场景 - 支持从ClawHub搜索、下载、安装技能",
      "partnership": "",
      "website": "https://jvsclaw.aliyun.com/",
      "pricing": "https://www.aliyun.com/activity/wuying/wuyingjvs",
      "updates": "3.6 plus 模型深度集成：正式接入 Qwen 3.6 plus 极致模型，系统在逻辑推理与生成能力方面实现显著跨越。支持多模型灵活切换机制，确保在不同任务场景下均能精准响应。 支持 Coding Plan 自定义配置：开放主流 Coding Plan 等模型配比添加功能。用户可根据实际业务复杂度自主进行模型配置，实现资源调配的极致灵活性。 Windows 客户端正式发布：Windows 客户端现已上线，支持一键完成 Clawbot 环境搭建。其“即装即用”的特性免去了复杂的配置流程，使 AI 工具直达桌面级生产力场景。 JVS Claw全面开放，所有用户无需邀请码，下载对应的客户端，即可获得一只云端“龙虾” JVS Claw手机App上新增语音输入入口，交互更轻松，任务下达更高效； JVS文件空间则提供5GB的专属存储，可在多轮对话中精准搜索历史任务； 新增Skill管控台，提供三方Skill自定义开关，Skill执行更高效更安全。 Clawbot极简升级，一键热升级Clawbot最新功能，无需等待重建； 定时任务升级，新增定时任务专用入口，轻松配置管理； 新增助手接入，支持微博龙虾助手一键接入 截至 2026-05-27 推出了V2.4，带来四大创新： 安卓智能体：上线JVS Mobile云手机，支持云电脑+云手机双环境，Agent可在安卓中跨应用执行任务 虾马双引擎架构：OpenClaw与Hermes双引擎一键部署、统一管理 首创智能体档案机制：支持一码分享、扫码复刻 全链路安全防护：联合支付宝与阿里安全提供金融级防护能力 此外，JVS Claw V2.4全面开放生态，包括六项能力： 智能体档案分享 企业与开发者生态共建 TokenPlan模型配置开放 OpenClaw快速接入 三方IM接入 合作伙伴联合推广",
      "summary": "基于 OpenClaw 的开箱即用 AI 助理平台 - 多端可访问，任意终端均可轻松接入 - 支持iOS 和Android手机端，以及网页端和Pad端多端访问 - 云端专属环境，“龙虾”状态全程可观、可控 - 云端专属环",
      "featureBullets": [
        "基于 OpenClaw 的开箱即用 AI 助理平台",
        "多端可访问，任意终端均可轻松接入",
        "支持iOS 和Android手机端，以及网页端和Pad端多端访问",
        "云端专属环境，“龙虾”状态全程可观、可控",
        "云端专属环境ClawSpace，可在屏幕上实时展现每一步操作流程",
        "云端 + 本地双模式自由切换",
        "日常轻量办公可以使用低消耗、安全隔离的云端模式，如果需要处理私有数据或接入本地文档，也能迅速切换到本地模式"
      ],
      "ecosystemBullets": [
        "目前模型完全由后台智能调度，用户无法手动指定，也不支持通过修改配置文件来强行切换模型",
        "独立APP，无需接入第三方IM",
        "默认预置了 13 个技能，涵盖自媒体运营专家、智能浏览器操作引擎、智能行程助手、财经信息助手等常用场景",
        "支持从ClawHub搜索、下载、安装技能"
      ],
      "updateBullets": [
        "3.6 plus 模型深度集成：正式接入 Qwen 3.6 plus 极致模型，系统在逻辑推理与生成能力方面实现显著跨越。支持多模型灵活切换机制，确保在不同任务场景下均能精准响应",
        "支持 Coding Plan 自定义配置：开放主流 Coding Plan 等模型配比添加功能。用户可根据实际业务复杂度自主进行模型配置，实现资源调配的极致灵活性",
        "Windows 客户端正式发布：Windows 客户端现已上线，支持一键完成 Clawbot 环境搭建。其“即装即用”的特性免去了复杂的配置流程，使 AI 工具直达桌面级生产力场景",
        "JVS Claw全面开放，所有用户无需邀请码，下载对应的客户端，即可获得一只云端“龙虾” JVS Claw手机App上新增语音输入入口，交互更轻松，任务下达更高效",
        "JVS文件空间则提供5GB的专属存储，可在多轮对话中精准搜索历史任务",
        "新增Skill管控台，提供三方Skill自定义开关，Skill执行更高效更安全",
        "Clawbot极简升级，一键热升级Clawbot最新功能，无需等待重建"
      ],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p19-jvs-claw"
    },
    {
      "name": "QbotClaw（腾讯）",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "腾讯",
      "launchDate": "4.8",
      "updatedAt": "",
      "deployment": "本地",
      "businessModel": "* 目前免费",
      "features": "国内首个浏览器“龙虾” - 视觉识别能力突出：自动化场景最常见的障碍是无法定位操作目标。QBotClaw 内置自研的 QQ 浏览器 Skill，可精准识别动态网页上的各类元素，避免误操作与报错，操作成功率较高。 - 上下文理解能力强：QBotClaw 基于整个 QQ 浏览器运行，具备深度记忆能力。用户当前浏览的网页、登录的账号、打开的文件均处于其感知范围内，无需反复交代背景，可直接沿用户思路完成任务。 - 支持远程指令下达：通过微信 Clawbot，用户扫码即可完成连接。即便在通勤途中临时想起待办事项，仅需在微信中发送指令，办公室电脑即可自动打开网页并完成文件抓取与处理。 - 三维安全防护机制：AI 权限越高，越需要防范失控风险。QBotClaw 设置了安全沙箱隔离、指令 Markdown 约束与 SkillHub 认证机制，严格执行黑名单策略，确保不触碰用户的隐私与资产。",
      "ecosystem": "模型生态：支持自由配置国内各大主流大模型的API Key。 - 技能生态：完全兼容OpenClaw技能",
      "partnership": "",
      "website": "https://browser.qq.com/mac",
      "pricing": "未找到公开定价页",
      "updates": "",
      "summary": "国内首个浏览器“龙虾” - 视觉识别能力突出：自动化场景最常见的障碍是无法定位操作目标",
      "featureBullets": [
        "国内首个浏览器“龙虾”",
        "视觉识别能力突出：自动化场景最常见的障碍是无法定位操作目标。QBotClaw 内置自研的 QQ 浏览器 Skill，可精准识别动态网页上的各类元素，避免误操作与报错，操作成功率较高",
        "上下文理解能力强：QBotClaw 基于整个 QQ 浏览器运行，具备深度记忆能力。用户当前浏览的网页、登录的账号、打开的文件均处于其感知范围内，无需反复交代背景，可直接沿用户思路完成任务",
        "支持远程指令下达：通过微信 Clawbot，用户扫码即可完成连接。即便在通勤途中临时想起待办事项，仅需在微信中发送指令，办公室电脑即可自动打开网页并完成文件抓取与处理",
        "三维安全防护机制：AI 权限越高，越需要防范失控风险。QBotClaw 设置了安全沙箱隔离、指令 Markdown 约束与 SkillHub 认证机制，严格执行黑名单策略，确保不触碰用户的隐私与资产。"
      ],
      "ecosystemBullets": [
        "模型生态：支持自由配置国内各大主流大模型的API Key",
        "技能生态：完全兼容OpenClaw技能"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p35-qbotclaw"
    },
    {
      "name": "扣子 Coze 3.0（字节）",
      "type": "类 OpenClaw",
      "group": "核心友商",
      "region": "国内",
      "vendor": "字节",
      "launchDate": "4.7",
      "updatedAt": "2026-06-01",
      "deployment": "云端",
      "businessModel": "* 分层订阅积分制* 企业版分为标准/旗舰版本",
      "features": "一个面向个人与企业的云端通用 Agent 平台 - 升级执行环境 - 独立云设备：Agent获配云电脑（运行代码、桌面级操作）与云手机（Android 13真机环境，滑动点击操作APP），支持后台异步执行不占用主线程 - 专属工作台：新增“工作日历”可视化排班与定时任务功能，支持7×24小时后台主动运行；内置文件系统自动分类保存文件产出 - 扩展能力边界 - 视频创作：内置Seedance 2.0，支持从剧本、分镜到成片的一站式生成，具备无限上下文记忆与多轨剪辑能力，实现跨项目角色复用 - 编程开发：上线扣子编程CLI，支持全生命周期管理（创建、预览、部署）与毫秒级终端补全，Agent可自主完成编码、测试与发布 - 行业专家：技能商店上线法律（全流程咨询）、金融（行情分析）等深度Skills，由专业机构共建，赋予Agent行业洞察力 - 配置独立身份 - 长期记忆：基于全新记忆层架构，Agent异步提炼用户偏好与习惯，实现跨Session的记忆共享与权限隔离，告别“聊完即忘” - 独立邮箱：为每个Agent配备专属邮箱（@coze.email），可作为数字身份证注册第三方服务、收发邮件，实现资源隔离与自主社交",
      "ecosystem": "IM生态：支持接入飞书、微信渠道 - Agent World - 技能生态：虾评（技能评测广场）：Agent 在此下载、使用、评测 Skills，通过“Agent 测、Agent 评”的机制筛选优质技能，形成技能交易与分发的市场 - Agent Link （Agent 的“朋友圈”）：Agent 可创建人设、发布动态、寻找“笔友”，通过邮件或社交互动建立关系链，实现跨 Agent 的协作与信息交换 - PlayLab：包含桌游博弈、虚拟炒股（Signal Arena）、农场经营等场景，Agent 在此进行策略对抗、休闲娱乐或模拟决策，通过环境反馈优化其推理与执行能力 - Claw生态：OpenClaw一键部署，极速部署并打通飞书、微信等渠道，内置多种模型与优质技能，扣子编程智能帮你维护稳定性 - 终端生态：苹果安卓移动端",
      "partnership": "",
      "website": "https://www.coze.cn/overview",
      "pricing": "https://www.coze.cn/subscription",
      "updates": "",
      "summary": "一个面向个人与企业的云端通用 Agent 平台 - 升级执行环境 - 独立云设备：Agent获配云电脑（运行代码、桌面级操作）与云手机（Android 13真机环境，滑动点击操作APP），支持后台异步执行不占用主线程 -",
      "featureBullets": [
        "一个面向个人与企业的云端通用 Agent 平台",
        "独立云设备：Agent获配云电脑（运行代码、桌面级操作）与云手机（Android 13真机环境，滑动点击操作APP），支持后台异步执行不占用主线程",
        "专属工作台：新增“工作日历”可视化排班与定时任务功能，支持7×24小时后台主动运行",
        "内置文件系统自动分类保存文件产出",
        "视频创作：内置Seedance 2.0，支持从剧本、分镜到成片的一站式生成，具备无限上下文记忆与多轨剪辑能力，实现跨项目角色复用",
        "编程开发：上线扣子编程CLI，支持全生命周期管理（创建、预览、部署）与毫秒级终端补全，Agent可自主完成编码、测试与发布",
        "行业专家：技能商店上线法律（全流程咨询）、金融（行情分析）等深度Skills，由专业机构共建，赋予Agent行业洞察力"
      ],
      "ecosystemBullets": [
        "IM生态：支持接入飞书、微信渠道",
        "Agent World",
        "技能生态：虾评（技能评测广场）：Agent 在此下载、使用、评测 Skills，通过“Agent 测、Agent 评”的机制筛选优质技能，形成技能交易与分发的市场",
        "Agent Link （Agent 的“朋友圈”）：Agent 可创建人设、发布动态、寻找“笔友”，通过邮件或社交互动建立关系链，实现跨 Agent 的协作与信息交换",
        "PlayLab：包含桌游博弈、虚拟炒股（Signal Arena）、农场经营等场景，Agent 在此进行策略对抗、休闲娱乐或模拟决策，通过环境反馈优化其推理与执行能力",
        "Claw生态：OpenClaw一键部署，极速部署并打通飞书、微信等渠道，内置多种模型与优质技能，扣子编程智能帮你维护稳定性",
        "终端生态：苹果安卓移动端"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p36-2.5"
    },
    {
      "name": "Kimi Claw（月之暗面）",
      "type": "类 OpenClaw",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "月之暗面",
      "launchDate": "2.18",
      "updatedAt": "",
      "deployment": "浏览器原生（无需安装）",
      "businessModel": "* 分层订阅制",
      "features": "帮助用户一键云端部署 OpenClaw - 专业级搜索 - Kimi Claw 利用 Kimi 先进的网络搜索和数据获取功能，能够从雅虎财经、新闻网站和技术文档等来源检索实时信息，其准确率远高于通用搜索 API - 长上下文处理能力 - 受限于浏览器沙盒 - 由于在浏览器约束内运行，它无法访问本地文件、操控桌面应用程序或执行系统级自动化任务",
      "ecosystem": "模型生态 - Kimi K2.5模型 - IM生态 - 支持接入飞书、微博、钉钉、企业微信、微信 - 技能生态 - 内置了 ClawHub 的 5000 多个 Skills，无需手动安装技能，只需让 Kimi Claw 识别并使用与任务最相关的技能即可 - 40 GB 云存储空间 - 两种接入方式 - 一键部署——云端（Allegretto会员或更高级别的会员资格） - 关联已有实例（BYOC） - 用户可以将本地 OpenClaw 实例连接到 kimi.com，将本地工具执行与云端智能相结合",
      "partnership": "",
      "website": "https://www.kimi.com/resources/kimi-claw-introduction",
      "pricing": "https://www.kimi.com/membership/pricing",
      "updates": "",
      "summary": "帮助用户一键云端部署 OpenClaw - 专业级搜索 - Kimi Claw 利用 Kimi 先进的网络搜索和数据获取功能，能够从雅虎财经、新闻网站和技术文档等来源检索实时信息，其准确率远高于通用搜索 API - 长上",
      "featureBullets": [
        "帮助用户一键云端部署 OpenClaw",
        "Kimi Claw 利用 Kimi 先进的网络搜索和数据获取功能，能够从雅虎财经、新闻网站和技术文档等来源检索实时信息，其准确率远高于通用搜索 API",
        "由于在浏览器约束内运行，它无法访问本地文件、操控桌面应用程序或执行系统级自动化任务"
      ],
      "ecosystemBullets": [
        "Kimi K2.5模型",
        "支持接入飞书、微博、钉钉、企业微信、微信",
        "内置了 ClawHub 的 5000 多个 Skills，无需手动安装技能，只需让 Kimi Claw 识别并使用与任务最相关的技能即可",
        "40 GB 云存储空间",
        "一键部署——云端（Allegretto会员或更高级别的会员资格）",
        "关联已有实例（BYOC）",
        "用户可以将本地 OpenClaw 实例连接到 kimi.com，将本地工具执行与云端智能相结合"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p20-kimi-claw"
    },
    {
      "name": "AutoClaw（智谱）",
      "type": "类 OpenClaw",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "智谱",
      "launchDate": "3.10",
      "updatedAt": "5.20左右 5.20左右 4.17",
      "deployment": "本地",
      "businessModel": "* 分层订阅制* 企业版按需定制报价",
      "features": "帮助用户一键本地部署 OpenClaw - 内置 Pony-Alpha-2，这是一款基于智谱 GLM-5 架构构建的自研模型。专门针对 OpenClaw 智能体场景进行了微调 - 在工具调用稳定性、任务执行效率、响应速度三个关键领域实现了显著提升。 - 浏览器自动化：拟人化浏览器操作 - AutoClaw 集成了智谱的 AutoGLM 浏览器自动化技术，使AI智能体能够像人类一样与网页进行交互。（与云端替代方案的关键差异——后者在沙箱环境中运行，浏览器能力受限）",
      "ecosystem": "模型生态 - 内置Pony-Alpha-2和GLM-5，完全开放模型接入，支持任意模型的Coding Plan或API - DeepSeek、MiniMax、Gemini、OpenAI、xAI、Mistral、OpenRouter等 - IM生态 - 支持接入微信、飞书、企业微信、QQ、钉钉 - 全自动配置飞书接入（mac) - 技能生态 - 预装了50+热门Skills - 支持BYOC",
      "partnership": "",
      "website": "https://autoclaws.org/zh/",
      "pricing": "https://www.bigmodel.cn/claw-plan-team",
      "updates": "4.17 自进化：用得越多越懂你，教过一次的事情，澳龙会永远记住 进化机制：每轮对话结束后，澳龙会对本轮对话进行扫描，识别其中是否包含用户的纠正、新传授的方法、表达偏好，或其自身遭遇的问题。对于具备保留价值的经验，澳龙将在对话中弹出进化请求卡片，展示其拟记录的具体内容；经用户批准后，相关内容将写入记忆，转化为新的能力。- 触发方式： 关键词触发：当用户使用以后、记住、永远等表达长期意图的词语时，AutoClaw 将其识别为非一次性要求，进而触发进化。- 自动检测：在处理复杂任务时，若经历大量工具调用或多次失败重试，澳龙会自动将其识别为具备保留价值的经验积累，予以记忆，以提升后续执行效率。- 进化特点： 高质量进化：澳龙会审慎评估哪些经验可转化为永久记忆，以切实提升效率。其宁可保持每周 1–3 次的高质量进化，也不接受每日 50 条用户喜欢吃火锅式的冗余信息。与此同时，用户可自主调节澳龙的进化速率，以匹配自身节奏。- 进化由用户掌控：所有进化均需经用户审批，澳龙学习的内容由用户决定。 用户亦可随时询问其近期所学，澳龙将告知具体进化的条目。- Skill商店 AutoClaw上线了Skill商店，并上架智谱自研的 GLM Office Skills，包含PPT、DOCX、XLSX、PDF、Charts五件套。其背后是GLM-5.1 为Office场景单独做的技术升级，接入GLM Office Skills后，可以一行命令同时生成一整套材料。（e.g.帮我做一份关于新能源汽车的竞品调研PPT，再配一份讲稿，Agent会先完成调研，再同步产出带图表的PPT和逐页讲稿DOCX，直接就能上会演示。) 细分场景设计：不同场景走不同技术路线（HTML/LaTeX等），视觉设计也针对学术论文、合同、简历、海报、商业计划书等场景做了专项优化。- 智能自检：重要的办公文档忌讳幻觉，因此我们给模型加上了自检意识，交付前主动检查格式要求、排版布局、内容正确性，显著降低错误率。 文件格式互转：支持markdown2doc、markdown2pdf、word2pdf、html2pdf、excel2pdf，格式链路打通。- 设计系统升级：新增封面设计，字体、配色、留白全面优化，生成出来的文档更精美。 截至 2026-05-27 推出了AutoClaw APP版本，目前只登陆了AppStore。APP对于Agent和群聊的创建与管理规则均未发生改变，可实现移动端和PC端账号信息实时同步，能够随时编辑资料或注销不再需要的Agent，支持创建群聊让多个 Agent 协作完成复杂任务。 APP与PC端都能够实现双模式执行环境，即可以选择本地“龙虾”或云“龙虾”两种模式。在使用AutoClaw APP时，选择本地“龙虾”模式是指在保持PC端在线的情况下，利用电脑执行任务；而选择云“龙虾”模式则是指无需电脑在线的情况下，可随时随地使用，任务将在云端运行。",
      "summary": "帮助用户一键本地部署 OpenClaw - 内置 Pony-Alpha-2，这是一款基于智谱 GLM-5 架构构建的自研模型",
      "featureBullets": [
        "帮助用户一键本地部署 OpenClaw",
        "内置 Pony-Alpha-2，这是一款基于智谱 GLM-5 架构构建的自研模型。专门针对 OpenClaw 智能体场景进行了微调",
        "在工具调用稳定性、任务执行效率、响应速度三个关键领域实现了显著提升",
        "浏览器自动化：拟人化浏览器操作",
        "AutoClaw 集成了智谱的 AutoGLM 浏览器自动化技术，使AI智能体能够像人类一样与网页进行交互。（与云端替代方案的关键差异——后者在沙箱环境中运行，浏览器能力受限）"
      ],
      "ecosystemBullets": [
        "内置Pony-Alpha-2和GLM-5，完全开放模型接入，支持任意模型的Coding Plan或API",
        "DeepSeek、MiniMax、Gemini、OpenAI、xAI、Mistral、OpenRouter等",
        "支持接入微信、飞书、企业微信、QQ、钉钉",
        "全自动配置飞书接入（mac)",
        "预装了50+热门Skills"
      ],
      "updateBullets": [
        "4.17 自进化：用得越多越懂你，教过一次的事情，澳龙会永远记住 进化机制：每轮对话结束后，澳龙会对本轮对话进行扫描，识别其中是否包含用户的纠正、新传授的方法、表达偏好，或其自身遭遇的问题。对于具备保留价值的经验，澳龙将在对话中弹出进化请求卡片，展示其拟记录的具体内容",
        "经用户批准后，相关内容将写入记忆，转化为新的能力。- 触发方式： 关键词触发：当用户使用以后、记住、永远等表达长期意图的词语时，AutoClaw 将其识别为非一次性要求，进而触发进化。- 自动检测：在处理复杂任务时，若经历大量工具调用或多次失败重试，澳龙会自动将其识别为具备保留价值的经验积累，予以记忆，以提升后续执行效率。- 进化特点： 高质量进化：澳龙会审慎评估哪些经验可转化为永久记忆，以切实提升效率。其宁可保持每周 1–3 次的高质量进化，也不接受每日 50 条用户喜欢吃火锅式的冗余信息。与此同时，用户可自主调节澳龙的进化速率，以匹配自身节奏。- 进化由用户掌控：所有进化均需经用户审批，澳龙学习的内容由用户决定",
        "用户亦可随时询问其近期所学，澳龙将告知具体进化的条目。- Skill商店 AutoClaw上线了Skill商店，并上架智谱自研的 GLM Office Skills，包含PPT、DOCX、XLSX、PDF、Charts五件套。其背后是GLM-5.1 为Office场景单独做的技术升级，接入GLM Office Skills后，可以一行命令同时生成一整套材料。（e.g.帮我做一份关于新能源汽车的竞品调研PPT，再配一份讲稿，Agent会先完成调研，再同步产出带图表的PPT和逐页讲稿DOCX，直接就能上会演示。) 细分场景设计：不同场景走不同技术路线（HTML/LaTeX等），视觉设计也针对学术论文、合同、简历、海报、商业计划书等场景做了专项优化。- 智能自检：重要的办公文档忌讳幻觉，因此我们给模型加上了自检意识，交付前主动检查格式要求、排版布局、内容正确性，显著降低错误率",
        "文件格式互转：支持markdown2doc、markdown2pdf、word2pdf、html2pdf、excel2pdf，格式链路打通。- 设计系统升级：新增封面设计，字体、配色、留白全面优化，生成出来的文档更精美",
        "截至 2026-05-27 推出了AutoClaw APP版本，目前只登陆了AppStore。APP对于Agent和群聊的创建与管理规则均未发生改变，可实现移动端和PC端账号信息实时同步，能够随时编辑资料或注销不再需要的Agent，支持创建群聊让多个 Agent 协作完成复杂任务",
        "APP与PC端都能够实现双模式执行环境，即可以选择本地“龙虾”或云“龙虾”两种模式。在使用AutoClaw APP时，选择本地“龙虾”模式是指在保持PC端在线的情况下，利用电脑执行任务",
        "而选择云“龙虾”模式则是指无需电脑在线的情况下，可随时随地使用，任务将在云端运行。"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p21-autoclaw"
    },
    {
      "name": "MaxClaw（MiniMax）",
      "type": "类 OpenClaw",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "MiniMax",
      "launchDate": "3.3",
      "updatedAt": "",
      "deployment": "云端",
      "businessModel": "* 送500积分* 分层订阅制+增值包",
      "features": "帮助用户一键云端部署 OpenClaw - MiniMax M2.5 模型 - 针对智能体任务优化，擅长多步工具调用和复杂推理 - 极致成本效率 - 搭载 MiniMax M2.5 模型，MaxClaw 提供前沿水平的智能——可与 Claude 3.5 Sonnet 媲美——成本仅为其 1/7 至 1/20 - 通过自然语言创建 Skill",
      "ecosystem": "模型生态 - MiniMax M2.5 模型 - IM生态 - 支持接入微信、企业微信、微博、飞书、钉钉 - 技能生态 - MiniMax Expert 生态系统 - MaxClaw与MiniMax Expert 2.0生态深度打通，平台已有超1.6万个公开的专业Agent，用户无需从零搭建智能体，直接就能调用现成的专家能力，一键复用行业资深人士的经验沉淀 - 50GB云储存空间",
      "partnership": "",
      "website": "https://maxclaw.ai/zh/",
      "pricing": "https://agent.minimaxi.com/pricing",
      "updates": "",
      "summary": "帮助用户一键云端部署 OpenClaw - MiniMax M2.5 模型 - 针对智能体任务优化，擅长多步工具调用和复杂推理 - 极致成本效率 - 搭载 MiniMax M2.5 模型，MaxClaw 提供前沿水平的智",
      "featureBullets": [
        "帮助用户一键云端部署 OpenClaw",
        "MiniMax M2.5 模型",
        "针对智能体任务优化，擅长多步工具调用和复杂推理",
        "搭载 MiniMax M2.5 模型，MaxClaw 提供前沿水平的智能——可与 Claude 3.5 Sonnet 媲美——成本仅为其 1/7 至 1/20",
        "通过自然语言创建 Skill"
      ],
      "ecosystemBullets": [
        "MiniMax M2.5 模型",
        "支持接入微信、企业微信、微博、飞书、钉钉",
        "MiniMax Expert 生态系统",
        "MaxClaw与MiniMax Expert 2.0生态深度打通，平台已有超1.6万个公开的专业Agent，用户无需从零搭建智能体，直接就能调用现成的专家能力，一键复用行业资深人士的经验沉淀"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "云端沙箱",
        "Skill 生态",
        "长期记忆"
      ],
      "slug": "p22-maxclaw-minimax"
    },
    {
      "name": "StepClaw（阶跃星辰）",
      "type": "类 OpenClaw",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "阶跃星辰",
      "launchDate": "3.19",
      "updatedAt": "",
      "deployment": "云端",
      "businessModel": "* 分层订阅制",
      "features": "帮助用户一键云端部署 OpenClaw - 常驻悬浮窗设计 - 用户可以随时在桌面侧边唤醒 - 全局记忆 - 持续记录用户在电脑上的活动轨迹，自动生成记忆笔记、日报和回溯线索 - 同步应用 - 在唤起时自动把当前网页、文件、应用信息加入上下文，让Agent知道你此刻正在看什么、处理什么 - 快速回答、任务执行与StepClaw三种模式可以相互切换 - 支持多个AI Agent，每个Agent可以有不同的性格，技能和工作目录 - 个性化形象 - 用户可以根据自己的喜好，将AI智能体的UI换成像素办公室、动漫形象，甚至是自己喜欢的桌面宠物样式 - 对话记录和个人数据全部保存在本地电脑",
      "ecosystem": "模型生态 - Step 3.5 Flash模型 - IM生态 - 支持接入微信，企业微信，飞书，QQ，钉钉 - 技能生态 - 预装官方精选技能工具集(i.e.PPT生成、天气查询、联网搜索等) - 接入了“水产市场” - 覆盖Skill、插件、触发器、频道、经验包五类资产 - 支持接入ClawHub等外部Skill社区 - 支持BYOC",
      "partnership": "",
      "website": "https://www.stepfun.com/download",
      "pricing": "https://platform.stepfun.ai/docs/en/step-plan/overview",
      "updates": "",
      "summary": "帮助用户一键云端部署 OpenClaw - 常驻悬浮窗设计 - 用户可以随时在桌面侧边唤醒 - 全局记忆 - 持续记录用户在电脑上的活动轨迹，自动生成记忆笔记、日报和回溯线索 - 同步应用 - 在唤起时自动把当前网页、文",
      "featureBullets": [
        "帮助用户一键云端部署 OpenClaw",
        "用户可以随时在桌面侧边唤醒",
        "持续记录用户在电脑上的活动轨迹，自动生成记忆笔记、日报和回溯线索",
        "在唤起时自动把当前网页、文件、应用信息加入上下文，让Agent知道你此刻正在看什么、处理什么",
        "快速回答、任务执行与StepClaw三种模式可以相互切换",
        "支持多个AI Agent，每个Agent可以有不同的性格，技能和工作目录",
        "用户可以根据自己的喜好，将AI智能体的UI换成像素办公室、动漫形象，甚至是自己喜欢的桌面宠物样式"
      ],
      "ecosystemBullets": [
        "Step 3.5 Flash模型",
        "支持接入微信，企业微信，飞书，QQ，钉钉",
        "预装官方精选技能工具集(i.e.PPT生成、天气查询、联网搜索等)",
        "覆盖Skill、插件、触发器、频道、经验包五类资产",
        "支持接入ClawHub等外部Skill社区"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p23-stepclaw"
    },
    {
      "name": "SkyClaw（昆仑万维）",
      "type": "类 OpenClaw",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "昆仑万维",
      "launchDate": "2月",
      "updatedAt": "",
      "deployment": "云端",
      "businessModel": "* 与Skywork会员订阅绑定，分层订阅制",
      "features": "帮助用户一键云端部署 OpenClaw - 云端虚拟机方案 - 龙虾的所有操作都在云端沙盒里完成，不触碰本地文件 - Mureka Music Maker（Mureka音乐创作Skill） - 作为昆仑万维海外产品Mureka的延伸能力，它打通歌词生成、编曲、混音全流程，输入曲风、主题，一键产出专业级原创音乐，旋律、歌词、编曲一步到位，适配短视频配乐、个人创作、企业宣传等场景，不用懂乐理，也能做出好听的原创歌曲",
      "ecosystem": "模型生态 - 模型选择内置 - 订阅Ultra会员之后，可以直接指定用Opus 4.6、GPT 5.4、Gemini 3.1 Pro，不用自己申请API - 技能生态 - 内置Skywork团队开发的一组专业Skill - PPT、Excel、Document、Design、Music。这些不是个人作品，是团队级产品，视觉质量和功能完整度比个人Skill高",
      "partnership": "",
      "website": "https://skywork.ai/skyclaw",
      "pricing": "https://skywork.ai/pricing",
      "updates": "",
      "summary": "帮助用户一键云端部署 OpenClaw - 云端虚拟机方案 - 龙虾的所有操作都在云端沙盒里完成，不触碰本地文件 - Mureka Music Maker（Mureka音乐创作Skill） - 作为昆仑万维海外产品Mur",
      "featureBullets": [
        "帮助用户一键云端部署 OpenClaw",
        "龙虾的所有操作都在云端沙盒里完成，不触碰本地文件",
        "Mureka Music Maker（Mureka音乐创作Skill）",
        "作为昆仑万维海外产品Mureka的延伸能力，它打通歌词生成、编曲、混音全流程，输入曲风、主题，一键产出专业级原创音乐，旋律、歌词、编曲一步到位，适配短视频配乐、个人创作、企业宣传等场景，不用懂乐理，也能做出好听的原创歌曲"
      ],
      "ecosystemBullets": [
        "订阅Ultra会员之后，可以直接指定用Opus 4.6、GPT 5.4、Gemini 3.1 Pro，不用自己申请API",
        "内置Skywork团队开发的一组专业Skill",
        "PPT、Excel、Document、Design、Music。这些不是个人作品，是团队级产品，视觉质量和功能完整度比个人Skill高"
      ],
      "updateBullets": [],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理"
      ],
      "slug": "p24-skyclaw"
    },
    {
      "name": "MaxHermes（MiniMax）",
      "type": "类 OpenClaw",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "MiniMax",
      "launchDate": "4.16",
      "updatedAt": "",
      "deployment": "云端",
      "businessModel": "* 分层订阅制",
      "features": "全球首个云端沙箱 Hermes，基于 Hermes Agent 构建的云端自我进化 AI 助手 - 学习闭环”机制：能够从复杂任务执行中自主提炼可复用的“Skills”并保存为独立文档。与 OpenClaw 等依赖人工预设能力的工具不同，MaxHermes 的技能库随使用过程动态生长，并根据用户反馈实现自我迭代与改进",
      "ecosystem": "模型生态：主要调用 MiniMax 最新发布的 M2.7编程模型。 - 该模型在工具调用准确度、复杂指令遵循及 Agent Harness 适配性上均有显著提升，已成为 Hermes 生态中活跃度最高的模型之一，为 Skills 的自主生成与精准执行提供了底层算力保障。 - IM生态：已打通飞书、钉钉、企业微信等多 IM 渠道 - 技能生态：在后续更新中，将为 MaxHermes 连通 Skillhub，用户可自由调用热门 Skill。 - Claw生态：MaxClaw 用户也可以在后续版本中将已有的技能、人设等设置方案一键迁移到 MaxHermes 中。",
      "partnership": "",
      "website": "https://agent.minimaxi.com/max-hermes",
      "pricing": "https://agent.minimaxi.com/pricing",
      "updates": "",
      "summary": "全球首个云端沙箱 Hermes，基于 Hermes Agent 构建的云端自我进化 AI 助手 - 学习闭环”机制：能够从复杂任务执行中自主提炼可复用的“Skills”并保存为独立文档",
      "featureBullets": [
        "全球首个云端沙箱 Hermes，基于 Hermes Agent 构建的云端自我进化 AI 助手",
        "学习闭环”机制：能够从复杂任务执行中自主提炼可复用的“Skills”并保存为独立文档。与 OpenClaw 等依赖人工预设能力的工具不同，MaxHermes 的技能库随使用过程动态生长，并根据用户反馈实现自我迭代与改进"
      ],
      "ecosystemBullets": [
        "模型生态：主要调用 MiniMax 最新发布的 M2.7编程模型",
        "该模型在工具调用准确度、复杂指令遵循及 Agent Harness 适配性上均有显著提升，已成为 Hermes 生态中活跃度最高的模型之一，为 Skills 的自主生成与精准执行提供了底层算力保障",
        "IM生态：已打通飞书、钉钉、企业微信等多 IM 渠道",
        "技能生态：在后续更新中，将为 MaxHermes 连通 Skillhub，用户可自由调用热门 Skill",
        "Claw生态：MaxClaw 用户也可以在后续版本中将已有的技能、人设等设置方案一键迁移到 MaxHermes 中。"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "云端沙箱",
        "Skill 生态",
        "长期记忆"
      ],
      "slug": "p33-maxhermes-minimax"
    },
    {
      "name": "LobsterAI（网易有道）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "网易有道",
      "launchDate": "2.19",
      "updatedAt": "5.19 5.19 4.23，4.24 4.8",
      "deployment": "本地",
      "businessModel": "* 软件免费，API调用费用",
      "features": "基于 OpenClaw 能力构建的本地桌面型个人 AI 助手 - 本地 + 沙箱执行 - 任务执行支持本地直接运行或隔离的 Alpine Linux 沙箱",
      "ecosystem": "模型生态 - 多模型自由切换:支持 10+ 主流 AI 模型（市面上几乎所有主流 AI 模型） - IM生态 - 支持接入微信，企业微信，QQ，钉钉，飞书 - 技能生态 - 内置 16+ 专业技能,覆盖开发、设计、办公等场景，内置技能广场 - 支持接入ClawHub 和 GitHub的skill",
      "partnership": "",
      "website": "https://lobsterai.youdao.com/",
      "pricing": "未找到公开定价页",
      "updates": "4.23 全面上线有道宝库skill：youdao-baoku。简单操作，即可在有道龙虾中制作出精美PPT及脑图等 4.24 接入DeepSeek V4+Kimi K2.6 多机并行：钉钉、飞书、QQ 可同时配置和运行多个机器人 计划任务：新增“每小时”定时，支持直接指定 AI 模型 资产导出：会话支持一键导出为 Markdown 或 JSON 格式 性能提升：底层数据库升级，页面响应与查询速度显著提升 截至 2026-05-27 生成结果直接预览：支持 HTML/SVG/React/Mermaid/Office 文件/PDF 文件实时预览，无需再把 HTML 丢浏览器、React 本地跑、Mermaid 单独渲染、PDF 与 Office 用本地软件打开，做文档分析、PPT 生成、网页制作、Workflow 搭建时过程更连贯。 上下文用量可视化：直接显示上下文用量，支持手动压缩上下文，并可自定义模型上下文窗口大小，应对长任务中上下文越跑越长、Token 消耗升高、响应变慢的问题。 Dreaming 记忆整合功能：长期任务中系统在后台用\"梦境\"机制自动做记忆反思与沉淀——支持自定义定时策略、时区与独立模型配置，自动提炼项目背景、用户偏好与核心历史任务并转化为结构化长期记忆，使长周期 Workflow 更具连续性、主上下文保持轻量。 插件与外部工具管理：新版插件面板支持在线安装、卸载与高级配置，打通 npm、ClawHub、Git 仓库、本地目录四种来源，安装日志实时回显，无需手敲命令行；支持 OpenClaw 原生 MCP，提升外部工具连接的稳定性与兼容性。 多 Agent 优化：Agent 创建编辑改版，新建 Agent 可单独配模型、设工作目录，技能选择和头像更清爽，新建与修改流程更轻便。",
      "summary": "基于 OpenClaw 能力构建的本地桌面型个人 AI 助手 - 本地 + 沙箱执行 - 任务执行支持本地直接运行或隔离的 Alpine Linux 沙箱",
      "featureBullets": [
        "基于 OpenClaw 能力构建的本地桌面型个人 AI 助手",
        "任务执行支持本地直接运行或隔离的 Alpine Linux 沙箱"
      ],
      "ecosystemBullets": [
        "多模型自由切换:支持 10+ 主流 AI 模型（市面上几乎所有主流 AI 模型）",
        "支持接入微信，企业微信，QQ，钉钉，飞书",
        "内置 16+ 专业技能,覆盖开发、设计、办公等场景，内置技能广场",
        "支持接入ClawHub 和 GitHub的skill"
      ],
      "updateBullets": [
        "4.23 全面上线有道宝库skill：youdao-baoku。简单操作，即可在有道龙虾中制作出精美PPT及脑图等 4.24 接入DeepSeek V4+Kimi K2.6 多机并行：钉钉、飞书、QQ 可同时配置和运行多个机器人 计划任务：新增“每小时”定时，支持直接指定 AI 模型 资产导出：会话支持一键导出为 Markdown 或 JSON 格式 性能提升：底层数据库升级，页面响应与查询速度显著提升 截至 2026-05-27 生成结果直接预览：支持 HTML/SVG/React/Mermaid/Office 文件/PDF 文件实时预览，无需再把 HTML 丢浏览器、React 本地跑、Mermaid 单独渲染、PDF 与 Office 用本地软件打开，做文档分析、PPT 生成、网页制作、Workflow 搭建时过程更连贯",
        "上下文用量可视化：直接显示上下文用量，支持手动压缩上下文，并可自定义模型上下文窗口大小，应对长任务中上下文越跑越长、Token 消耗升高、响应变慢的问题",
        "Dreaming 记忆整合功能：长期任务中系统在后台用\"梦境\"机制自动做记忆反思与沉淀——支持自定义定时策略、时区与独立模型配置，自动提炼项目背景、用户偏好与核心历史任务并转化为结构化长期记忆，使长周期 Workflow 更具连续性、主上下文保持轻量",
        "插件与外部工具管理：新版插件面板支持在线安装、卸载与高级配置，打通 npm、ClawHub、Git 仓库、本地目录四种来源，安装日志实时回显，无需手敲命令行",
        "支持 OpenClaw 原生 MCP，提升外部工具连接的稳定性与兼容性",
        "多 Agent 优化：Agent 创建编辑改版，新建 Agent 可单独配模型、设工作目录，技能选择和头像更清爽，新建与修改流程更轻便。"
      ],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "多 Agent",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p25-lobsterai"
    },
    {
      "name": "Molili（莫哩哩）（当贝）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "当贝",
      "launchDate": "3.12",
      "updatedAt": "",
      "deployment": "本地",
      "businessModel": "* 每日可随机抽取1000-4000积分，或选择固定领取2000积分* 分层订阅制",
      "features": "帮助用户一键本地部署 OpenClaw - 专为国内用户深度优化，全链路升级中文能力 - 搭载DeepSeek、MiniMax、通义千问、Kimi、智谱GLM等国产顶尖大模型，能精准理解复杂中文指令，彻底解决海外产品的语言壁垒 - 使用成本低50% - 针对Token大量消耗的行业痛点做了底层重构：采用订阅制，无需担心token“爆炸”产生高昂费用 - 深度优化了智能体的任务执行逻辑，大幅压缩无效 Token 消耗，在保证任务完成度的前提下，实测使用成本比原版低一半。 - 敏感权限精细化设置项 - 用户可以自主管控文件读取、系统操作、应用调用、网络访问等全维度权限 - 可视化龙虾界面：龙虾朝堂",
      "ecosystem": "模型生态 - 搭载DeepSeek、MiniMax、通义千问、Kimi、智谱GLM等国产顶尖大模型 - 模型选择内置，不需要API Key - IM生态 - 支持接入微信，钉钉，飞书 - 技能生态 - 配套技能商店，8000 + 现成 Skill 技能 - 支持接入ClawHub 的skill",
      "partnership": "",
      "website": "https://www.molili.com.cn/",
      "pricing": "未找到公开定价页",
      "updates": "",
      "summary": "帮助用户一键本地部署 OpenClaw - 专为国内用户深度优化，全链路升级中文能力 - 搭载DeepSeek、MiniMax、通义千问、Kimi、智谱GLM等国产顶尖大模型，能精准理解复杂中文指令，彻底解决海外产品的语",
      "featureBullets": [
        "帮助用户一键本地部署 OpenClaw",
        "专为国内用户深度优化，全链路升级中文能力",
        "搭载DeepSeek、MiniMax、通义千问、Kimi、智谱GLM等国产顶尖大模型，能精准理解复杂中文指令，彻底解决海外产品的语言壁垒",
        "针对Token大量消耗的行业痛点做了底层重构：采用订阅制，无需担心token“爆炸”产生高昂费用",
        "深度优化了智能体的任务执行逻辑，大幅压缩无效 Token 消耗，在保证任务完成度的前提下，实测使用成本比原版低一半",
        "用户可以自主管控文件读取、系统操作、应用调用、网络访问等全维度权限",
        "可视化龙虾界面：龙虾朝堂"
      ],
      "ecosystemBullets": [
        "搭载DeepSeek、MiniMax、通义千问、Kimi、智谱GLM等国产顶尖大模型",
        "模型选择内置，不需要API Key",
        "支持接入微信，钉钉，飞书",
        "配套技能商店，8000 + 现成 Skill 技能",
        "支持接入ClawHub 的skill"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "安全治理"
      ],
      "slug": "p26-molili"
    },
    {
      "name": "EasyClaw（猎豹）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "猎豹",
      "launchDate": "3.3",
      "updatedAt": "",
      "deployment": "本地",
      "businessModel": "* 分层订阅制",
      "features": "帮助用户一键本地部署 OpenClaw - 本地优先与隐私安全 - 一切运行都在你的电脑本地完成。你的指令在你的环境中执行，实现真正的零数据泄露 - 国内/国际/企业三版本 - 海外个人版：easyclaw.com - 国内个人版：元气AI Bot（yuanqiai.net） - 企业版：easyclaw.work提供B端工作流搭建，与个人版完全分离",
      "ecosystem": "模型生态 - 支持的模型包括 Claude Haiku-4.5、Claude Sonnet-4.5、GPT-5.2、Kimi K2.5、Gemini-3-Pro 等，国内用户还可切换 MiniMax、通义千问、智谱 GLM 等本土模型 - 模型选择内置，不需要API Key - IM生态 - 支持接入微信，企业微信，飞书，钉钉，QQ - 支持接入WhatsApp、Telegram、Discord、Slack - 技能生态 - 自建Skill市场Claw123.ai，5000+技能 - 内置技能广场和Agent广场 - 傅盛“三万”同款技能",
      "partnership": "",
      "website": "https://easyclaw.com/zh-cn",
      "pricing": "https://easyclaw.com/zh-cn/price/",
      "updates": "",
      "summary": "帮助用户一键本地部署 OpenClaw - 本地优先与隐私安全 - 一切运行都在你的电脑本地完成",
      "featureBullets": [
        "帮助用户一键本地部署 OpenClaw",
        "一切运行都在你的电脑本地完成。你的指令在你的环境中执行，实现真正的零数据泄露",
        "国内/国际/企业三版本",
        "海外个人版：easyclaw.com",
        "国内个人版：元气AI Bot（yuanqiai.net）",
        "企业版：easyclaw.work提供B端工作流搭建，与个人版完全分离"
      ],
      "ecosystemBullets": [
        "支持的模型包括 Claude Haiku-4.5、Claude Sonnet-4.5、GPT-5.2、Kimi K2.5、Gemini-3-Pro 等，国内用户还可切换 MiniMax、通义千问、智谱 GLM 等本土模型",
        "模型选择内置，不需要API Key",
        "支持接入微信，企业微信，飞书，钉钉，QQ",
        "支持接入WhatsApp、Telegram、Discord、Slack",
        "自建Skill市场Claw123.ai，5000+技能",
        "内置技能广场和Agent广场"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "安全治理",
        "自动化任务"
      ],
      "slug": "p27-easyclaw"
    },
    {
      "name": "NemoClaw（NVIDIA）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国外",
      "vendor": "NVIDIA",
      "launchDate": "3.16",
      "updatedAt": "",
      "deployment": "本地/云端",
      "businessModel": "开源免费",
      "features": "NVIDIA推出的OpenClaw企业级安全开源套件，为OpenClaw加上隐私路由、安全沙盒和审计日志，让企业敢用AI Agent - 内置安全与隐私能力 - 依托NVIDIA Agent Toolkit软件优化适配OpenClaw，搭载OpenShell运行时，自带独立隔离沙箱、策略化安全管控、网络护栏与隐私路由，从源头守住数据隐私，同时保障智能体完成任务所需的正常权限 - 完全开源，一行命令部署 - 属于开源生态体系，用户无需复杂配置，单条命令即可完成全组件安装，大幅降低部署门槛，企业可直接二次开发、深度定制 - 混合模型部署能力 - 既支持本地运行开源模型（含NVIDIA Nemotron），也能通过隐私路由调用云端前沿大模型，兼顾本地数据安全与云端算力能力，让智能体在合规框架内自主学习新技能、完成复杂任务",
      "ecosystem": "模型生态 - Nemotron 3 Super 120B MoE（旗舰本地模型）和Nemotron 3 Nano 4B（边缘模型）。 - 同时支持云端路由到OpenAI（GPT-4/5）、Anthropic（Claude）、Google（Gemini）以及任何OpenAI兼容API - 硬件生态 - 不强制绑定NVIDIA芯片，可兼容任意编码智能体，还能适配各类专属计算平台，包括NVIDIA GeForce RTX台式机与笔记本、RTX PRO工作站，以及DGX Station、DGX Spark AI超级计算机，满足全天候智能体运行的算力需求",
      "partnership": "",
      "website": "https://docs.nvidia.com/nemoclaw/latest/index.html",
      "pricing": "未找到公开定价页；开源/企业部署成本取决于硬件与推理服务",
      "updates": "",
      "summary": "NVIDIA推出的OpenClaw企业级安全开源套件，为OpenClaw加上隐私路由、安全沙盒和审计日志，让企业敢用AI Agent - 内置安全与隐私能力 - 依托NVIDIA Agent Toolkit软件优化适配O",
      "featureBullets": [
        "NVIDIA推出的OpenClaw企业级安全开源套件，为OpenClaw加上隐私路由、安全沙盒和审计日志，让企业敢用AI Agent",
        "依托NVIDIA Agent Toolkit软件优化适配OpenClaw，搭载OpenShell运行时，自带独立隔离沙箱、策略化安全管控、网络护栏与隐私路由，从源头守住数据隐私，同时保障智能体完成任务所需的正常权限",
        "完全开源，一行命令部署",
        "属于开源生态体系，用户无需复杂配置，单条命令即可完成全组件安装，大幅降低部署门槛，企业可直接二次开发、深度定制",
        "既支持本地运行开源模型（含NVIDIA Nemotron），也能通过隐私路由调用云端前沿大模型，兼顾本地数据安全与云端算力能力，让智能体在合规框架内自主学习新技能、完成复杂任务"
      ],
      "ecosystemBullets": [
        "Nemotron 3 Super 120B MoE（旗舰本地模型）和Nemotron 3 Nano 4B（边缘模型）",
        "同时支持云端路由到OpenAI（GPT-4/5）、Anthropic（Claude）、Google（Gemini）以及任何OpenAI兼容API",
        "不强制绑定NVIDIA芯片，可兼容任意编码智能体，还能适配各类专属计算平台，包括NVIDIA GeForce RTX台式机与笔记本、RTX PRO工作站，以及DGX Station、DGX Spark AI超级计算机，满足全天候智能体运行的算力需求"
      ],
      "updateBullets": [],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆"
      ],
      "slug": "p28-nemoclaw-nvidia"
    },
    {
      "name": "天禧AI Claw（联想）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "联想",
      "launchDate": "3.18",
      "updatedAt": "",
      "deployment": "端云混合",
      "businessModel": "* 3.30开始内测",
      "features": "帮用户零门槛部署和托管OpenClaw的端云一体服务方案 - 端云混合架构 - 设备关机时，用户在云端发起的任务依然可以持续运行，7×24小时全天候服务 - 一体多端协同 - 覆盖AI PC、AI平板、AI手机等全系产品，将云端部署能力与多端协同体验融为一体，不被单一设备所束缚，以用户为中心，在不同终端间自由流转 - 安全性 - 依托独立云主机运行，配合严格的数据安全隔离机制，确保执行环境清晰可控、权限边界明确、操作过程可追溯、风险可管理",
      "ecosystem": "模型生态 - 基于开源Kimi 2.5大模型打造 - 目前不支持更换基础的对话模型 - 技能生态 - 预装覆盖办公、学习、娱乐等高频场景的Skills，用户无需自行寻找或配置第三方工具，即可根据需求直接调用 - 支持安装三方skills - 硬件生态 - 推出AI平板联想小新Pad Pro 13一键部署天禧AI PadClaw，内置笔记整理Skills，聚焦课件整理、知识归纳等AI学习场景",
      "partnership": "",
      "website": "https://brand.lenovo.com.cn/brand/ppn03698.html",
      "pricing": "未找到公开定价页；当前以内测/随设备能力为主",
      "updates": "",
      "summary": "帮用户零门槛部署和托管OpenClaw的端云一体服务方案 - 端云混合架构 - 设备关机时，用户在云端发起的任务依然可以持续运行，7×24小时全天候服务 - 一体多端协同 - 覆盖AI PC、AI平板、AI手机等全系产品",
      "featureBullets": [
        "帮用户零门槛部署和托管OpenClaw的端云一体服务方案",
        "设备关机时，用户在云端发起的任务依然可以持续运行，7×24小时全天候服务",
        "覆盖AI PC、AI平板、AI手机等全系产品，将云端部署能力与多端协同体验融为一体，不被单一设备所束缚，以用户为中心，在不同终端间自由流转",
        "依托独立云主机运行，配合严格的数据安全隔离机制，确保执行环境清晰可控、权限边界明确、操作过程可追溯、风险可管理"
      ],
      "ecosystemBullets": [
        "基于开源Kimi 2.5大模型打造",
        "目前不支持更换基础的对话模型",
        "预装覆盖办公、学习、娱乐等高频场景的Skills，用户无需自行寻找或配置第三方工具，即可根据需求直接调用",
        "支持安装三方skills",
        "推出AI平板联想小新Pad Pro 13一键部署天禧AI PadClaw，内置笔记整理Skills，聚焦课件整理、知识归纳等AI学习场景"
      ],
      "updateBullets": [],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆"
      ],
      "slug": "p37-ai-claw"
    },
    {
      "name": "WPS 灵犀 Claw（金山办公）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "金山办公",
      "launchDate": "3.19",
      "updatedAt": "",
      "deployment": "端侧",
      "businessModel": "* 邀请码内测中",
      "features": "基于OpenClaw架构自研的AI办公智能体 - 全网首个集成 Xiaomi MiMo-V2-Pro 深度推理模型的办公 Claw - 持续记忆 - 记住你的偏好和上下文，越来越懂你，进化为专属工作搭档 - 打通本地文件和 WPS 文档生态，读取-处理-回传形成完整闭环",
      "ecosystem": "模型生态 - 集成 Xiaomi MiMo-V2-Pro 深度推理模型 - 内置Kimi-K2.5等模型，支持自定义切换，无需配置 - IM生态 - 链接WPS、微信、企业微信、飞书、QQ、钉钉 - 技能生态 - 支持 Skills 市场，ClawHub、GitHub",
      "partnership": "",
      "website": "https://lingxi.wps.cn/claw/",
      "pricing": "未找到公开定价页",
      "updates": "",
      "summary": "基于OpenClaw架构自研的AI办公智能体 - 全网首个集成 Xiaomi MiMo-V2-Pro 深度推理模型的办公 Claw - 持续记忆 - 记住你的偏好和上下文，越来越懂你，进化为专属工作搭档 - 打通本地文件",
      "featureBullets": [
        "基于OpenClaw架构自研的AI办公智能体",
        "全网首个集成 Xiaomi MiMo-V2-Pro 深度推理模型的办公 Claw",
        "记住你的偏好和上下文，越来越懂你，进化为专属工作搭档",
        "打通本地文件和 WPS 文档生态，读取-处理-回传形成完整闭环"
      ],
      "ecosystemBullets": [
        "集成 Xiaomi MiMo-V2-Pro 深度推理模型",
        "内置Kimi-K2.5等模型，支持自定义切换，无需配置",
        "链接WPS、微信、企业微信、飞书、QQ、钉钉",
        "支持 Skills 市场，ClawHub、GitHub"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "长期记忆"
      ],
      "slug": "p38-wps-claw"
    },
    {
      "name": "AstronClaw（科大讯飞）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "科大讯飞",
      "launchDate": "3.12",
      "updatedAt": "",
      "deployment": "云端",
      "businessModel": "* 分层订阅制",
      "features": "帮助用户一键云端部署 OpenClaw - 采用独立沙箱隔离环境，所有 AI 任务在隔离环境执行，与用户主系统完全分离，解决了大模型在企业落地中的数据隐私痛点",
      "ecosystem": "模型生态 - 内置星火x2、GLM-5、MiniMax-M2.5 和 Kimi-K2.5 - IM生态 - 接入微信、飞书、企业微信、钉钉、微博 - 技能生态 - 内置120+ 官方技能，还能扩展 10,000+ 开源技能",
      "partnership": "",
      "website": "https://www.xfyun.cn/doc/spark/Agent-AstronClaw%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.html#%E7%9B%AE%E5%BD%95",
      "pricing": "https://agent.xfyun.cn/astron-claw",
      "updates": "",
      "summary": "帮助用户一键云端部署 OpenClaw - 采用独立沙箱隔离环境，所有 AI 任务在隔离环境执行，与用户主系统完全分离，解决了大模型在企业落地中的数据隐私痛点",
      "featureBullets": [
        "帮助用户一键云端部署 OpenClaw",
        "采用独立沙箱隔离环境，所有 AI 任务在隔离环境执行，与用户主系统完全分离，解决了大模型在企业落地中的数据隐私痛点"
      ],
      "ecosystemBullets": [
        "内置星火x2、GLM-5、MiniMax-M2.5 和 Kimi-K2.5",
        "接入微信、飞书、企业微信、钉钉、微博",
        "内置120+ 官方技能，还能扩展 10,000+ 开源技能"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "云端沙箱",
        "Skill 生态",
        "安全治理"
      ],
      "slug": "p39-astronclaw"
    },
    {
      "name": "Loomy",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "科大讯飞",
      "launchDate": "3.17",
      "updatedAt": "",
      "deployment": "本地",
      "businessModel": "* 邀请码内测中",
      "features": "基于AstronClaw打造的桌面级AI个人助理 - 目录级隔离 - 仅允许 AI 访问用户授权的工作目录，任何超出范围的操作需二次授权确认，降低数据泄露风险，适合企业级安全合规",
      "ecosystem": "模型生态 - 支持 DeepSeek、MiniMax 等主流模型，也可通过 API Key 调用讯飞星火等国内外旗舰模型 - IM生态 - 接入微信、QQ、飞书、钉钉 - 技能生态 - 内置 SkillHub 技能广场 - 兼容 OpenClaw 技能体系，已有的 OpenClaw 技能可以直接使用",
      "partnership": "",
      "website": "https://loomy.xunfei.cn/",
      "pricing": "未找到公开定价页",
      "updates": "",
      "summary": "基于AstronClaw打造的桌面级AI个人助理 - 目录级隔离 - 仅允许 AI 访问用户授权的工作目录，任何超出范围的操作需二次授权确认，降低数据泄露风险，适合企业级安全合规",
      "featureBullets": [
        "基于AstronClaw打造的桌面级AI个人助理",
        "仅允许 AI 访问用户授权的工作目录，任何超出范围的操作需二次授权确认，降低数据泄露风险，适合企业级安全合规"
      ],
      "ecosystemBullets": [
        "支持 DeepSeek、MiniMax 等主流模型，也可通过 API Key 调用讯飞星火等国内外旗舰模型",
        "接入微信、QQ、飞书、钉钉",
        "内置 SkillHub 技能广场",
        "兼容 OpenClaw 技能体系，已有的 OpenClaw 技能可以直接使用"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "安全治理"
      ],
      "slug": "p40-loomy"
    },
    {
      "name": "Gemini Spark（Google）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国外",
      "vendor": "Google",
      "launchDate": "5.20",
      "updatedAt": "",
      "deployment": "云端",
      "businessModel": "* Spark 本周（5.20）面向部分测试者开放，下周以 beta 形式面向美国 Google AI Ultra 订阅用户推出；* Google 同时推出每月 100 美元的新 Ultra 计划，并把最高档 Ultra 计划从每月 250 美元降至 200 美元；* 今年夏天晚些时候 Spark 将进入 Chrome，成为智能体浏览器。",
      "features": "一个运行在 Google Cloud 专用虚拟机上的7 - 24云端个人 AI Agent - 谷歌生态：深度绑定 Google 全家桶：Gmail、Docs、Sheets、Slides、Drive、日历、Chat。(e.g.给老板发状态汇报时，Spark 自动从用户的 Gmail / Docs / Sheets / Slides 里拉事实写草稿）",
      "ecosystem": "IM生态：Gmail、Docs、Sheets、Slides等 - 终端生态： - 入口先是 Gemini app，随后接入邮件和聊天。Android 上将会有新 UI 入口 Android Halo，专门用来看 Spark 当前的执行进度。浏览器端（Chrome） 2026 年夏季登陆。",
      "partnership": "",
      "website": "https://gemini.google/overview/agent/",
      "pricing": "https://gemini.google/subscriptions/",
      "updates": "",
      "summary": "一个运行在 Google Cloud 专用虚拟机上的7 - 24云端个人 AI Agent - 谷歌生态：深度绑定 Google 全家桶：Gmail、Docs、Sheets、Slides、Drive、日历、Chat",
      "featureBullets": [
        "一个运行在 Google Cloud 专用虚拟机上的7",
        "24云端个人 AI Agent",
        "谷歌生态：深度绑定 Google 全家桶：Gmail、Docs、Sheets、Slides、Drive、日历、Chat。(e.g.给老板发状态汇报时，Spark 自动从用户的 Gmail / Docs / Sheets / Slides 里拉事实写草稿）"
      ],
      "ecosystemBullets": [
        "IM生态：Gmail、Docs、Sheets、Slides等",
        "入口先是 Gemini app，随后接入邮件和聊天。Android 上将会有新 UI 入口 Android Halo，专门用来看 Spark 当前的执行进度。浏览器端（Chrome） 2026 年夏季登陆。"
      ],
      "updateBullets": [],
      "capabilities": [
        "云端沙箱",
        "自动化任务"
      ],
      "slug": "p31-gemini-spark-google"
    },
    {
      "name": "YOYO Claw（荣耀）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国内",
      "vendor": "荣耀",
      "launchDate": "4.13",
      "updatedAt": "",
      "deployment": "本地",
      "businessModel": "* 3.27起封测中",
      "features": "基于OpenClaw自研的AI 智能体 - 易用性革新：配置简化与开箱即用 - 龙虾已预置于\"养虾本\"中，出厂即完成全部配置，开机即可直接使用 - 场景化智能推荐：预制了 5 个「主虾」和 23 个「子虾」，覆盖教育、办公、学术、内容创作、智能辅助等五大场景。(e.g.系统识别用户正在撰写论文时，将自动推荐对应的论文虾，主动协助完成任务) - 自主学习与进化：用户的每一次使用与产出均会被自动学习，用于掌握用户的使用习惯与风格；后续发布同类任务时系统将直接调用已沉淀的技能，大幅提升效率 - 词元效率优化：五步闭环节省 50% 消耗 - 该技术并非单点优化，而是从任务执行全流程出发，系统性设计了一套词元高效利用的闭环机制，最终实现较 OpenClaw 节省 50% 的词元消耗，部分场景甚至可达 90% - 安全与生态：设备级守护+“一虾多吃” - 其安全防护体系覆盖用户核心 skills 技能、个人记忆及隐私数据 - 设计了一个不可篡改的“独立安全虾”，它会全程监控所有智能体的执行动作。一旦遇到高危操作，将会自动拦截；其他敏感信息比如调用摄像头或发送敏感信息，则会进行二次确认提醒，让用户始终掌握控制权，从根本上降低了用户的隐私顾虑",
      "ecosystem": "IM生态：微信、飞书、QQ、钉钉均已支持手机远控 - 技能生态：荣耀YOYO Claw生态中既有自研工具，也会开放兼容行业Skill - 硬件生态：会首发搭载在荣耀MagicBook系列轻薄本新品中,配合荣耀终端生态产品，可以实现“一端饲养、多端共享”，全家多人可共用一台PC，各自的龙虾相互独立",
      "partnership": "",
      "website": "https://www.honor.com/cn/news/honor-magicbook-pro-lanunch/",
      "pricing": "未找到独立公开定价页；能力随荣耀 MagicBook/终端产品提供",
      "updates": "",
      "summary": "基于OpenClaw自研的AI 智能体 - 易用性革新：配置简化与开箱即用 - 龙虾已预置于\"养虾本\"中，出厂即完成全部配置，开机即可直接使用 - 场景化智能推荐：预制了 5 个「主虾」和 23 个「子虾」，覆盖教育、办",
      "featureBullets": [
        "基于OpenClaw自研的AI 智能体",
        "易用性革新：配置简化与开箱即用",
        "龙虾已预置于\"养虾本\"中，出厂即完成全部配置，开机即可直接使用",
        "场景化智能推荐：预制了 5 个「主虾」和 23 个「子虾」，覆盖教育、办公、学术、内容创作、智能辅助等五大场景。(e.g.系统识别用户正在撰写论文时，将自动推荐对应的论文虾，主动协助完成任务)",
        "自主学习与进化：用户的每一次使用与产出均会被自动学习，用于掌握用户的使用习惯与风格",
        "后续发布同类任务时系统将直接调用已沉淀的技能，大幅提升效率",
        "词元效率优化：五步闭环节省 50% 消耗"
      ],
      "ecosystemBullets": [
        "IM生态：微信、飞书、QQ、钉钉均已支持手机远控",
        "技能生态：荣耀YOYO Claw生态中既有自研工具，也会开放兼容行业Skill",
        "硬件生态：会首发搭载在荣耀MagicBook系列轻薄本新品中,配合荣耀终端生态产品，可以实现“一端饲养、多端共享”，全家多人可共用一台PC，各自的龙虾相互独立"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p34-yoyo-claw"
    },
    {
      "name": "小艺Claw（华为）",
      "type": "类 OpenClaw",
      "group": "手机厂商",
      "region": "国内",
      "vendor": "华为",
      "launchDate": "3.11",
      "updatedAt": "4.29 4.29 3.31",
      "deployment": "端侧",
      "businessModel": "* 开启预约使用* 点数制计费 * 49元 = 1000点数 * 199元 = 6000点数",
      "features": "多个人格选择，根据不同人格选择自己想要的能力 - 其中包括信息猎手、知心朋友、办公搭子、创作天才 - 数据安全 - 所有数据处理都在本地完成，不上传云端",
      "ecosystem": "生态互联 - 手机、平板、手表、车机——所有鸿蒙设备共享同一个AI大脑。手机上让它写文章，平板上继续编辑，无缝衔接 - 不断进化 - 基于开源生态，小艺Claw可以学习新技能",
      "partnership": "",
      "website": "https://consumer.huawei.com/cn/mobileservices/celia/",
      "pricing": "未找到公开定价页",
      "updates": "4月7日 支持HarmonyOS 6及以上的手机和平板，只要把“小艺”App更新到11.6.2.195版本，就能参与体验。体验版首发价49元（定价69元），有效期31天。标准包首发价199元（定价299元），同样31天，直接送6000 AI点数。点数按任务难度计费，不套用行业token单位 截至 2026-05-27 上线自进化能力：小艺Claw不是一个每次都从零开始的助手，而是一个在使用中不断成长、越用越懂你的Agent伙伴。复盘任务执行过程，把你的纠正、新教的方法，以及验证有效的工具使用经验，沉淀为新的可复用技能(Skill)。在获得你的确认后，这些Skill会被保存，并在后续类似任务中直接调用，让执行更快、更稳、更省Token 正式接入DeepSeek V4：超长上下文处理能力，可一次性读取并理解更长的材料，全局理解不丢细节。而且指令理解更精准，复杂任务拆解更丝滑顺畅，在信息搜集、文档处理、内容创作等任务中拥有更强的Agent推理能力。 丰富Skills市场：。除图库、日历、备忘录、运动健康等鸿蒙专区Skills外，小艺Claw陆续上新鸿蒙特色Skills，如鸿蒙智家Skill能够操控全屋设备，生成家庭简报/执行儿童守护/管理网络等；小艺帮记Skill支持收藏/查询文档、图片、视频、网页链接等，构建个人专属知识资产；小艺播客Skill支持输入文本、网页链接或本地文件方式生成播客，把知识变成好听的播客，通勤、做家务都能听，碎片时间高效吸收。 小艺Claw的Skills市场也接入了各类生态合作伙伴的Skills。比如金融场景中，东方财富、同花顺、国泰海通、国信证券等可协助金融资讯检索/数据查询/智能选股/模拟炒股，实时掌握市场动态，轻松做出投资决策 用户反馈 消息查询、简单提醒单次只需1-5点，文档编辑或邮件写作是10-30点，分析长文档、复杂PPT制作，单次高点也能到50-200点数",
      "summary": "多个人格选择，根据不同人格选择自己想要的能力 - 其中包括信息猎手、知心朋友、办公搭子、创作天才 - 数据安全 - 所有数据处理都在本地完成，不上传云端",
      "featureBullets": [
        "多个人格选择，根据不同人格选择自己想要的能力",
        "其中包括信息猎手、知心朋友、办公搭子、创作天才",
        "所有数据处理都在本地完成，不上传云端"
      ],
      "ecosystemBullets": [
        "手机、平板、手表、车机——所有鸿蒙设备共享同一个AI大脑。手机上让它写文章，平板上继续编辑，无缝衔接",
        "基于开源生态，小艺Claw可以学习新技能"
      ],
      "updateBullets": [
        "4月7日 支持HarmonyOS 6及以上的手机和平板，只要把“小艺”App更新到11.6.2.195版本，就能参与体验。体验版首发价49元（定价69元），有效期31天。标准包首发价199元（定价299元），同样31天，直接送6000 AI点数。点数按任务难度计费，不套用行业token单位 截至 2026-05-27 上线自进化能力：小艺Claw不是一个每次都从零开始的助手，而是一个在使用中不断成长、越用越懂你的Agent伙伴。复盘任务执行过程，把你的纠正、新教的方法，以及验证有效的工具使用经验，沉淀为新的可复用技能(Skill)。在获得你的确认后，这些Skill会被保存，并在后续类似任务中直接调用，让执行更快、更稳、更省Token 正式接入DeepSeek V4：超长上下文处理能力，可一次性读取并理解更长的材料，全局理解不丢细节。而且指令理解更精准，复杂任务拆解更丝滑顺畅，在信息搜集、文档处理、内容创作等任务中拥有更强的Agent推理能力",
        "丰富Skills市场：。除图库、日历、备忘录、运动健康等鸿蒙专区Skills外，小艺Claw陆续上新鸿蒙特色Skills，如鸿蒙智家Skill能够操控全屋设备，生成家庭简报/执行儿童守护/管理网络等",
        "小艺帮记Skill支持收藏/查询文档、图片、视频、网页链接等，构建个人专属知识资产",
        "小艺播客Skill支持输入文本、网页链接或本地文件方式生成播客，把知识变成好听的播客，通勤、做家务都能听，碎片时间高效吸收",
        "小艺Claw的Skills市场也接入了各类生态合作伙伴的Skills。比如金融场景中，东方财富、同花顺、国泰海通、国信证券等可协助金融资讯检索/数据查询/智能选股/模拟炒股，实时掌握市场动态，轻松做出投资决策 用户反馈 消息查询、简单提醒单次只需1-5点，文档编辑或邮件写作是10-30点，分析长文档、复杂PPT制作，单次高点也能到50-200点数"
      ],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆"
      ],
      "slug": "p29-claw"
    },
    {
      "name": "Xiaomi miclaw（小米）",
      "type": "类 OpenClaw",
      "group": "手机厂商",
      "region": "国内",
      "vendor": "小米",
      "launchDate": "3.6",
      "updatedAt": "4.21，4.22 4.21，4.22 3.30",
      "deployment": "端侧",
      "businessModel": "* 小规模封测中",
      "features": "对话历史、用户配置、技能文件都存在设备本地 - 云端只在推理时传输当前对话消息，推理完即用即弃 - 无支付/转账/下单工具，60秒超时自动拒绝 - 个人上下文理解 - 感知→关联→判断→行动",
      "ecosystem": "生态互联 - 控制米家IoT设备 - 小米miclaw将拓展到电脑、手表端 - 自进化 - 持续成长，越用越懂你 - 系统底层能力 - 50+ 系统级工具",
      "partnership": "",
      "website": "https://dev.mi.com/xiaomihyperos/announcement/detail?id=41",
      "pricing": "未找到公开定价页；当前为小范围封测",
      "updates": "4.21 Xiaomi miclaw PC及Mac版：作为基于小米 MiMo 大模型构建的桌面端 AI Agent 测试产品，该产品将 miclaw 的系统级执行能力延伸到PC和Mac平台，支持文档整理、数据分析、批量文件处理等桌面场景，并可与手机端 miclaw 跨设备协作 —— 在电脑上说一句话，就能自动调度手机、智能家居等设备一起帮你完成任务。 Xiaomi miclaw有屏音箱版：基于小米 MiMo 大模型打造，面向家庭多成员场景。无需手机，开口即用。支持语音唤醒与多轮连续对话，轻量任务快速响应，复杂任务自主规划并逐步执行。覆盖智能定时提醒、家庭信息播报、旅行规划等家庭场景。支持自然语言触发多设备联动与自动化创建，无需手动配置。可与手机、PC 及 IoT 设备跨设备协作——音箱负责语音交互，手机与 PC承担后续编辑、确认等深度操作。 4.22 全新人格体系：让 Xiaomi miclaw 具备鲜明的性格、语气与记忆能力，越用越懂你 全新动态功能：你的助手会根据与你聊天的内容，发布动态 全新技能体系：涵盖自我改进、照片搜索、打车导航等高频场景，并可在技能中心统一管理 可通过自然语言创建定时任务：Xiaomi miclaw 按时执行并主动推送结果 支持使用 80+ 项系统工具：覆盖日历、笔记、相册、系统设置等一方应用 支持添加第三方 MCP：扩展更多服务 多个预置的一方助手：覆盖日常高频场景，侧边栏直达对话 全新助手商店：可添加和管理更多专业助手，持续扩展 Xiaomi miclaw 的能力；第三方助手“Wind 投资助手”正式上线 支持自然语言创建助手：打造健身教练、英语陪练或任何专属助手 支持跨设备同步记忆：用户的偏好与约定，在手机、平板和笔记本电脑上都能记得，切换设备无需重复输入 支持跨设备文件搜索与传输：在同账号手机、平板、笔记本电脑之间一句话完成文件搜索，并支持文件打开、保存、查看存储位置 封闭测试迎来新一轮机型扩容，新增REDMIK80系列、XiaomiPad8Pro、XiaomiPad8、XiaomiPad7Ultra等6款设备。",
      "summary": "对话历史、用户配置、技能文件都存在设备本地 - 云端只在推理时传输当前对话消息，推理完即用即弃 - 无支付/转账/下单工具，60秒超时自动拒绝 - 个人上下文理解 - 感知→关联→判断→行动",
      "featureBullets": [
        "对话历史、用户配置、技能文件都存在设备本地",
        "云端只在推理时传输当前对话消息，推理完即用即弃",
        "无支付/转账/下单工具，60秒超时自动拒绝",
        "感知→关联→判断→行动"
      ],
      "ecosystemBullets": [
        "小米miclaw将拓展到电脑、手表端"
      ],
      "updateBullets": [
        "4.21 Xiaomi miclaw PC及Mac版：作为基于小米 MiMo 大模型构建的桌面端 AI Agent 测试产品，该产品将 miclaw 的系统级执行能力延伸到PC和Mac平台，支持文档整理、数据分析、批量文件处理等桌面场景，并可与手机端 miclaw 跨设备协作 —— 在电脑上说一句话，就能自动调度手机、智能家居等设备一起帮你完成任务",
        "Xiaomi miclaw有屏音箱版：基于小米 MiMo 大模型打造，面向家庭多成员场景。无需手机，开口即用。支持语音唤醒与多轮连续对话，轻量任务快速响应，复杂任务自主规划并逐步执行。覆盖智能定时提醒、家庭信息播报、旅行规划等家庭场景。支持自然语言触发多设备联动与自动化创建，无需手动配置。可与手机、PC 及 IoT 设备跨设备协作——音箱负责语音交互，手机与 PC承担后续编辑、确认等深度操作",
        "4.22 全新人格体系：让 Xiaomi miclaw 具备鲜明的性格、语气与记忆能力，越用越懂你 全新动态功能：你的助手会根据与你聊天的内容，发布动态 全新技能体系：涵盖自我改进、照片搜索、打车导航等高频场景，并可在技能中心统一管理 可通过自然语言创建定时任务：Xiaomi miclaw 按时执行并主动推送结果 支持使用 80+ 项系统工具：覆盖日历、笔记、相册、系统设置等一方应用 支持添加第三方 MCP：扩展更多服务 多个预置的一方助手：覆盖日常高频场景，侧边栏直达对话 全新助手商店：可添加和管理更多专业助手，持续扩展 Xiaomi miclaw 的能力",
        "第三方助手“Wind 投资助手”正式上线 支持自然语言创建助手：打造健身教练、英语陪练或任何专属助手 支持跨设备同步记忆：用户的偏好与约定，在手机、平板和笔记本电脑上都能记得，切换设备无需重复输入 支持跨设备文件搜索与传输：在同账号手机、平板、笔记本电脑之间一句话完成文件搜索，并支持文件打开、保存、查看存储位置 封闭测试迎来新一轮机型扩容，新增REDMIK80系列、XiaomiPad8Pro、XiaomiPad8、XiaomiPad7Ultra等6款设备。"
      ],
      "capabilities": [
        "本地执行",
        "云端沙箱",
        "Skill 生态",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p30-xiaomi-miclaw"
    },
    {
      "name": "OfficeClaw（华为）",
      "type": "类 OpenClaw",
      "group": "手机厂商",
      "region": "国内",
      "vendor": "华为",
      "launchDate": "4.17",
      "updatedAt": "",
      "deployment": "",
      "businessModel": "* 邀请码公测中",
      "features": "专家智能体相互辩论，避免幻觉：多角色专家智能体研讨，用群体智慧弥补单一视角局限。专业级 PPT 一键生成：内置自研搜索引擎，支持 Deep Research，内容精准、排版精致。",
      "ecosystem": "技能生态：预置 PPT、Word、Excel 等多场景 Skill；内置技能广场 - IM生态：飞书、微信、钉钉、小艺等多平台",
      "partnership": "",
      "website": "https://www.huaweicloud.com/product/agentarts/officeclaw.html",
      "pricing": "未找到公开定价页；当前为邀测/公测入口",
      "updates": "",
      "summary": "专家智能体相互辩论，避免幻觉：多角色专家智能体研讨，用群体智慧弥补单一视角局限",
      "featureBullets": [
        "专家智能体相互辩论，避免幻觉：多角色专家智能体研讨，用群体智慧弥补单一视角局限。专业级 PPT 一键生成：内置自研搜索引擎，支持 Deep Research，内容精准、排版精致。"
      ],
      "ecosystemBullets": [
        "技能生态：预置 PPT、Word、Excel 等多场景 Skill",
        "IM生态：飞书、微信、钉钉、小艺等多平台"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "Skill 生态"
      ],
      "slug": "p32-officeclaw"
    },
    {
      "name": "Microsoft Scout（Microsoft）",
      "type": "类 OpenClaw",
      "group": "模型厂商",
      "region": "国外",
      "vendor": "Microsoft",
      "launchDate": "2026-06-02",
      "updatedAt": "2026-06-02",
      "deployment": "云端 / Microsoft 365",
      "businessModel": "Frontier 客户预览阶段",
      "features": "Microsoft 面向工作的企业级常驻个人 Agent。Scout 基于开源 OpenClaw 构建，可在后台持续运行，理解用户的工作方式，并在无需每次提示的情况下主动执行任务。",
      "ecosystem": "深度接入 Microsoft 365、Work IQ、Teams 与 Outlook，并叠加企业身份、策略、安全和合规控制。",
      "partnership": "",
      "website": "https://partner.microsoft.com/en-us/blog/article/microsoft-build-2026-recap",
      "pricing": "预览阶段，未公布独立定价",
      "updates": "",
      "summary": "基于 OpenClaw 构建的企业级常驻个人 Agent，深度接入 Microsoft 365，并加入身份、策略、安全与合规控制。",
      "featureBullets": [
        "企业级、始终在线的个人 Agent",
        "可在后台持续运行并主动完成工作任务",
        "基于 OpenClaw 构建，叠加企业身份、策略和安全控制"
      ],
      "ecosystemBullets": [
        "接入 Microsoft 365、Work IQ、Teams 与 Outlook",
        "面向 Frontier 客户开放预览"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "云端沙箱",
        "安全治理",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p41-microsoft-scout"
    },
    {
      "name": "Hermes Agent（Nous Research）",
      "type": "类 OpenClaw",
      "group": "其他厂商",
      "region": "国外",
      "vendor": "Nous Research",
      "launchDate": "2026-02",
      "updatedAt": "2026-06-04",
      "deployment": "本地 / 云端",
      "businessModel": "开源；Nous Portal 提供模型服务",
      "features": "开源自主 Agent，支持长期记忆、Skills、定时任务、子 Agent、浏览器与 Computer Use，并可在完成复杂任务后沉淀可复用技能。",
      "ecosystem": "支持多模型、多消息平台和多种前端；Desktop、CLI、TUI 与 Web Dashboard 共享配置、会话、Skills 和记忆。",
      "partnership": "",
      "website": "https://hermes-agent.nousresearch.com/docs/user-guide/desktop",
      "pricing": "开源；模型调用费用取决于所选服务",
      "updates": "",
      "summary": "Nous Research 推出的开源自主 Agent，强调长期记忆、技能沉淀、多入口运行和自我改进。",
      "featureBullets": [
        "长期记忆、Skills 与自然语言定时任务",
        "支持子 Agent、浏览器与 Computer Use",
        "复杂任务完成后可沉淀为可复用技能"
      ],
      "ecosystemBullets": [
        "Desktop、CLI、TUI 与 Web Dashboard 共享状态",
        "支持 macOS、Windows、Linux 和多种消息平台"
      ],
      "updateBullets": [],
      "capabilities": [
        "IM 入口",
        "本地执行",
        "Skill 生态",
        "多 Agent",
        "长期记忆",
        "自动化任务"
      ],
      "slug": "p42-hermes-agent"
    },
    {
      "name": "Kimi Work（月之暗面）",
      "type": "类 Cowork",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "月之暗面",
      "launchDate": "2026-06-03",
      "updatedAt": "2026-06-04",
      "deployment": "本地桌面",
      "businessModel": "Beta 版；未找到独立公开定价页",
      "features": "通用型本地 Agent / 桌面工作台，面向知识工作者的长任务执行、文件处理与多步骤办公场景。",
      "ecosystem": "延续 Kimi 模型与月之暗面产品体系；当前以本地桌面 Agent 形态进入类 Cowork / OpenClaw 赛道。",
      "partnership": "",
      "website": "https://www.kimi.com/",
      "pricing": "未找到独立公开定价页",
      "updates": "2026-06-03/04 Kimi Work Beta 版发布，定位通用型本地 Agent / 桌面工作台。",
      "summary": "月之暗面推出的本地桌面 Agent 工作台，定位知识工作者的可执行 AI 助手。",
      "featureBullets": [
        "本地桌面 Agent 工作台，强调在用户电脑环境中完成多步骤任务",
        "面向文档、研究、办公交付等知识工作场景",
        "Beta 阶段，适合作为国内模型厂商进入类 Cowork 赛道的观察样本"
      ],
      "ecosystemBullets": [
        "依托 Kimi / 月之暗面模型与产品体系",
        "与 Kimi Claw 形成“云端 OpenClaw 封装 + 本地桌面工作台”的双线产品观察点"
      ],
      "updateBullets": [
        "2026-06-04 AI工具集报道月之暗面推出通用型本地 Agent「Kimi Work」Beta 版",
        "2026-06-03 月之暗面公众号发布 Kimi Work Beta 版相关信息"
      ],
      "capabilities": [
        "本地执行",
        "多 Agent",
        "自动化任务",
        "桌面操控"
      ],
      "slug": "p43-kimi-work"
    },
    {
      "name": "OpenClaw",
      "type": "开源执行底座",
      "group": "其他厂商",
      "region": "国外",
      "vendor": "OpenClaw 社区",
      "launchDate": "2025",
      "updatedAt": "2026-06-03",
      "deployment": "本地 / 自托管",
      "businessModel": "开源；模型与基础设施成本取决于部署方式",
      "features": "面向本地和自托管执行的开源 Agent 底座，围绕节点、技能与多 Agent 编排能力持续演进。",
      "ecosystem": "大量类 Claw 产品把 OpenClaw 作为执行底座或兼容目标，Skill 生态与多 Agent 编排是核心观察点。",
      "partnership": "",
      "website": "https://x.com/openclaw",
      "pricing": "开源；未找到独立商业定价页",
      "updates": "2026-06-03 OpenClaw 2026.6.1 发布，新增 Windows 节点、技能工坊与多 Agent 编排相关能力。",
      "summary": "OpenClaw 是类 Claw 赛道的重要开源执行底座，也是国内外产品封装和生态兼容的基准样本。",
      "featureBullets": [
        "开源 Agent 执行底座，支撑本地和自托管形态",
        "围绕节点、技能工坊和多 Agent 编排扩展生态能力",
        "作为多个类 Claw 产品的兼容对象和能力参照"
      ],
      "ecosystemBullets": [
        "Skill 生态是核心扩展方式",
        "与国内大量类 OpenClaw 产品形成生态和产品化封装关系"
      ],
      "updateBullets": [
        "2026-06-03 OpenClaw 2026.6.1 发布，新增 Windows 节点、技能工坊和多 Agent 编排相关能力"
      ],
      "capabilities": [
        "本地执行",
        "Skill 生态",
        "多 Agent",
        "自动化任务"
      ],
      "slug": "p44-openclaw"
    },
    {
      "name": "Qoder Cloud Agents（阿里巴巴）",
      "type": "云端 Agent 平台",
      "group": "模型厂商",
      "region": "国内",
      "vendor": "阿里巴巴 / Qoder",
      "launchDate": "2026-05-28",
      "updatedAt": "2026-06-06",
      "deployment": "云端托管沙箱 / API 调用",
      "businessModel": "未找到独立公开定价页；通过 Qoder / 阿里云账号体系使用",
      "features": "全托管 AI Agent 运行平台，通过 API 定义 Agent、配置云端环境、启动 Session，并通过事件流接收复杂任务执行结果。",
      "ecosystem": "属于 Qoder 产品体系中的云端 Agent 底座，与 Qoder CLI、QoderWork、QoderWake 形成本地交互、桌面工作台和云端托管运行的组合。",
      "partnership": "",
      "website": "https://qoder.com/zh/cloud-agents",
      "pricing": "未找到独立公开定价页",
      "updates": "2026-05-28 阿里 Qoder 上线 Cloud Agents；2026-06 官方文档补充 Cloud Agents CN、Agent 定义、Session、持久化记忆等使用路径。",
      "summary": "Qoder 面向企业和开发者的全托管云端 Agent 运行平台，把 Agent 模板、云端环境、Session 执行和事件流封装为 API。",
      "featureBullets": [
        "通过 API 定义可复用 Agent，并绑定云端运行环境启动 Session",
        "支持长时间异步任务、批量处理、后端 API 集成和周期性任务",
        "文档体系包含 Agent 上下文管理、文件挂载、持久化记忆、Vaults 与 Skills 等模块"
      ],
      "ecosystemBullets": [
        "与 Qoder CLI 互补：CLI 偏本地交互开发，Cloud Agents 偏自动化和系统集成",
        "与 QoderWork / QoderWake 共同构成 Qoder 的桌面、数字员工和云端托管 Agent 产品线"
      ],
      "updateBullets": [
        "2026-05-28 阿里 Qoder 上线 Cloud Agents，定位全托管 AI Agent 运行平台",
        "官方文档显示 Cloud Agents 可通过 Agent、Environment、Session、Event 流程在云端运行复杂任务",
        "适用场景包括长时间异步任务、批量 Session、API 集成和定时任务"
      ],
      "capabilities": [
        "云端沙箱",
        "多 Agent",
        "长期记忆",
        "自动化任务",
        "API 集成"
      ],
      "slug": "p45-qoder-cloud-agents"
    }
  ]
};
