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

function externalLink(url, label) {
  if (!url || !/^https?:\/\//.test(url)) return "";
  return `<a class="link-button" href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function tag(label, tone = "") {
  return `<span class="tag ${tone}">${label}</span>`;
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === path || (path === "" && target === "index.html")) {
      link.classList.add("active");
    }
  });
}

function renderHeader() {
  const header = $("#site-header");
  if (!header) return;
  header.innerHTML = `
    <div class="nav">
      <a class="brand" href="index.html">
        <span class="brand-mark" aria-hidden="true"></span>
        <span><strong>AGENT INDEX</strong><small>产品情报库</small></span>
      </a>
      <nav class="nav-links" aria-label="主导航">
        <a data-nav href="index.html"><span>01</span>战略判断</a>
        <a data-nav href="products.html"><span>02</span>产品索引</a>
        <a data-nav href="timeline.html"><span>03</span>重大动态</a>
      </nav>
      <a class="live-indicator" href="timeline.html"><i></i>每周自动更新</a>
    </div>
  `;
  setActiveNav();
}

function countBy(key) {
  return products.reduce((acc, product) => {
    const value = product[key] || "未分类";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function renderHome() {
  const root = $("#home-root");
  if (!root) return;
  const typeCounts = countBy("type");
  const groupCounts = countBy("group");
  const capabilityCounts = products.reduce((acc, product) => {
    product.capabilities.forEach((item) => {
      acc[item] = (acc[item] || 0) + 1;
    });
    return acc;
  }, {});
  const topCapabilities = Object.entries(capabilityCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const highlighted = products
    .filter((product) => product.website && product.pricing)
    .slice(0, 6);

  root.innerHTML = `
    <section class="page-band">
      <div class="wrap dashboard-hero">
        <div>
          <p class="eyebrow">Agent product intelligence / 2026</p>
          <h1><span>追踪 Agent 产品</span><span>如何重写工作方式</span></h1>
          <p class="lead">${data.strategy.overview}</p>
          <div class="hero-actions">
            <a class="primary-button" href="products.html">浏览产品索引 <b>→</b></a>
            <a class="ghost-button" href="timeline.html">查看最新动态</a>
          </div>
          <div class="stats-row">
            <div class="stat"><strong>${products.length}</strong><span>产品 / 项目条目</span></div>
            <div class="stat"><strong>${typeCounts["类 Cowork"] || 0}</strong><span>类 Cowork 产品</span></div>
            <div class="stat"><strong>${typeCounts["类 OpenClaw"] || 0}</strong><span>类 OpenClaw 产品</span></div>
          </div>
        </div>
        <div class="map-panel" aria-label="竞品能力图谱">
          <div class="panel-kicker"><span>能力渗透率</span><b>LIVE DATASET</b></div>
          <div class="map-grid">
            ${[
              ["IM / 跨端入口", "82%", "var(--teal)", ["微信", "飞书", "Slack", "手机远控"]],
              ["混合执行环境", "70%", "var(--mint)", ["本地", "云端沙箱", "端云混合"]],
              ["Skill 商品化", "88%", "var(--gold)", ["ClawHub", "SkillHub", "Claude Skills"]],
              ["治理与安全", "66%", "var(--coral)", ["沙箱", "审批", "审计", "权限"]],
            ]
              .map(
                ([label, width, color, points]) => `
                  <div class="map-lane">
                    <div class="lane-label">${label}</div>
                    <div>
                      <div class="lane-bar" style="--w:${width};--c:${color}"><span></span></div>
                      <div class="lane-points">${points.map((point) => `<b>${point}</b>`).join("")}</div>
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section id="strategy" class="page-band">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Strategic signals / 战略判断</p>
            <h2>竞争正在从模型能力，迁移到入口、执行与治理</h2>
          </div>
          <a class="ghost-button" href="products.html">产品拆解</a>
        </div>
        <div class="strategy-grid">
          ${data.strategy.items
            .map(
              (item) => `
                <article class="strategy-card">
                  <span class="strategy-id">${item.id}</span>
                  <h3>${item.title}</h3>
                  <p>${item.judgment}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="page-band">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Product matrix / 产品矩阵</p>
            <h2>42 个产品，放进同一套坐标系</h2>
          </div>
          <a class="primary-button" href="products.html">查看全部 ${products.length} 个产品</a>
        </div>
        <div class="matrix-preview">
          <div class="cluster-list">
            ${[
              ["国内 Cowork", groupCounts["国内"] || 0, "QoderWork、WorkBuddy、阶跃桌面伙伴、MiniMax Agent、Skywork 桌面版等。"],
              ["国外 Cowork", groupCounts["国外"] || 0, "OpenWork、Microsoft Copilot Cowork、Manus 桌面版、Amazon Quick、Codex 桌面版。"],
              ["OpenClaw 分类", typeCounts["类 OpenClaw"] || 0, "核心友商 / 模型厂商 / 其他厂商 / 手机厂商。"],
            ]
              .map(
                ([label, number, desc]) => `
                  <div class="cluster-item">
                    <div class="cluster-number">${number}</div>
                    <div><strong>${label}</strong><p>${desc}</p></div>
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="table-shell">
            <table class="mini-table">
              <thead><tr><th>产品</th><th>类型</th><th>能力标签</th><th>链接</th></tr></thead>
              <tbody>
                ${highlighted
                  .map(
                    (product) => `
                      <tr>
                        <td><a href="${productUrl(product)}"><strong>${product.name}</strong></a><br><span class="product-meta">${formatValue(product.vendor)}</span></td>
                        <td>${product.type}</td>
                        <td><div class="tag-row">${product.capabilities.slice(0, 3).map((item) => tag(item, "teal")).join("")}</div></td>
                        <td>${externalLink(product.website, "官网")} ${externalLink(product.pricing, "定价")}</td>
                      </tr>
                    `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
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

function productCard(product) {
  const tone = product.type.includes("Cowork") ? "teal" : "coral";
  return `
    <article class="product-card">
      <div class="card-top">
        <div>
          <h3><a href="${productUrl(product)}">${product.name}</a></h3>
          <div class="product-meta">${formatValue(product.vendor)} · ${formatValue(product.launchDate, "上线时间未标明")}</div>
        </div>
        ${tag(product.type, tone)}
      </div>
      <p>${product.summary}</p>
      <div class="tag-row">
        ${tag(formatValue(product.group), "gold")}
        ${product.deployment ? tag(product.deployment) : ""}
        ${product.capabilities.slice(0, 4).map((item) => tag(item, "teal")).join("")}
      </div>
      <div class="card-footer">
        <a class="primary-button" href="${productUrl(product)}">详情</a>
        <div class="external-links">
          ${externalLink(product.website, "官网")}
          ${externalLink(product.pricing, "定价")}
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const root = $("#products-root");
  if (!root) return;
  root.innerHTML = `
    <section class="page-band">
      <div class="wrap">
        <p class="eyebrow">Product index / 产品索引</p>
        <h1>不是产品名单，<br>是一张竞争地图</h1>
        <p class="lead">共 ${products.length} 个条目，按类 Cowork 产品和类 OpenClaw 产品逐个拆解，并归入国内、国外、核心友商、模型厂商、其他厂商和手机厂商。</p>
      </div>
    </section>
    <section>
      <div class="wrap filters-layout">
        <aside class="filter-panel">
          <label for="search">搜索</label>
          <input id="search" class="search-input" type="search" placeholder="产品、厂商、能力、链接">
          <div class="filter-group">
            <label>类型</label>
            <div class="segmented" id="type-filter">
              <button class="active" data-value="">全部</button>
              ${uniqueValues("type").map((value) => `<button data-value="${value}">${value}</button>`).join("")}
            </div>
          </div>
          <div class="filter-group">
            <label for="group-filter">分类</label>
            <select id="group-filter" class="select">
              <option value="">全部</option>
              ${uniqueValues("group").map((value) => `<option>${value}</option>`).join("")}
            </select>
          </div>
          <div class="filter-group">
            <label for="capability-filter">能力标签</label>
            <select id="capability-filter" class="select">
              <option value="">全部</option>
              ${[...new Set(products.flatMap((product) => product.capabilities))]
                .sort()
                .map((value) => `<option>${value}</option>`)
                .join("")}
            </select>
          </div>
        </aside>
        <main>
          <div class="section-head">
            <div><p class="eyebrow">Filtered results</p><h2 id="result-count">${products.length} 个产品</h2></div>
          </div>
          <div id="product-grid" class="product-grid"></div>
        </main>
      </div>
    </section>
  `;

  let selectedType = "";
  const search = $("#search");
  const group = $("#group-filter");
  const capability = $("#capability-filter");
  const grid = $("#product-grid");
  const count = $("#result-count");

  function renderGroupedProducts(items) {
    let currentKey = "";
    return items
      .map((product) => {
        const key = `${product.type} / ${product.group}`;
        const heading =
          key === currentKey
            ? ""
            : `<div class="product-group-heading"><span>${product.type}</span><strong>${product.group}</strong></div>`;
        currentKey = key;
        return `${heading}${productCard(product)}`;
      })
      .join("");
  }

  function applyFilters() {
    const q = search.value.trim().toLowerCase();
    const selectedGroup = group.value;
    const selectedCapability = capability.value;
    const filtered = products.filter((product) => {
      const searchable = [
        product.name,
        product.vendor,
        product.type,
        product.group,
        product.region,
        product.deployment,
        product.businessModel,
        product.summary,
        product.features,
        product.ecosystem,
        product.website,
        product.pricing,
        product.capabilities.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return (
        (!q || searchable.includes(q)) &&
        (!selectedType || product.type === selectedType) &&
        (!selectedGroup || product.group === selectedGroup) &&
        (!selectedCapability || product.capabilities.includes(selectedCapability))
      );
    });
    count.textContent = `${filtered.length} 个产品`;
    grid.innerHTML = filtered.length
      ? renderGroupedProducts(filtered)
      : `<div class="empty-state">没有匹配的产品。</div>`;
  }

  $("#type-filter").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    $("#type-filter").querySelectorAll("button").forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
    selectedType = event.target.dataset.value;
    applyFilters();
  });
  [search, group, capability].forEach((control) => control.addEventListener("input", applyFilters));
  applyFilters();
}

function renderProductDetail() {
  const root = $("#product-root");
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const product = products.find((item) => item.slug === params.get("id")) || products[0];
  document.title = `${product.name} | 类 OpenClaw 和类 Claude Cowork 竞品调研`;
  const related = products
    .filter((item) => item.slug !== product.slug && (item.type === product.type || item.group === product.group))
    .slice(0, 4);
  const productUpdates = majorUpdates
    .filter((item) => item.productSlug === product.slug)
    .sort((a, b) => b.date.localeCompare(a.date));

  root.innerHTML = `
    <section class="page-band">
      <div class="wrap detail-hero">
        <div class="detail-title">
          <p class="eyebrow">${product.type} / ${formatValue(product.group)}</p>
          <h1>${product.name}</h1>
          <p>${product.summary}</p>
          <div class="hero-actions">
            <a class="ghost-button" href="products.html">返回矩阵</a>
            ${externalLink(product.website, "访问官网")}
            ${externalLink(product.pricing, "查看定价")}
          </div>
        </div>
        <aside class="detail-panel">
          <div class="facts">
            ${[
              ["厂商", formatValue(product.vendor)],
              ["上线时间", formatValue(product.launchDate)],
              ["更新时间", formatValue(product.updatedAt)],
              ["部署方式", formatValue(product.deployment)],
              ["商业模式", formatValue(product.businessModel)],
            ]
              .map(([label, value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`)
              .join("")}
          </div>
        </aside>
      </div>
    </section>
    <section>
      <div class="wrap detail-grid">
        <main>
          <section class="content-section">
            <h2>核心能力</h2>
            ${product.featureBullets.length ? `<ul class="bullet-list">${product.featureBullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>${formatValue(product.features, "待补充")}</p>`}
          </section>
          <section class="content-section">
            <h2>生态与入口</h2>
            ${product.ecosystemBullets.length ? `<ul class="bullet-list">${product.ecosystemBullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>${formatValue(product.ecosystem, "待补充")}</p>`}
          </section>
          <section class="content-section">
            <h2>重大更新时间线</h2>
            ${
              productUpdates.length
                ? `<div class="timeline-list">${productUpdates.map((item) => timelineCard(item, false)).join("")}</div>`
                : `<p>暂无经过审核的重大更新。原始调研记录仍保留在下方。</p>`
            }
          </section>
          <section class="content-section">
            <details>
              <summary>查看原始调研更新记录</summary>
              <div class="legacy-updates">
                ${product.updateBullets.length ? `<ul class="bullet-list">${product.updateBullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>${formatValue(product.updates, "暂无整理出的更新记录")}</p>`}
              </div>
            </details>
          </section>
        </main>
        <aside class="side-stack">
          <section class="detail-panel">
            <h3>能力标签</h3>
            <div class="tag-row" style="margin-top:12px">
              ${product.capabilities.map((item) => tag(item, "teal")).join("") || tag("待补充")}
            </div>
          </section>
          <section class="detail-panel">
            <h3>相关产品</h3>
            <div class="cluster-list" style="margin-top:12px">
              ${related
                .map(
                  (item) => `
                    <a class="cluster-item" href="${productUrl(item)}">
                      <div class="cluster-number">${item.type.includes("Cowork") ? "CW" : "OC"}</div>
                      <div><strong>${item.name}</strong><p>${formatValue(item.vendor)}</p></div>
                    </a>
                  `,
                )
                .join("")}
            </div>
          </section>
        </aside>
      </div>
    </section>
  `;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(`${date}T00:00:00`));
}

function timelineCard(item, showProduct = true) {
  const product = products.find((entry) => entry.slug === item.productSlug);
  return `
    <article class="timeline-card">
      <div class="timeline-date">${formatDate(item.date)}</div>
      <div class="timeline-body">
        <div class="tag-row">
          ${tag(item.category, "teal")}
          ${showProduct && product ? tag(product.name, "gold") : ""}
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="impact-note"><strong>收录原因：</strong>${item.impact}</div>
        <div class="timeline-links">
          ${product ? `<a href="${productUrl(product)}">产品详情</a>` : ""}
          ${externalLink(item.sourceUrl, item.sourceLabel || "查看信源")}
          <span>核验于 ${item.verifiedAt}</span>
        </div>
      </div>
    </article>
  `;
}

function renderTimeline() {
  const root = $("#timeline-root");
  if (!root) return;
  const categories = [...new Set(majorUpdates.map((item) => item.category))].sort();
  root.innerHTML = `
    <section class="page-band">
      <div class="wrap">
        <p class="eyebrow">Signal timeline / 重大动态</p>
        <h1>过滤噪音，<br>只留下改变判断的事件</h1>
        <p class="lead">只收录会改变产品定位、核心能力、商业模式或行业格局的事件。普通日常更新不进入此时间线。</p>
        <div class="stats-row compact-stats">
          <div class="stat"><strong>${majorUpdates.length}</strong><span>已审核重大事件</span></div>
          <div class="stat"><strong>${new Set(majorUpdates.map((item) => item.productSlug)).size}</strong><span>涉及产品</span></div>
          <div class="stat"><strong>${categories.length}</strong><span>事件类别</span></div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap timeline-layout">
        <aside class="filter-panel">
          <label for="timeline-search">搜索</label>
          <input id="timeline-search" class="search-input" type="search" placeholder="产品、事件、影响">
          <div class="filter-group">
            <label for="timeline-category">事件类别</label>
            <select id="timeline-category" class="select">
              <option value="">全部</option>
              ${categories.map((value) => `<option>${value}</option>`).join("")}
            </select>
          </div>
          <p class="filter-help">系统每周一自动采集并严格审核。只有达到重大事件阈值的内容才会进入正式时间线。</p>
        </aside>
        <main>
          <div class="section-head"><h2 id="timeline-count">${majorUpdates.length} 条重大动态</h2></div>
          <div id="timeline-list" class="timeline-list"></div>
        </main>
      </div>
    </section>
  `;

  const search = $("#timeline-search");
  const category = $("#timeline-category");
  const list = $("#timeline-list");
  const count = $("#timeline-count");

  function applyTimelineFilters() {
    const q = search.value.trim().toLowerCase();
    const selectedCategory = category.value;
    const filtered = majorUpdates
      .filter((item) => {
        const product = products.find((entry) => entry.slug === item.productSlug);
        const searchable = [item.title, item.summary, item.impact, item.category, product?.name, product?.vendor]
          .join(" ")
          .toLowerCase();
        return (!q || searchable.includes(q)) && (!selectedCategory || item.category === selectedCategory);
      })
      .sort((a, b) => b.date.localeCompare(a.date));
    count.textContent = `${filtered.length} 条重大动态`;
    list.innerHTML = filtered.length
      ? filtered.map((item) => timelineCard(item)).join("")
      : `<div class="empty-state">没有匹配的重大动态。</div>`;
  }

  [search, category].forEach((control) => control.addEventListener("input", applyTimelineFilters));
  applyTimelineFilters();
}

renderHeader();
renderHome();
renderProducts();
renderProductDetail();
renderTimeline();
