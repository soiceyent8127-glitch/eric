const researchData = window.RESEARCH_DATA || { products: [], strategy: { items: [] }, meta: {} };
const products = researchData.products || [];
const majorUpdates = window.MAJOR_UPDATES || [];
const visuals = window.PRODUCT_VISUALS || {};

const routes = [
  {
    title: "国外本地桌面 Agent",
    desc: "OpenAI 和 Anthropic 更像在抢个人工作环境入口，重点是浏览器、代码库、本机任务和跨端接续。",
    products: ["Codex桌面版（Open AI）", "Anthropic Claude Cowork"],
  },
  {
    title: "国外云端企业 Agent",
    desc: "AWS、Google 更偏企业工作流，优势在数据连接、权限体系、组织知识和云端长期任务。",
    products: ["Amazon Quick（AWS）", "Gemini Spark（Google）"],
  },
  {
    title: "国内三大厂主战场",
    desc: "腾讯、阿里、字节围绕 IM 分发、混合执行、Skill 市场和办公场景交付展开竞争。",
    products: ["WorkBuddy（腾讯）", "QoderWork（阿里巴巴）", "Coze 2.5（字节跳动）"],
  },
  {
    title: "模型厂商卫星区",
    desc: "MiniMax、阶跃等模型厂商把模型能力包装成桌面伙伴、专家团队和 OpenClaw 兼容生态。",
    products: ["MiniMax Agent（MiniMax）", "阶跃 AI 桌面伙伴（阶跃星辰）", "StepClaw（阶跃星辰）"],
  },
];

const radarNodes = [
  ["OpenAI", "Codex Desktop", "p12-codex-open-ai", 29, 27],
  ["Anthropic", "Claude Cowork", "", 38, 21],
  ["AWS", "Amazon Quick", "p11-amazon-quick-aws", 73, 26],
  ["Google", "Gemini Spark", "p31-gemini-spark-google", 82, 34],
  ["腾讯", "WorkBuddy", "p02-workbuddy", 32, 66],
  ["阿里", "QoderWork", "p01-qoderwork", 28, 80],
  ["字节", "Coze / ArkClaw", "p36-2.5", 40, 92],
  ["MiniMax", "Agent / MaxClaw", "p04-minimax-agent-minimax", 72, 70],
  ["阶跃", "StepClaw", "p03-ai", 76, 84],
];

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function productUrl(product) {
  return `product.html?id=${encodeURIComponent(product.slug)}`;
}

function formatDate(date) {
  return date ? date.slice(5).replace("-", "/") : "待核验";
}

function findProductByName(name) {
  return products.find((product) => product.name === name || product.name.includes(name) || name.includes(product.name.split("（")[0]));
}

function initials(label) {
  const latin = label.match(/[A-Za-z0-9]+/g);
  if (latin?.length) return latin.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  return Array.from(label).slice(0, 2).join("");
}

function markFor(productOrSlug, label = "") {
  const product = typeof productOrSlug === "string" ? products.find((item) => item.slug === productOrSlug) : productOrSlug;
  const slug = product?.slug || productOrSlug;
  const icon = visuals[slug]?.icon;
  const text = label || product?.name || slug;
  return `<span class="mark" aria-hidden="true">${icon ? `<img src="${icon}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : escapeHtml(initials(text))}</span>`;
}

function renderMetrics() {
  const groups = new Set(products.map((product) => product.group).filter(Boolean)).size;
  const metrics = [
    [products.length, "追踪产品"],
    [majorUpdates.length, "重大动态"],
    [groups, "竞争分组"],
    [researchData.strategy.items.length, "战略判断"],
  ];
  $("#metric-grid").innerHTML = metrics
    .map(([value, label]) => `<div class="metric-card reveal"><strong data-count="${value}">0</strong><span>${label}</span></div>`)
    .join("");
}

function renderLatest() {
  const latest = [...majorUpdates].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  $("#latest-stack").innerHTML = latest
    .map((item) => {
      const product = products.find((entry) => entry.slug === item.productSlug);
      return `
        <a class="latest-item reveal" href="${product ? productUrl(product) : "timeline.html"}">
          <time>${formatDate(item.date)}</time>
          <span><b>${escapeHtml(item.title)}</b><span>${escapeHtml(item.impact || item.category || "重大动态")}</span></span>
        </a>
      `;
    })
    .join("");
}

function renderRadar() {
  const stage = $("#radar-stage");
  const labels = [
    ["top", "Foreign"],
    ["bottom", "China"],
    ["left", "Local Desktop"],
    ["right", "Cloud Workflow"],
  ];
  const zones = [
    ["国外 · 本地桌面", "个人工作环境入口", 16, 14],
    ["国外 · 云端企业", "组织级工作流入口", 64, 13],
    ["国内 · 三大厂", "IM + 混合执行", 3, 52],
    ["模型厂商", "模型能力产品化", 62, 52],
  ];

  stage.innerHTML = `
    ${labels.map(([pos, text]) => `<span class="axis-label ${pos}">${text}</span>`).join("")}
    ${zones.map(([title, desc, left, top]) => `<div class="map-label" style="left:${left}%;top:${top}%"><b>${title}</b><span>${desc}</span></div>`).join("")}
    ${radarNodes
      .map(([name, desc, slug, left, top]) => {
        const product = slug ? products.find((item) => item.slug === slug) : null;
        const href = product ? productUrl(product) : "#products";
        return `
          <a class="radar-node reveal" href="${href}" style="left:${left}%;top:${top}%">
            ${product ? markFor(product) : `<span class="mark">${escapeHtml(initials(name))}</span>`}
            <span><b>${escapeHtml(name)}</b><span>${escapeHtml(desc)}</span></span>
          </a>
        `;
      })
      .join("")}
  `;
}

