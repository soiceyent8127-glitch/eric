# AI Agent 产品情报库

这是一个可持续维护的静态情报站，部署在 Cloudflare Pages。正式页面只展示通过严格自动审核的重大更新。

## 线上入口

- 网站：https://agent-index-intelligence.pages.dev/
- 重大动态：https://agent-index-intelligence.pages.dev/#timeline

## 日常维护

```bash
npm run validate
npm run discover
npm run auto-review
npm run weekly:auto
npm run collect:icons
npm run promote -- <candidate-id>
npm run serve
```

- `data/site-data.js`：产品基础资料
- `data/major-updates.js`：已审核并公开展示的重大动态
- `data/candidates.json`：自动发现、尚未公开的候选
- `data/product-candidates.json`：尚未入库的新产品候选
- `data/product-visuals.js`：产品图标本地资源清单

`npm run collect:icons` 会从产品官网优先采集 Apple Touch Icon 与 favicon，下载到 `assets/product-icons/`。没有可靠图标的产品会在页面中自动使用文字缩写，不会出现破图。
- `data/source-overrides.json`：额外搜索词、官方 RSS 和 GitHub Release 信源
- `reviews/latest-auto-review.md`：最近一次自动审核记录
- `EDITORIAL_RULES.md`：正式收录标准

## 每周自动更新

GitHub Actions（`.github/workflows/discover-major-updates.yml`）每周一北京时间 10:10 自动运行，完成公开新闻、中文 AI 新闻聚合源与官方信源发现、严格审核、正式时间线更新，并直接提交到 `main`。整个过程不需要处理 PR。

自动审核采用保守策略：官方高影响事件，或高分、产品名称明确匹配的可信媒体事件才会发布；证据不足的候选会暂缓。新产品不会仅凭一条媒体标题自动入库。

当前版本不需要搜索 API 或模型 API Key。后续如果需要提高新产品自动入库能力，可接入搜索 API 和模型判断。

中文新闻发现会额外读取：

- `AIBase`：按时间窗口向前读取新闻，直到遇到早于窗口的新闻再停止；`aiBaseMaxPages` 只是防止异常循环的安全上限。由于其公开分页 API 对匿名请求返回 401，脚本使用 Nuxt 列表 payload 和公开详情 payload 做候选发现。
- `AI工具集 daily-ai-news`：读取按日期分组的近期新闻，默认覆盖最近 7 天；也可用 `DISCOVERY_SINCE=YYYY-MM-DD` 回溯指定日期之后的内容。
- `AI HOT`：读取已有的中文 AI 热点接口。

微信公众号文章不能直接放进 GitHub Actions 稳定无人值守运行，因为 `wechat-search-weread` 依赖微信读书登录态和浏览器会话。适合本地登录后采集，再把结果导入候选池；配置入口保留在 `source-overrides.json` 的 `cnNews.wechatWeread`。

`source-overrides.json` 支持按产品 slug 补充官方信源：

```json
{
  "githubRepos": { "产品-slug": "owner/repository" },
  "officialRss": { "产品-slug": ["https://example.com/releases.xml"] },
  "extraQueries": { "产品-slug": ["产品常用别名"] },
  "cnNews": {
    "enabledSources": ["AIBase", "AI工具集"],
    "aiBaseMaxPages": 40,
    "aiBotDays": 7,
    "wechatWeread": { "enabled": false, "accounts": [] }
  }
}
```

## 部署

站点部署在 **Cloudflare Pages**（项目名 `agent-index-intelligence`）。

部署工作流 `.github/workflows/deploy-cloudflare-pages.yml` 在 push 到 `main` 时触发，先运行 `npm run validate`，再用 `wrangler pages deploy` 发布。该部署步骤需要以下仓库 Secrets：

- `CLOUDFLARE_API_TOKEN`：Cloudflare API Token（需包含 **Account → Cloudflare Pages → Edit** 权限）
- `CLOUDFLARE_ACCOUNT_ID`：`1fccb4754590c95e5ea502534bcebb9f`

> ⚠️ 未配置上述 Secrets 时，工作流的部署步骤会被 `if` 条件**跳过**（任务整体仍显示成功），线上不会更新。在 Secrets 配好之前，每次需要上线都要手动部署：

```bash
npx wrangler pages deploy . --project-name=agent-index-intelligence --branch=main
```

> 历史：早期曾使用 Netlify，仓库中残留的 `netlify.toml` / `.netlify` 已不再作为部署来源。
