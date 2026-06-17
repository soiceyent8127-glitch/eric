const researchData = window.RESEARCH_DATA || { products: [], strategy: { items: [] }, meta: {} };
const products = researchData.products || [];
const majorUpdates = window.MAJOR_UPDATES || [];
const visuals = window.PRODUCT_VISUALS || {};

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

function renderTimelineHome() {
  const head = $("#timeline-home-head");
  const list = $("#timeline-home-list");
  if (!head || !list) return;
  const sorted = [...majorUpdates].sort((a, b) => b.date.localeCompare(a.date));
  const productCount = new Set(sorted.map((item) => item.productSlug).filter(Boolean)).size;
  const categoryCount = new Set(sorted.map((item) => item.category).filter(Boolean)).size;
  head.innerHTML = [
    [sorted.length, "已审核重大事件"],
    [productCount, "涉及产品"],
    [categoryCount, "事件类别"],
  ]
    .map(([value, label]) => `<div class="timeline-stat reveal"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");

  list.innerHTML = sorted
    .map((item) => {
      const product = products.find((entry) => entry.slug === item.productSlug);
      const href = product ? productUrl(product) : item.sourceUrl || "timeline.html";
      return `
        <article class="timeline-row reveal">
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-row-body">
            <time class="timeline-home-date">${formatDate(item.date)}</time>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.impact || item.summary || "值得持续追踪的产品变化")}</p>
            <div class="timeline-home-meta">
              ${product ? `<span class="tag">${escapeHtml(product.name.replace(/[（(].*?[）)]/g, ""))}</span>` : ""}
              <span class="tag">${escapeHtml(item.category || "重大动态")}</span>
              <a class="tag" href="${href}">查看</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderUniversePanel(product) {
  const panel = $("#universe-panel");
  if (!panel || !product) return;
  panel.innerHTML = `
    <div class="universe-tilt-card">
      <p class="universe-kicker">Selected Product</p>
      <div class="universe-title">
        ${markFor(product)}
        <span><h3>${escapeHtml(product.name)}</h3><small>${escapeHtml(product.vendor || product.group || "未标明厂商")}</small></span>
      </div>
      <p>${escapeHtml(product.summary || product.features || "暂无摘要")}</p>
      <div class="universe-meta">
        <div class="tag-row">
          <span class="tag">${escapeHtml(product.type || "未分类")}</span>
          <span class="tag">${escapeHtml(product.group || "未分组")}</span>
          ${(product.capabilities || []).slice(0, 4).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
      <div class="universe-actions">
        <a class="button primary" href="${productUrl(product)}">打开研究档案</a>
        ${product.website ? `<a class="button ghost" href="${escapeHtml(product.website)}" target="_blank" rel="noreferrer">官网信源</a>` : ""}
      </div>
    </div>
  `;
}

function renderUniverse() {
  const stage = $("#universe-stage");
  if (!stage) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  const ordered = [...products].sort((a, b) => String(a.group).localeCompare(String(b.group), "zh-CN") || a.name.localeCompare(b.name, "zh-CN"));
  let activeProduct = ordered[0];

  stage.innerHTML = ordered
    .map((product, index) => `
      <a class="universe-node reveal${index === 0 ? " is-active" : ""}" href="${productUrl(product)}" data-index="${index}">
        ${markFor(product)}
        <span><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.type || product.group || "Agent 产品")}</span></span>
      </a>
    `)
    .join("");
  renderUniversePanel(activeProduct);

  const nodes = $all(".universe-node", stage);
  nodes.forEach((node) => {
    const product = ordered[Number(node.dataset.index)];
    node.addEventListener("mouseenter", () => {
      activeProduct = product;
      nodes.forEach((entry) => entry.classList.toggle("is-active", entry === node));
      renderUniversePanel(product);
    });
    node.addEventListener("focus", () => {
      activeProduct = product;
      nodes.forEach((entry) => entry.classList.toggle("is-active", entry === node));
      renderUniversePanel(product);
    });
  });

  if (mobile || reduce) return;

  const points = ordered.map((_, index) => {
    const y = 1 - (index / Math.max(ordered.length - 1, 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = index * Math.PI * (3 - Math.sqrt(5));
    return {
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    };
  });

  let rotX = -0.08;
  let rotY = 0;
  let velocityX = 0;
  let velocityY = 0.0022;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let frame = 0;

  function place() {
    const rect = stage.getBoundingClientRect();
    const radius = Math.min(rect.width, rect.height) * 0.36;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    points.forEach((point, index) => {
      const x1 = point.x * cosY - point.z * sinY;
      const z1 = point.x * sinY + point.z * cosY;
      const y1 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;
      const depth = (z2 + 1) / 2;
      const scale = 0.56 + depth * 0.56;
      const node = nodes[index];
      node.style.setProperty("--depth", String(Math.round(depth * 1000)));
      node.style.opacity = String(0.28 + depth * 0.72);
      node.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius + cx - rect.width / 2}px, ${y1 * radius + cy - rect.height / 2}px, 0) scale(${scale})`;
    });
  }

  function tick() {
    if (!dragging) {
      rotY += velocityY;
      rotX += velocityX;
      velocityX *= 0.985;
      velocityY = velocityY * 0.985 + 0.0022 * 0.015;
    }
    place();
    frame = requestAnimationFrame(tick);
  }

  stage.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    velocityY = dx * 0.0028;
    velocityX = -dy * 0.0022;
    rotY += velocityY;
    rotX += velocityX;
    place();
  });

  stage.addEventListener("pointerup", (event) => {
    dragging = false;
    stage.releasePointerCapture(event.pointerId);
  });

  stage.addEventListener("pointercancel", () => {
    dragging = false;
  });

  addEventListener("resize", place);
  tick();
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(frame);
    if (!document.hidden) frame = requestAnimationFrame(tick);
  });
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
  $all(".briefing-console, .arena-card, .timeline-home-card, .universe-stage, .universe-panel, .product-card").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      element.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

function bindTiltCards() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (reduce || coarse) return;

  const tilt = (event) => {
    const panel = event.target.closest?.(".universe-panel");
    if (!panel) return;
    const card = panel.querySelector(".universe-tilt-card");
    if (!card) return;
    const rect = panel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 11;
    const rotateX = ((y / rect.height) - 0.5) * -9;
    card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--tilt-glow-x", `${x}px`);
    card.style.setProperty("--tilt-glow-y", `${y}px`);
    card.classList.add("is-tilting");
  };

  const untilt = (event) => {
    const panel = event.target.closest?.(".universe-panel");
    if (!panel || panel.contains(event.relatedTarget)) return;
    const card = panel.querySelector(".universe-tilt-card");
    if (!card) return;
    card.classList.remove("is-tilting");
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  document.addEventListener("pointermove", tilt);
  document.addEventListener("mousemove", tilt);
  document.addEventListener("pointerout", untilt);
  document.addEventListener("mouseout", untilt);
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
  // Each step renders only if its container exists on the current page, so the
  // same cockpit.js drives the homepage and the standalone products / timeline pages.
  [
    renderMetrics,
    renderLatest,
    renderTimelineHome,
    renderUniverse,
    renderTheses,
    renderFilters,
    renderProducts,
    bindProducts,
    bindSpotlight,
    bindTiltCards,
    observeReveals,
    initGlobalGalaxy, // shared amber WebGL star field (same as the rest of the site)
  ].forEach((step) => {
    try {
      step();
    } catch {
      /* section not present on this page */
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