function renderRoutes() {
  $("#route-panel").innerHTML = routes
    .map((route) => `
      <article class="route-card reveal">
        <strong>${escapeHtml(route.title)}</strong>
        <p>${escapeHtml(route.desc)}</p>
        <div class="route-products">${route.products.map((name) => `<span class="tag">${escapeHtml(name)}</span>`).join("")}</div>
      </article>
    `)
    .join("");
}

function renderTheses() {
  $("#thesis-grid").innerHTML = researchData.strategy.items
    .slice(0, 6)
    .map((item, index) => `
      <article class="thesis-card reveal" data-index="${String(index + 1).padStart(2, "0")}">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.judgment)}</p>
      </article>
    `)
    .join("");
}

function optionList(values, label) {
  return [`<option value="">全部${label}</option>`, ...values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)].join("");
}

function renderFilters() {
  const types = [...new Set(products.map((product) => product.type).filter(Boolean))];
  const groups = [...new Set(products.map((product) => product.group).filter(Boolean))];
  $("#type-filter").innerHTML = optionList(types, "类型");
  $("#group-filter").innerHTML = optionList(groups, "分组");
}

function productMatches(product, query, type, group) {
  const haystack = [product.name, product.vendor, product.type, product.group, product.summary, ...(product.capabilities || [])].join(" ").toLowerCase();
  return (!query || haystack.includes(query.toLowerCase())) && (!type || product.type === type) && (!group || product.group === group);
}

function renderProducts() {
  const query = $("#product-search").value.trim();
  const type = $("#type-filter").value;
  const group = $("#group-filter").value;
  const filtered = products.filter((product) => productMatches(product, query, type, group));

  $("#result-meta").innerHTML = `
    <span><strong>${filtered.length}</strong> / ${products.length} 个产品匹配当前筛选</span>
    <span>${[query && `搜索：${query}`, type && `类型：${type}`, group && `分组：${group}`].filter(Boolean).join(" · ") || "未选择筛选条件"}</span>
  `;

  $("#product-cards").innerHTML = filtered
    .map((product) => `
      <article class="product-card reveal">
        <a class="product-top" href="${productUrl(product)}">
          ${markFor(product)}
          <span><h3>${escapeHtml(product.name)}</h3><small>${escapeHtml(product.vendor || product.group || "未标明厂商")}</small></span>
        </a>
        <div class="tag-row">
          <span class="tag">${escapeHtml(product.type)}</span>
          <span class="tag">${escapeHtml(product.group)}</span>
          ${(product.capabilities || []).slice(0, 3).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
        </div>
        <p>${escapeHtml(product.summary || product.features || "暂无摘要").slice(0, 118)}${(product.summary || product.features || "").length > 118 ? "..." : ""}</p>
        <div class="card-links">
          <a href="${productUrl(product)}">研究档案</a>
          ${product.website ? `<a href="${escapeHtml(product.website)}" target="_blank" rel="noreferrer">官网信源</a>` : ""}
          ${product.pricing ? `<a href="${escapeHtml(product.pricing)}" target="_blank" rel="noreferrer">定价</a>` : ""}
        </div>
      </article>
    `)
    .join("");

  $("#product-table-wrap").innerHTML = `
    <table class="product-table">
      <thead><tr><th>产品</th><th>类型</th><th>分组</th><th>核心能力</th><th>原始链接</th></tr></thead>
      <tbody>
        ${filtered.map((product) => `
          <tr>
            <td><a class="table-product" href="${productUrl(product)}">${markFor(product)}<span><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(product.vendor || "未标明厂商")}</small></span></a></td>
            <td>${escapeHtml(product.type)}</td>
            <td>${escapeHtml(product.group)}</td>
            <td><div class="tag-row">${(product.capabilities || []).slice(0, 4).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div></td>
            <td>${product.website ? `<a class="button ghost" href="${escapeHtml(product.website)}" target="_blank" rel="noreferrer">官网</a>` : "未收录"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  observeReveals();
}

function bindProducts() {
  ["product-search", "type-filter", "group-filter"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderProducts);
  });
  $("#clear-filters").addEventListener("click", () => {
    $("#product-search").value = "";
    $("#type-filter").value = "";
    $("#group-filter").value = "";
    renderProducts();
  });
  $all("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      $all("[data-view]").forEach((entry) => entry.classList.toggle("active", entry === button));
      const showTable = button.dataset.view === "table";
      $("#product-cards").classList.toggle("hidden", showTable);
      $("#product-table-wrap").classList.toggle("hidden", !showTable);
    });
  });
}

function bindSpotlight() {
  $all(".briefing-console, .arena-card, .product-card").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      element.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

function observeReveals() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = $all(".reveal:not(.is-visible)");
  if (reduce) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
      const count = entry.target.querySelector("[data-count]");
      if (count) animateCount(count);
    });
  }, { threshold: 0.18 });
  items.forEach((item) => observer.observe(item));
}

function animateCount(element) {
  if (element.dataset.done) return;
  element.dataset.done = "true";
  const target = Number(element.dataset.count);
  const start = performance.now();
  const duration = 900;
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    element.textContent = Math.round(target * eased).toLocaleString("en-US");
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function init() {
  renderMetrics();
  renderLatest();
  renderRadar();
  renderRoutes();
  renderTheses();
  renderFilters();
  renderProducts();
  bindProducts();
  bindSpotlight();
  observeReveals();
  initGlobalGalaxy(); // shared amber WebGL star field (same as the rest of the site)
}

document.addEventListener("DOMContentLoaded", init);
