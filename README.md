# AI Agent 产品情报库

这是从现有 Netlify 静态站恢复并升级的可持续维护版本。正式页面只展示通过严格自动审核的重大更新。

## 线上入口

- 网站：https://roaring-froyo-8e6e30.netlify.app/
- 重大动态：https://roaring-froyo-8e6e30.netlify.app/timeline.html

## 日常维护

```bash
npm run validate
npm run discover
npm run auto-review
npm run weekly:auto
npm run promote -- <candidate-id>
npm run serve
```

- `data/site-data.js`：产品基础资料
- `data/major-updates.js`：已审核并公开展示的重大动态
- `data/candidates.json`：自动发现、尚未公开的候选
- `data/product-candidates.json`：尚未入库的新产品候选
- `data/source-overrides.json`：额外搜索词、官方 RSS 和 GitHub Release 信源
- `reviews/latest-auto-review.md`：最近一次自动审核记录
- `EDITORIAL_RULES.md`：正式收录标准

## 每周自动更新

GitHub Actions 每周一北京时间 10:10 自动运行，完成公开新闻与官方信源发现、严格审核、正式时间线更新，并直接提交到 `main`。Netlify 监听 `main`，随后自动更新线上网站。整个过程不需要处理 PR。

自动审核采用保守策略：官方高影响事件，或高分、产品名称明确匹配的可信媒体事件才会发布；证据不足的候选会暂缓。新产品不会仅凭一条媒体标题自动入库。

当前版本不需要搜索 API 或模型 API Key。后续如果需要提高新产品自动入库能力，可接入搜索 API 和模型判断。

`source-overrides.json` 支持按产品 slug 补充官方信源：

```json
{
  "githubRepos": { "产品-slug": "owner/repository" },
  "officialRss": { "产品-slug": ["https://example.com/releases.xml"] },
  "extraQueries": { "产品-slug": ["产品常用别名"] }
}
```

## 部署

此目录已连接 GitHub 与 Netlify。自动任务提交到默认分支后，Netlify 会自动更新网站。
