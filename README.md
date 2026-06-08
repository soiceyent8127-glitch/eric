# AI Agent 产品情报库

这是从现有 Netlify 静态站恢复并升级的可持续维护版本。正式页面只展示经过审核的重大更新，自动采集结果保存在候选列表中。

## 线上入口

- 网站：https://roaring-froyo-8e6e30.netlify.app/
- 重大动态：https://roaring-froyo-8e6e30.netlify.app/timeline.html

## 日常维护

```bash
npm run validate
npm run discover
npm run promote -- <candidate-id>
npm run serve
```

- `data/site-data.js`：产品基础资料
- `data/major-updates.js`：已审核并公开展示的重大动态
- `data/candidates.json`：自动发现、尚未公开的候选
- `data/product-candidates.json`：尚未入库的新产品候选
- `data/source-overrides.json`：额外搜索词、官方 RSS 和 GitHub Release 信源
- `EDITORIAL_RULES.md`：正式收录标准

提升候选后，必须编辑 `data/major-updates.js` 中的摘要、类别和收录原因，再提交发布。

## 自动发现

GitHub Actions 每周一运行一次公开新闻 RSS 搜索，根据严格关键词评分生成候选 PR。它不会自动修改正式时间线，因此普通日常更新不会直接进入网站。

第一版不需要搜索 API 或模型 API Key。后续如果公开搜索漏报明显，可以接入 Tavily、Serper、Brave Search 或模型判断，但仍应保留人工审核。

`source-overrides.json` 支持按产品 slug 补充官方信源：

```json
{
  "githubRepos": { "产品-slug": "owner/repository" },
  "officialRss": { "产品-slug": ["https://example.com/releases.xml"] },
  "extraQueries": { "产品-slug": ["产品常用别名"] }
}
```

## 部署

将此目录作为 GitHub 仓库根目录，并在 Netlify 连接该仓库。`netlify.toml` 已将当前目录配置为静态发布目录；合并到默认分支后 Netlify 会自动更新网站。
