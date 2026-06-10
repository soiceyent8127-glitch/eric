const data = window.RESEARCH_DATA;
const products = data.products;
const majorUpdates = window.MAJOR_UPDATES || [];
const groupOrder = ["国内", "国外", "核心友商", "模型厂商", "其他厂商", "手机厂商"];
const typeOrder = ["类 Cowork", "类 OpenClaw"];

function $(selector, root = document) {
  return root.querySelector(selector);
}

function formatValue(value, fallback = "未标明") {
  return value && value.trim() ? value.trim() : fallback;
}

function productUrl(product) {
  return `product.html?id=${encodeURIComponent(product.slug)}`;
}

function externalLink(url, label, className = "link-button") {
  if (!url || !/^https?:\/\//.test(url)) return "";
  return `<a class="${className}" href="${url}" target="_blank" rel="noreferrer">${label}<span aria-hidden="true">↗</span></a>`;
}

function tag(label, tone = "") {
  return `<span class="tag ${tone}">${label}</span>`;
}

function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...options,
  }).format(new Date(`${date}T00:00:00`));
}

function monthKey(date) {
  return date.slice(0, 7);
}

function monthLabel(key) {
  const [year, month] = key.split("-");
  return `${year} 年 ${Number(month)} 月`;
}

function countBy(key) {
  return products.reduce((acc, product) => {
    const value = product[key] || "未分类";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function uniqueValues(key) {
  const values = [...new Set(products.map((product) => product[key]).filter(Boolean))];
  const order = key === "group" ? groupOrder : key === "type" ? typeOrder : [];
  return values.sort((a, b) => {
    const ai = order.indexOf(a);
    const bi = order.indexOf(b);
    if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    return a.localeCompare(b, "zh-Hans-CN");
  });
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === path || (path === "product.html" && target === "products.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function renderHeader() {
  const header = $("#site-header");
  if (!header) return;
  header.innerHTML = `
    <div class="nav">
      <a class="brand" href="index.html" aria-label="Agent Index 首页">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" focusable="false">
            <rect class="brand-mark-bg" x="1" y="1" width="30" height="30" rx="7"></rect>
            <path class="brand-mark-lines" d="M9 10h14M9 16h10M9 22h14"></path>
            <circle class="brand-mark-point" cx="22" cy="16" r="2"></circle>
          </svg>
        </span>
        <span><strong>Agent Index</strong><small>产品情报编辑部</small></span>
      </a>
      <nav class="nav-links" aria-label="主导航">
        <a data-nav href="index.html">本周简报</a>
        <a data-nav href="products.html">产品档案</a>
        <a data-nav href="timeline.html">重大动态</a>
      </nav>
      <a class="edition-status" href="timeline.html"><i aria-hidden="true"></i><span>最新核验</span><strong>${formatDate(data.meta.generatedAt, { year: undefined })}</strong></a>
    </div>
  `;
  setActiveNav();
}

function relatedProductsForStrategy(item) {
  const evidence = `${item.title} ${item.judgment} ${item.evidence}`.toLowerCase();
  return products
    .filter((product) => {
      const shortName = product.name.replace(/（.*?）/g, "").trim().toLowerCase();
      return evidence.includes(shortName) || (product.vendor && evidence.includes(product.vendor.toLowerCase()));
    })
    .slice(0, 5);
}

function updateBriefCard(item, lead = false) {
  const product = products.find((entry) => entry.slug === item.productSlug);
  return `
    <article class="brief-card ${lead ? "brief-lead" : ""}">
      <div class="brief-meta"><span>${formatDate(item.date, { year: undefined })}</span>${tag(item.category, "accent")}</div>
      <h${lead ? "2" : "3"}><a href="${product ? productUrl(product) : "timeline.html"}">${item.title}</a></h${lead ? "2" : "3"}>
      <p>${lead ? item.summary : item.impact}</p>
      <div class="brief-footer">
        <span>${product ? product.name : "行业动态"}</span>
        <a href="${product ? productUrl(product) : "timeline.html"}">查看档案 <span aria-hidden="true">→</span></a>
      </div>
    </article>
  `;
}

function renderHome() {
  const root = $("#home-root");
  if (!root) return;
  const sortedUpdates = majorUpdates.slice().sort((a, b) => b.date.localeCompare(a.date));
  const latest = sortedUpdates.slice(0, 4);
  const typeCounts = countBy("type");
  const groupCounts = countBy("group");
  const capabilityCounts = Object.entries(
    products.flatMap((product) => product.capabilities).reduce((acc, capability) => {
      acc[capability] = (acc[capability] || 0) + 1;
      return acc;
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  const maxCapability = capabilityCounts[0]?.[1] || 1;

  root.innerHTML = `
    <section class="briefing-masthead">
      <div class="wrap briefing-shell">
        <aside class="edition-rail">
          <span class="edition-number">W${String(Math.ceil((new Date(data.meta.generatedAt) - new Date(`${new Date(data.meta.generatedAt).getFullYear()}-01-01`)) / 604800000) + 1).padStart(2, "0")}</span>
          <div><strong>每周产品情报</strong><span>核验于 ${formatDate(data.meta.generatedAt)}</span></div>
        </aside>
        <div class="briefing-title">
          <p>Agent 产品情报简报</p>
          <h1>本周，哪些变化值得改变判断？</h1>
          <div class="briefing-actions">
            <a class="primary-button" href="timeline.html">阅读全部动态</a>
            <a class="ghost-button" href="products.html">打开产品档案</a>
          </div>
        </div>
        <div class="briefing-grid">
          ${latest[0] ? updateBriefCard(latest[0], true) : ""}
          <div class="brief-stack">${latest.slice(1).map((item) => updateBriefCard(item)).join("")}</div>
        </div>
        <div class="briefing-ledger" aria-label="情报库规模">
          <div><strong>${products.length}</strong><span>已建档产品</span></div>
          <div><strong>${majorUpdates.length}</strong><span>已审核重大事件</span></div>
          <div><strong>${data.strategy.items.length}</strong><span>持续跟踪判断</span></div>
          <p>${data.strategy.overview}</p>
        </div>
      </div>
    </section>

    <section class="atlas-section">
      <div class="wrap">
        <div class="section-heading">
          <div><span>市场版图</span><h2>把 ${products.length} 个产品放进同一套坐标系</h2></div>
          <a class="text-link" href="products.html">进入完整产品档案</a>
        </div>
        <div class="atlas-grid">
          <article class="atlas-types">
            <h3>两条产品路线</h3>
            ${typeOrder
              .map(
                (type) => `
                  <a class="route-row" href="products.html?type=${encodeURIComponent(type)}">
                    <span>${type}</span>
                    <strong>${typeCounts[type] || 0}</strong>
                    <i style="--share:${((typeCounts[type] || 0) / products.length) * 100}%"></i>
                  </a>
                `,
              )
              .join("")}
            <p>类 Cowork 强调工作场景封装，类 OpenClaw 更靠近执行底座与生态兼容。</p>
          </article>
          <article class="atlas-groups">
            <h3>厂商与区域分布</h3>
            <div class="group-map">
              ${groupOrder
                .map(
                  (group) => `
                    <a href="products.html?group=${encodeURIComponent(group)}">
                      <strong>${groupCounts[group] || 0}</strong><span>${group}</span>
                    </a>
                  `,
                )
                .join("")}
            </div>
          </article>
          <article class="atlas-capabilities">
            <h3>能力覆盖</h3>
            <div class="capability-chart">
              ${capabilityCounts
                .map(
                  ([label, count]) => `
                    <a href="products.html?capability=${encodeURIComponent(label)}">
                      <span>${label}</span><i><b style="width:${(count / maxCapability) * 100}%"></b></i><strong>${count}</strong>
                    </a>
                  `,
                )
                .join("")}
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="strategy-section" id="strategy">
      <div class="wrap strategy-layout">
        <div class="strategy-intro">
          <span>编辑部判断</span>
          <h2>竞争重心正在迁移</h2>
          <p>判断不是结论墙。展开每个专题，可以同时查看编辑部判断、公开证据和被提及的产品。</p>
        </div>
        <div class="strategy-desk">
          ${data.strategy.items
            .map((item, index) => {
              const related = relatedProductsForStrategy(item);
              return `
                <details class="strategy-topic" ${index === 0 ? "open" : ""}>
                  <summary><span>${String(item.id).padStart(2, "0")}</span><strong>${item.title}</strong><i aria-hidden="true">+</i></summary>
                  <div class="strategy-topic-body">
                    <div><span>编辑部判断</span><p>${item.judgment}</p></div>
                    <div><span>公开证据</span><p>${item.evidence}</p></div>
                    ${
                      related.length
                        ? `<div class="related-strip"><span>相关档案</span>${related.map((product) => `<a href="${productUrl(product)}">${product.name}</a>`).join("")}</div>`
                        : ""
                    }
                  </div>
                </details>
              `;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function compactProductCard(product) {
  return `
    <article class="product-card">
      <div class="product-card-head">
        <div><span>${formatValue(product.group)}</span><h3><a href="${productUrl(product)}">${product.name}</a></h3><small>${formatValue(product.vendor)}</small></div>
        ${tag(product.type, product.type.includes("Cowork") ? "accent" : "")}
      </div>
      <p>${product.summary}</p>
      <div class="capability-line">${product.capabilities.slice(0, 4).map((item) => tag(item)).join("")}</div>
      <div class="product-card-foot">
        <span>更新 ${formatValue(product.updatedAt, "待核验")}</span>
        <a href="${productUrl(product)}">打开档案 <span aria-hidden="true">→</span></a>
      </div>
    </article>
  `;
}

function productTable(items) {
  return `
    <div class="product-table-shell">
      <table class="product-table">
        <thead><tr><th>产品 / 厂商</th><th>路线</th><th>分类</th><th>核心能力</th><th>更新时间</th><th>信源</th></tr></thead>
        <tbody>
          ${items
            .map(
              (product) => `
                <tr>
                  <td><a href="${productUrl(product)}"><strong>${product.name}</strong></a><span>${formatValue(product.vendor)}</span></td>
                  <td>${product.type}</td>
                  <td>${formatValue(product.group)}</td>
                  <td><div class="capability-line">${product.capabilities.slice(0, 3).map((item) => tag(item)).join("")}</div></td>
                  <td>${formatValue(product.updatedAt, "待核验")}</td>
                  <td><div class="source-links">${externalLink(product.website, "官网", "source-link")}${externalLink(product.pricing, "定价", "source-link")}</div></td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderProducts() {
  const root = $("#products-root");
  if (!root) return;
  const params = new URLSearchParams(location.search);
  let selectedType = params.get("type") || "";
  let view = localStorage.getItem("agent-index-view") === "table" ? "table" : "cards";

  root.innerHTML = `
    <section class="archive-head">
      <div class="wrap archive-head-inner">
        <div><span>产品档案库</span><h1>浏览、筛选并比较 Agent 产品</h1><p>所有条目均保留官网、定价与公开资料，适合快速扫描和横向比较。</p></div>
        <div class="archive-summary"><strong>${products.length}</strong><span>个产品档案</span><small>${uniqueValues("group").length} 类厂商分组 · ${new Set(products.flatMap((product) => product.capabilities)).size} 项能力标签</small></div>
      </div>
    </section>
    <section class="archive-workspace">
      <div class="wrap">
        <div class="filter-toolbar">
          <div class="search-field"><label for="search">搜索档案</label><input id="search" class="search-input" type="search" placeholder="输入产品、厂商、能力或链接"></div>
          <div><label for="group-filter">厂商分类</label><select id="group-filter" class="select"><option value="">全部分类</option>${uniqueValues("group").map((value) => `<option>${value}</option>`).join("")}</select></div>
          <div><label for="capability-filter">能力标签</label><select id="capability-filter" class="select"><option value="">全部能力</option>${[...new Set(products.flatMap((product) => product.capabilities))].sort().map((value) => `<option>${value}</option>`).join("")}</select></div>
          <button id="reset-filters" class="quiet-button" type="button">清除筛选</button>
        </div>
        <div class="archive-control-row">
          <div class="type-tabs" id="type-filter">
            <button data-value="">全部产品</button>
            ${uniqueValues("type").map((value) => `<button data-value="${value}">${value}</button>`).join("")}
          </div>
          <div class="view-switch" aria-label="视图切换">
            <button data-view="cards">卡片</button><button data-view="table">表格</button>
          </div>
        </div>
        <div class="result-bar">
          <h2 id="result-count" aria-live="polite">${products.length} 个产品</h2>
          <div id="active-filters" class="active-filters"></div>
        </div>
        <div id="product-results"></div>
      </div>
    </section>
  `;

  const search = $("#search");
  const group = $("#group-filter");
  const capability = $("#capability-filter");
  const results = $("#product-results");
  const count = $("#result-count");
  const activeFilters = $("#active-filters");
  group.value = params.get("group") || "";
  capability.value = params.get("capability") || "";

  function setControlStates() {
    $("#type-filter").querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.value === selectedType));
    $(".view-switch").querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  }

  function applyFilters() {
    const q = search.value.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const searchable = [product.name, product.vendor, product.type, product.group, product.summary, product.features, product.ecosystem, product.website, product.pricing, product.capabilities.join(" ")].join(" ").toLowerCase();
      return (!q || searchable.includes(q)) && (!selectedType || product.type === selectedType) && (!group.value || product.group === group.value) && (!capability.value || product.capabilities.includes(capability.value));
    });
    count.textContent = `${filtered.length} 个产品`;
    const chips = [
      q ? `搜索：${search.value.trim()}` : "",
      selectedType,
      group.value,
      capability.value,
    ].filter(Boolean);
    activeFilters.innerHTML = chips.map((item) => `<span>${item}</span>`).join("");
    results.innerHTML = filtered.length
      ? view === "table"
        ? productTable(filtered)
        : `<div class="product-grid">${filtered.map((product) => compactProductCard(product)).join("")}</div>`
      : `<div class="empty-state"><strong>没有匹配的产品档案</strong><span>调整搜索词或清除筛选后再试。</span></div>`;
    setControlStates();
  }

  $("#type-filter").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    selectedType = button.dataset.value;
    applyFilters();
  });
  $(".view-switch").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    view = button.dataset.view;
    localStorage.setItem("agent-index-view", view);
    applyFilters();
  });
  [search, group, capability].forEach((control) => control.addEventListener("input", applyFilters));
  $("#reset-filters").addEventListener("click", () => {
    search.value = "";
    group.value = "";
    capability.value = "";
    selectedType = "";
    applyFilters();
    search.focus();
  });
  applyFilters();
}

function dossierList(items, fallback) {
  return items.length ? `<ol class="dossier-list">${items.map((item) => `<li>${item}</li>`).join("")}</ol>` : `<p class="prose-fallback">${fallback}</p>`;
}

function renderProductDetail() {
  const root = $("#product-root");
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const product = products.find((item) => item.slug === params.get("id")) || products[0];
  const related = products.filter((item) => item.slug !== product.slug && (item.type === product.type || item.group === product.group)).slice(0, 5);
  const productUpdates = majorUpdates.filter((item) => item.productSlug === product.slug).sort((a, b) => b.date.localeCompare(a.date));
  document.title = `${product.name} | Agent Index 产品档案`;

  root.innerHTML = `
    <section class="dossier-head">
      <div class="wrap">
        <p class="breadcrumb"><a href="products.html">产品档案</a><span>/</span>${product.type}<span>/</span>${formatValue(product.group)}</p>
        <div class="dossier-title-row">
          <div><div class="tag-row">${tag(product.type, "accent")}${tag(formatValue(product.group))}</div><h1>${product.name}</h1><p>${product.summary}</p></div>
          <div class="dossier-actions">${externalLink(product.website, "访问官网", "primary-button")}${externalLink(product.pricing, "查看定价", "ghost-button")}</div>
        </div>
        <div class="fact-ledger">
          ${[
            ["厂商", formatValue(product.vendor)],
            ["上线时间", formatValue(product.launchDate)],
            ["最近更新", formatValue(product.updatedAt)],
            ["部署方式", formatValue(product.deployment)],
            ["重大动态", `${productUpdates.length} 条`],
          ]
            .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
            .join("")}
        </div>
      </div>
    </section>
    <section class="dossier-body">
      <div class="wrap dossier-layout">
        <nav class="dossier-nav" aria-label="档案目录">
          <strong>档案目录</strong>
          <a href="#positioning">产品定位</a><a href="#capabilities">核心能力</a><a href="#ecosystem">生态与入口</a><a href="#updates">重大动态</a><a href="#sources">原始信源</a>
        </nav>
        <main class="dossier-content">
          <section id="positioning" class="dossier-section"><span>产品定位</span><h2>${product.summary}</h2><div class="capability-line">${product.capabilities.map((item) => tag(item)).join("")}</div></section>
          <section id="capabilities" class="dossier-section"><span>核心能力</span><h2>产品如何交付结果</h2>${dossierList(product.featureBullets, formatValue(product.features, "待补充"))}</section>
          <section id="ecosystem" class="dossier-section"><span>生态与入口</span><h2>产品连接什么，又从哪里进入</h2>${dossierList(product.ecosystemBullets, formatValue(product.ecosystem, "待补充"))}</section>
          <section id="updates" class="dossier-section"><span>重大动态</span><h2>足以改变判断的事件</h2>${productUpdates.length ? `<div class="dossier-updates">${productUpdates.map((item) => timelineCard(item, false)).join("")}</div>` : `<div class="empty-state compact"><strong>暂无经过审核的重大动态</strong><span>原始调研记录仍保留在下方信源区域。</span></div>`}</section>
          <section id="sources" class="dossier-section"><span>原始信源</span><h2>核验入口与原始记录</h2><div class="source-register">${externalLink(product.website, "产品官网", "source-register-link")}${externalLink(product.pricing, "定价页面", "source-register-link")}</div><details><summary>查看原始调研更新记录</summary><div class="legacy-updates">${dossierList(product.updateBullets, formatValue(product.updates, "暂无整理出的更新记录"))}</div></details></section>
        </main>
        <aside class="related-dossiers"><strong>相关档案</strong>${related.map((item) => `<a href="${productUrl(item)}"><span>${item.type.includes("Cowork") ? "CW" : "OC"}</span><div><b>${item.name}</b><small>${formatValue(item.vendor)}</small></div></a>`).join("")}</aside>
      </div>
    </section>
  `;
}

function timelineCard(item, showProduct = true) {
  const product = products.find((entry) => entry.slug === item.productSlug);
  return `
    <article class="timeline-card">
      <div class="timeline-card-meta"><time datetime="${item.date}">${formatDate(item.date, { year: undefined })}</time>${tag(item.category, "accent")}</div>
      <div class="timeline-card-main">
        ${showProduct && product ? `<a class="timeline-product" href="${productUrl(product)}">${product.name}</a>` : ""}
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="impact-note"><strong>编辑部判断</strong><span>${item.impact}</span></div>
      </div>
      <div class="timeline-card-source">
        ${product ? `<a href="${productUrl(product)}">产品档案 <span aria-hidden="true">→</span></a>` : ""}
        ${externalLink(item.sourceUrl, item.sourceLabel || "查看信源", "source-link")}
        <span>核验于 ${item.verifiedAt}</span>
      </div>
    </article>
  `;
}

function renderTimeline() {
  const root = $("#timeline-root");
  if (!root) return;
  const categories = [...new Set(majorUpdates.map((item) => item.category))].sort();
  root.innerHTML = `
    <section class="timeline-head">
      <div class="wrap timeline-head-inner">
        <div><span>重大动态档案</span><h1>只留下会改变判断的事件</h1><p>普通日常更新不进入此处。每条事件都说明发生了什么、为什么重要，以及原始信源。</p></div>
        <div class="timeline-stats"><div><strong>${majorUpdates.length}</strong><span>已审核事件</span></div><div><strong>${new Set(majorUpdates.map((item) => item.productSlug)).size}</strong><span>涉及产品</span></div><div><strong>${categories.length}</strong><span>事件类别</span></div></div>
      </div>
    </section>
    <section class="timeline-workspace">
      <div class="wrap">
        <div class="timeline-toolbar">
          <div><label for="timeline-search">搜索事件</label><input id="timeline-search" class="search-input" type="search" placeholder="产品、事件或影响"></div>
          <div><label for="timeline-category">事件类别</label><select id="timeline-category" class="select"><option value="">全部类别</option>${categories.map((value) => `<option>${value}</option>`).join("")}</select></div>
          <p>系统每周一自动采集并审核，只收录达到重大事件阈值的内容。</p>
        </div>
        <div class="timeline-result-head"><h2 id="timeline-count" aria-live="polite">${majorUpdates.length} 条重大动态</h2><span>按月份归档</span></div>
        <div id="timeline-list" class="timeline-months"></div>
      </div>
    </section>
  `;

  const search = $("#timeline-search");
  const category = $("#timeline-category");
  const list = $("#timeline-list");
  const count = $("#timeline-count");

  function applyTimelineFilters() {
    const q = search.value.trim().toLowerCase();
    const filtered = majorUpdates
      .filter((item) => {
        const product = products.find((entry) => entry.slug === item.productSlug);
        const searchable = [item.title, item.summary, item.impact, item.category, product?.name, product?.vendor].join(" ").toLowerCase();
        return (!q || searchable.includes(q)) && (!category.value || item.category === category.value);
      })
      .sort((a, b) => b.date.localeCompare(a.date));
    count.textContent = `${filtered.length} 条重大动态`;
    const grouped = filtered.reduce((acc, item) => {
      const month = monthKey(item.date);
      (acc[month] ||= []).push(item);
      return acc;
    }, {});
    list.innerHTML = filtered.length
      ? Object.entries(grouped)
          .map(([month, items]) => `<section class="timeline-month"><div class="month-marker"><strong>${monthLabel(month)}</strong><span>${items.length} 条</span></div><div>${items.map((item) => timelineCard(item)).join("")}</div></section>`)
          .join("")
      : `<div class="empty-state"><strong>没有匹配的重大动态</strong><span>调整搜索词或事件类别后再试。</span></div>`;
  }
  [search, category].forEach((control) => control.addEventListener("input", applyTimelineFilters));
  applyTimelineFilters();
}

renderHeader();
renderHome();
renderProducts();
renderProductDetail();
renderTimeline();
