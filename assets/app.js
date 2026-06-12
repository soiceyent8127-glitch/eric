const data = window.RESEARCH_DATA;
const products = data.products;
const majorUpdates = window.MAJOR_UPDATES || [];
const productVisuals = window.PRODUCT_VISUALS || {};
const groupOrder = ["国内", "国外", "核心友商", "模型厂商", "其他厂商", "手机厂商"];
const typeOrder = ["类 Cowork", "类 OpenClaw"];

function $(selector, root = document) {
  return root.querySelector(selector);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
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

function productInitials(product) {
  const name = product.name.split("（")[0].trim();
  const words = name.match(/[A-Za-z0-9]+/g);
  if (words?.length > 1) return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  if (words?.length === 1) return words[0].slice(0, 2).toUpperCase();
  return Array.from(name).slice(0, 2).join("");
}

function productMark(product, size = "") {
  const visual = productVisuals[product.slug];
  const image = visual?.icon
    ? `<img src="${visual.icon}" alt="" loading="lazy" decoding="async" onerror="this.remove()">`
    : "";
  return `<span class="product-mark ${size}" aria-hidden="true"><span>${productInitials(product)}</span>${image}</span>`;
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
    <div class="page-progress" aria-hidden="true"><i></i></div>
    <div class="nav">
      <a class="brand" href="index.html">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" focusable="false">
            <rect class="brand-mark-bg" x="1" y="1" width="30" height="30" rx="7"></rect>
            <path class="brand-mark-lines" d="M9 10h14M9 16h10M9 22h14"></path>
            <circle class="brand-mark-point" cx="22" cy="16" r="2"></circle>
          </svg>
        </span>
        <span><strong>Agent Index</strong><small>AI 产品情报</small></span>
      </a>
      <nav class="nav-links" aria-label="主导航">
        <i class="nav-glider" aria-hidden="true"></i>
        <a data-nav href="index.html">战略判断</a>
        <a data-nav href="products.html">产品索引</a>
        <a data-nav href="timeline.html">重大动态</a>
      </nav>
      <a class="live-indicator" href="timeline.html"><i aria-hidden="true"></i>每周一更新</a>
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
  const topCapabilities = Object.entries(capabilityCounts).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const highlighted = products
    .filter((product) => product.website && product.pricing)
    .filter((product) => ["QoderWork（阿里巴巴）", "WorkBuddy（腾讯）", "Codex桌面版（Open AI）", "Amazon Quick（AWS）"].includes(product.name));
  const latest = majorUpdates.slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  root.innerHTML = `
    <section class="hero-band graphite-hero">
      <canvas id="ambient-map" class="ambient-map" aria-hidden="true"></canvas>
      <div class="wrap dashboard-hero">
        <div class="hero-copy">
          <p class="hero-kicker">Agent Market Signals · Week 24</p>
          <h1 class="split-heading" aria-label="看清 Agent 产品，正在往哪里走"><span>看清 Agent</span><span>产品，<em>正在</em></span><span><em>往哪里走</em></span></h1>
          <p class="lead">追踪类 Cowork 与类 OpenClaw 产品，只保留足以改变竞争判断的更新与信源。</p>
          <div class="hero-actions">
            <a class="primary-button" href="products.html">浏览产品索引</a>
            <a class="ghost-button" href="timeline.html">查看最新动态</a>
          </div>
          <div class="stats-row">
            <div class="stat"><strong data-count="${products.length}">${products.length}</strong><span>Products Tracked</span></div>
            <div class="stat"><strong data-count="${majorUpdates.length}">${majorUpdates.length}</strong><span>Major Signals</span></div>
            <div class="stat"><strong data-count="${data.strategy.items.length}" data-pad="2">${String(data.strategy.items.length).padStart(2, "0")}</strong><span>Strategic Theses</span></div>
          </div>
        </div>
        <aside class="competition-map" aria-label="Agent 竞争格局">
          <div class="map-head"><div><strong>Agent 竞争格局</strong><span>核心玩家按区域与执行形态分布</span></div><span class="radar-state"><i aria-hidden="true"></i>Live Sweep</span></div>
          <canvas id="radar-map" aria-hidden="true"></canvas>
          <canvas id="competition-map" aria-hidden="true"></canvas>
          <div class="radar-cardinals" aria-hidden="true"><span>N</span><span>E</span><span>S</span><span>W</span></div>
          <div class="map-axis axis-x"><span>本地桌面执行</span><span>云端常驻执行</span></div>
          <div class="map-axis axis-y"><span>国外核心玩家</span><span>国内竞争格局</span></div>
          <div class="map-cluster c1"><b>国外 · 本地桌面 Agent</b><span>个人生产力入口</span></div>
          <div class="map-cluster c2"><b>国外 · 云端企业 Agent</b><span>企业工作流入口</span></div>
          <div class="map-cluster c3"><b>国内 · 三大厂主战场</b><span>IM + 混合执行 + 生态</span></div>
          <div class="map-cluster c4"><b>国内 · 模型厂商</b><span>模型能力产品化</span></div>
          ${[
            ["OpenAI · Codex Desktop", "本地桌面 Agent", "p1"],
            ["Anthropic · Claude Cowork", "本地桌面 Agent", "p2"],
            ["AWS · Amazon Quick", "云端企业工作流", "p3"],
            ["Google · Gemini Spark", "云端常驻 Agent", "p4"],
            ["腾讯", "WorkBuddy · QClaw", "p5"],
            ["阿里", "QoderWork · CoPaw", "p6"],
            ["字节", "Coze · ArkClaw", "p7"],
            ["MiniMax", "Agent · MaxClaw", "p8"],
            ["阶跃星辰", "桌面伙伴 · StepClaw", "p9"],
          ]
            .map(([name, desc, cls], index) => `<div class="map-product ${cls} ${index < 7 ? "major" : ""}"><b>${name}</b><span>${desc}</span></div>`)
            .join("")}
          <div class="map-legend"><span>核心竞争者</span><span>关联产品</span><span>生态连接</span></div>
        </aside>
      </div>
    </section>

    <section class="signal-panels">
      <div class="wrap signal-grid">
        <article class="signal-panel" data-reveal data-reveal-x="-22">
          <div class="panel-head"><strong>本周关键信号</strong><span>${String(latest.length).padStart(2, "0")} Verified Events</span></div>
          <div class="event-list">
            ${latest
              .map((item) => {
                const product = products.find((entry) => entry.slug === item.productSlug);
                return `<a class="event-row" href="${product ? productUrl(product) : "timeline.html"}"><time>${item.date.slice(5).replace("-", "/")}</time><div><b>${item.title}</b><span>${item.impact}</span></div>${tag(item.category, "teal")}</a>`;
              })
              .join("")}
          </div>
        </article>
        <article class="signal-panel" data-reveal data-reveal-x="22" data-reveal-delay="80">
          <div class="panel-head"><strong>能力覆盖强度</strong><span>${products.length} Products</span></div>
          <div class="coverage-list signal-coverage">
            ${topCapabilities
              .map(([label, count]) => `<a class="coverage-row" href="products.html"><strong>${label}</strong><i><span style="width:${(count / topCapabilities[0][1]) * 100}%"></span></i><b>${count}</b></a>`)
              .join("")}
          </div>
        </article>
      </div>
    </section>

    <section id="strategy" class="graphite-section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="section-label">战略判断</p>
            <h2>竞争正在从模型能力，迁移到入口、执行与治理</h2>
          </div>
          <a class="ghost-button" href="products.html">产品拆解</a>
        </div>
        <ol class="strategy-list">
          ${data.strategy.items
            .slice(0, 6)
            .map(
              (item) => `
                <li data-reveal data-reveal-y="18" data-reveal-delay="${(item.id - 1) * 45}">
                  <span class="strategy-id">${String(item.id).padStart(2, "0")}</span>
                  <div><h3>${item.title}</h3><p>${item.judgment}</p></div>
                </li>
              `,
            )
            .join("")}
        </ol>
      </div>
    </section>

    <section class="section-tint graphite-section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="section-label">产品矩阵</p>
            <h2>${products.length} 个产品，放进同一套坐标系</h2>
          </div>
          <a class="primary-button" href="products.html">查看全部 ${products.length} 个产品</a>
        </div>
        <div class="matrix-preview" data-reveal data-reveal-y="22">
          <div class="cluster-list route-list">
            ${[
              ["国外本地桌面 Agent", 2, "OpenAI Codex Desktop、Anthropic Claude Cowork。"],
              ["国外云端企业 Agent", 2, "AWS Amazon Quick、Google Gemini Spark。"],
              ["国内三大厂主战场", 3, "腾讯、阿里、字节围绕 IM、混合执行与生态竞争。"],
              ["模型厂商卫星区", groupCounts["模型厂商"] || 0, "MiniMax、阶跃星辰、智谱等从模型能力产品化切入。"],
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
                        <td><a class="table-product" href="${productUrl(product)}">${productMark(product, "small")}<span><strong>${product.name}</strong><small>${formatValue(product.vendor)}</small></span></a></td>
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

function initRadarMap(canvas, map) {
  if (!canvas) return;
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false });
  if (!gl) return;
  const vertexSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;
  const fragmentSource = `
    precision highp float;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;

    #define TAU 6.28318530718
    #define PI 3.14159265359

    void main() {
      float unit = min(uResolution.x, uResolution.y);
      vec2 st = (gl_FragCoord.xy - uResolution * 0.5) * 2.0 / unit;
      vec2 mouseShift = (uMouse - 0.5) * 0.025;
      st -= mouseShift;

      float dist = length(st);
      float theta = atan(st.y, st.x);
      float mask = 1.0 - smoothstep(0.875, 0.9, dist);
      float ringPhase = abs(fract(dist * 6.0 + 0.5) - 0.5);
      float rings = (1.0 - smoothstep(0.0, 0.017, ringPhase)) * mask;
      float outer = 1.0 - smoothstep(0.0, 0.006, abs(dist - 0.89));
      float crosshair = max(1.0 - smoothstep(0.0, 0.005, abs(st.x)), 1.0 - smoothstep(0.0, 0.005, abs(st.y))) * mask;
      float spokeAngle = abs(fract(theta * 12.0 / TAU + 0.5) - 0.5) * TAU / 12.0;
      float spokes = (1.0 - smoothstep(0.0, 0.006, spokeAngle * dist)) * smoothstep(0.12, 0.2, dist) * mask;
      float ticks = (1.0 - smoothstep(0.0, 0.08, abs(fract(theta * 36.0 / TAU + 0.5) - 0.5))) * smoothstep(0.82, 0.84, dist) * (1.0 - smoothstep(0.88, 0.9, dist));
      float center = 1.0 - smoothstep(0.018, 0.03, dist);

      float sweepAngle = mod(uTime * 0.48, TAU) - PI;
      float delta = mod(theta - sweepAngle + TAU, TAU);
      float beamDistance = min(delta, TAU - delta) * dist;
      float beam = (1.0 - smoothstep(0.0, 0.014, beamDistance)) * mask;
      float trail = exp(-delta * 2.35) * step(delta, 1.35) * mask;

      float structure = rings * 0.62 + outer * 0.16 + crosshair * 0.28 + spokes * 0.35 + ticks * 0.12 + center * 0.85;
      float intensity = structure + trail * 0.54 + beam * 1.05;
      vec3 amber = vec3(1.0, 0.52, 0.16);
      gl_FragColor = vec4(amber * intensity, clamp(intensity * 0.9, 0.0, 0.72));
    }
  `;

  function shader(type, source) {
    const item = gl.createShader(type);
    gl.shaderSource(item, source);
    gl.compileShader(item);
    if (!gl.getShaderParameter(item, gl.COMPILE_STATUS)) {
      gl.deleteShader(item);
      return null;
    }
    return item;
  }

  const vertex = shader(gl.VERTEX_SHADER, vertexSource);
  const fragment = shader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return;
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "position");
  const timeUniform = gl.getUniformLocation(program, "uTime");
  const resolutionUniform = gl.getUniformLocation(program, "uResolution");
  const mouseUniform = gl.getUniformLocation(program, "uMouse");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentMouse = [0.5, 0.5];
  let targetMouse = [0.5, 0.5];

  map.addEventListener("pointermove", (event) => {
    const rect = map.getBoundingClientRect();
    targetMouse = [(event.clientX - rect.left) / rect.width, 1 - (event.clientY - rect.top) / rect.height];
  });
  map.addEventListener("pointerleave", () => {
    targetMouse = [0.5, 0.5];
  });

  function render(time = 0) {
    const density = Math.min(devicePixelRatio, 2);
    const width = Math.round(map.clientWidth * density);
    const height = Math.round(map.clientHeight * density);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    currentMouse[0] += (targetMouse[0] - currentMouse[0]) * 0.035;
    currentMouse[1] += (targetMouse[1] - currentMouse[1]) * 0.035;
    gl.viewport(0, 0, width, height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(timeUniform, time * 0.001);
    gl.uniform2f(resolutionUniform, width, height);
    gl.uniform2f(mouseUniform, currentMouse[0], currentMouse[1]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!reducedMotion) requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function initCompetitionMap() {
  const canvas = $("#competition-map");
  const radar = $("#radar-map");
  const ambient = $("#ambient-map");
  if (!canvas || !ambient) return;
  const map = canvas.parentElement;
  initRadarMap(radar, map);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const hero = ambient.parentElement;
  const ctx = canvas.getContext("2d");
  const actx = ambient.getContext("2d");
  let mx = 0;
  let my = 0;
  let t = 0;
  const centers = [{ x: 0.27, y: 0.35 }, { x: 0.73, y: 0.35 }, { x: 0.35, y: 0.68 }, { x: 0.76, y: 0.68 }];
  const counts = [8, 7, 18, 9];
  const points = counts.flatMap((count, group) =>
    Array.from({ length: count }, (_, index) => ({
      group,
      angle: (index / count) * Math.PI * 2 + Math.random() * 0.45,
      radius: 28 + Math.random() * 62,
      size: 1.5 + Math.random() * 2,
      hot: (group < 3 && index < 3) || (group === 3 && index < 2),
      phase: Math.random() * Math.PI * 2,
    })),
  );
  const streams = Array.from({ length: 30 }, (_, index) => ({ y: 0.1 + Math.random() * 0.78, speed: 0.12 + Math.random() * 0.25, phase: Math.random() * 8, width: 0.25 + Math.random() * 0.8, bright: index < 6 }));

  function resize(target, context, width, height) {
    const density = devicePixelRatio;
    const pixelWidth = Math.round(width * density);
    const pixelHeight = Math.round(height * density);
    if (target.width === pixelWidth && target.height === pixelHeight) return;
    target.width = pixelWidth;
    target.height = pixelHeight;
    context.setTransform(density, 0, 0, density, 0, 0);
  }

  function draw() {
    t += 0.012;
    const width = map.clientWidth;
    const height = map.clientHeight;
    resize(canvas, ctx, width, height);
    ctx.clearRect(0, 0, width, height);
    points.forEach((point) => {
      const center = centers[point.group];
      const cx = center.x * width + mx * (8 + point.group * 2);
      const cy = center.y * height + my * (6 + point.group);
      const wave = Math.sin(t + point.phase) * 3;
      point.x = cx + Math.cos(point.angle) * (point.radius + wave);
      point.y = cy + Math.sin(point.angle) * (point.radius * 0.62 + wave);
    });
    points.forEach((point, index) => {
      points.slice(index + 1).forEach((other) => {
        if (point.group !== other.group) return;
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 82) {
          ctx.strokeStyle = `rgba(255,255,255,${0.09 * (1 - distance / 82)})`;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      });
    });
    [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3]].forEach(([a, b]) => {
      ctx.strokeStyle = "rgba(255,156,59,.1)";
      ctx.setLineDash([2, 8]);
      ctx.beginPath();
      ctx.moveTo(centers[a].x * width, centers[a].y * height);
      ctx.quadraticCurveTo(width * 0.5, height * 0.5, centers[b].x * width, centers[b].y * height);
      ctx.stroke();
      ctx.setLineDash([]);
    });
    points.forEach((point) => {
      ctx.fillStyle = point.hot ? "#ff9c3b" : "rgba(235,232,224,.72)";
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.hot ? point.size + 1.8 : point.size, 0, Math.PI * 2);
      ctx.fill();
      if (point.hot) {
        ctx.strokeStyle = "rgba(255,156,59,.28)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 9 + (Math.sin(t * 3 + point.phase) + 1) * 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    const aw = hero.clientWidth;
    const ah = hero.clientHeight;
    resize(ambient, actx, aw, ah);
    actx.clearRect(0, 0, aw, ah);
    streams.forEach((stream) => {
      actx.beginPath();
      for (let px = -30; px < aw + 30; px += 14) {
        const progress = px / aw;
        const y = stream.y * ah + Math.sin(progress * 5 + stream.phase + t * stream.speed * 12) * 35 + Math.sin(progress * 13 + stream.phase) * 4;
        px === -30 ? actx.moveTo(px, y) : actx.lineTo(px, y);
      }
      actx.strokeStyle = stream.bright ? "rgba(255,156,59,.09)" : "rgba(255,255,255,.025)";
      actx.lineWidth = stream.width;
      actx.stroke();
    });
    requestAnimationFrame(draw);
  }
  map.addEventListener("pointermove", (event) => {
    const rect = map.getBoundingClientRect();
    mx = (event.clientX - rect.left) / rect.width - 0.5;
    my = (event.clientY - rect.top) / rect.height - 0.5;
  });
  draw();
}

// Global star field — vanilla WebGL port of the React Bits <Galaxy /> component (no ogl dependency).
// Rendered as a fixed, full-viewport ambient layer behind all pages, tuned to stay weaker than text.
function initGlobalGalaxy() {
  let canvas = $("#global-galaxy");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "global-galaxy";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);
  }
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false, powerPreference: "low-power" });
  if (!gl) return;

  const vertexShader = `
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
      vUv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;
  const fragmentShader = `
    precision highp float;
    uniform float uTime;
    uniform vec3 uResolution;
    uniform vec2 uFocal;
    uniform vec2 uRotation;
    uniform float uStarSpeed;
    uniform float uDensity;
    uniform float uHueShift;
    uniform float uSpeed;
    uniform vec2 uMouse;
    uniform float uGlowIntensity;
    uniform float uSaturation;
    uniform bool uMouseRepulsion;
    uniform float uTwinkleIntensity;
    uniform float uRotationSpeed;
    uniform float uRepulsionStrength;
    uniform float uMouseActiveFactor;
    uniform float uAutoCenterRepulsion;
    uniform bool uTransparent;
    varying vec2 vUv;

    #define NUM_LAYER 4.0
    #define STAR_COLOR_CUTOFF 0.2
    #define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
    #define PERIOD 3.0

    float Hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float tri(float x) { return abs(fract(x) * 2.0 - 1.0); }
    float tris(float x) { float t = fract(x); return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0)); }
    float trisn(float x) { float t = fract(x); return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0; }
    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }
    float Star(vec2 uv, float flare) {
      float d = length(uv);
      float m = (0.05 * uGlowIntensity) / d;
      float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
      m += rays * flare * uGlowIntensity;
      uv *= MAT45;
      rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
      m += rays * 0.3 * flare * uGlowIntensity;
      m *= smoothstep(1.0, 0.2, d);
      return m;
    }
    vec3 StarLayer(vec2 uv) {
      vec3 col = vec3(0.0);
      vec2 gv = fract(uv) - 0.5;
      vec2 id = floor(uv);
      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          vec2 offset = vec2(float(x), float(y));
          vec2 si = id + vec2(float(x), float(y));
          float seed = Hash21(si);
          float size = fract(seed * 345.32);
          float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
          float flareSize = smoothstep(0.94, 1.0, size) * glossLocal * 0.4;
          float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
          float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
          float grn = min(red, blu) * seed;
          float val = max(max(red, grn), blu);
          // White -> amber tint (no rainbow hue), keeps the field on-brand. uSaturation = how amber.
          vec3 amber = vec3(1.0, 0.74, 0.40);
          vec3 base = mix(vec3(val), amber * val, uSaturation);
          vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;
          float star = Star(gv - offset - pad, flareSize);
          vec3 color = base;
          float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
          twinkle = mix(1.0, twinkle, uTwinkleIntensity);
          star *= twinkle;
          col += star * size * color;
        }
      }
      return col;
    }
    void main() {
      vec2 focalPx = uFocal * uResolution.xy;
      vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;
      vec2 mouseNorm = uMouse - vec2(0.5);
      if (uAutoCenterRepulsion > 0.0) {
        vec2 centerUV = vec2(0.0, 0.0);
        float centerDist = length(uv - centerUV);
        vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
        uv += repulsion * 0.05;
      } else if (uMouseRepulsion) {
        vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
        float mouseDist = length(uv - mousePosUV);
        vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
        uv += repulsion * 0.05 * uMouseActiveFactor;
      } else {
        vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
        uv += mouseOffset;
      }
      float autoRotAngle = uTime * uRotationSpeed;
      mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
      uv = autoRot * uv;
      uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;
      vec3 col = vec3(0.0);
      for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
        float depth = fract(i + uStarSpeed * uSpeed);
        float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
        float fade = depth * smoothstep(1.0, 0.9, depth);
        col += StarLayer(uv * scale + i * 453.32) * fade;
      }
      if (uTransparent) {
        float alpha = length(col);
        alpha = smoothstep(0.0, 0.3, alpha);
        alpha = min(alpha, 1.0);
        gl_FragColor = vec4(col, alpha);
      } else {
        gl_FragColor = vec4(col, 1.0);
      }
    }
  `;

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }
  const vertex = compile(gl.VERTEX_SHADER, vertexShader);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentShader);
  if (!vertex || !fragment) return;
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const u = (name) => gl.getUniformLocation(program, name);
  const uTime = u("uTime");
  const uResolution = u("uResolution");
  const uStarSpeed = u("uStarSpeed");
  const uMouse = u("uMouse");
  const uMouseActiveFactor = u("uMouseActiveFactor");

  // Tuned config (medium visibility, warm amber tint, weaker than text — per DESIGN.md).
  const starSpeed = 0.4;
  gl.uniform2f(u("uFocal"), 0.5, 0.5);
  gl.uniform2f(u("uRotation"), 1.0, 0.0);
  gl.uniform1f(u("uDensity"), 0.9);
  gl.uniform1f(u("uHueShift"), 40.0);
  gl.uniform1f(u("uSpeed"), 0.6);
  gl.uniform1f(u("uGlowIntensity"), 0.32);
  gl.uniform1f(u("uSaturation"), 0.55);
  gl.uniform1i(u("uMouseRepulsion"), 0);
  gl.uniform1f(u("uTwinkleIntensity"), 0.45);
  gl.uniform1f(u("uRotationSpeed"), 0.04);
  gl.uniform1f(u("uRepulsionStrength"), 2.0);
  gl.uniform1f(u("uAutoCenterRepulsion"), 0.0);
  gl.uniform1i(u("uTransparent"), 1);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);

  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: 0, targetActive: 0 };
  let running = true;
  let frame;

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 1.25);
    const width = Math.max(1, Math.floor(innerWidth * ratio));
    const height = Math.max(1, Math.floor(innerHeight * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  }

  function draw(now = 0) {
    resize();
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;
    pointer.active += (pointer.targetActive - pointer.active) * 0.05;
    const t = prefersReducedMotion ? 16000 : now;
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uTime, t * 0.001);
    gl.uniform1f(uStarSpeed, (t * 0.001 * starSpeed) / 10.0);
    gl.uniform3f(uResolution, canvas.width, canvas.height, canvas.width / canvas.height);
    gl.uniform2f(uMouse, pointer.x, pointer.y);
    gl.uniform1f(uMouseActiveFactor, pointer.active);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (running && !prefersReducedMotion) frame = requestAnimationFrame(draw);
  }

  addEventListener("resize", resize, false);
  addEventListener("mousemove", (event) => {
    pointer.tx = event.clientX / innerWidth;
    pointer.ty = 1 - event.clientY / innerHeight;
    pointer.targetActive = 1;
  });
  document.addEventListener("mouseleave", () => { pointer.targetActive = 0; });
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    cancelAnimationFrame(frame);
    if (running && !prefersReducedMotion) frame = requestAnimationFrame(draw);
  });
  draw();
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
    <article class="product-card spotlight-surface" data-reveal data-reveal-y="10">
      <div class="card-top">
        <div class="product-identity">
          ${productMark(product)}
          <div>
            <h3><a href="${productUrl(product)}">${product.name}</a></h3>
            <div class="product-meta">${formatValue(product.vendor)}<span>${formatValue(product.launchDate, "上线时间未标明")}</span></div>
          </div>
        </div>
        ${tag(product.type, tone)}
      </div>
      <p>${product.summary}</p>
      <div class="tag-row">
        ${tag(formatValue(product.group), "gold")}
        ${product.capabilities.slice(0, 3).map((item) => tag(item, "teal")).join("")}
      </div>
      <div class="card-footer">
        <a class="text-link" href="${productUrl(product)}">查看详情</a>
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
    <section class="page-intro">
      <div class="wrap intro-grid" data-reveal data-reveal-y="14">
        <div><p class="section-label">产品索引</p><h1>浏览与比较 Agent 产品</h1></div>
        <p class="lead">共 ${products.length} 个条目，按产品类型、厂商分类和能力标签筛选，详情页保留官网、定价与公开资料。</p>
      </div>
    </section>
    <section>
      <div class="wrap filters-layout">
        <aside class="filter-panel spotlight-surface" data-reveal data-reveal-x="-12">
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
          <button id="reset-filters" class="quiet-button" type="button">清除筛选</button>
        </aside>
        <main>
          <div class="section-head">
            <div><p class="section-label">筛选结果</p><h2 id="result-count" aria-live="polite">${products.length} 个产品</h2></div>
          </div>
          <div id="active-filters" class="active-filters" aria-live="polite"></div>
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
  const reset = $("#reset-filters");
  const activeFilters = $("#active-filters");

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
    const render = () => {
      grid.innerHTML = filtered.length
        ? renderGroupedProducts(filtered)
        : `<div class="empty-state"><strong>没有匹配的产品</strong><span>调整搜索词或清除筛选后再试。</span></div>`;
      activeFilters.innerHTML = [
        q ? `<span>搜索：${escapeHtml(search.value.trim())}</span>` : "",
        selectedType ? `<span>${selectedType}</span>` : "",
        selectedGroup ? `<span>${selectedGroup}</span>` : "",
        selectedCapability ? `<span>${selectedCapability}</span>` : "",
      ].join("");
      initSpotlightSurfaces(grid);
      initAnimatedContent(grid);
    };
    render();
  }

  $("#type-filter").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    $("#type-filter").querySelectorAll("button").forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
    selectedType = event.target.dataset.value;
    applyFilters();
  });
  [search, group, capability].forEach((control) => control.addEventListener("input", applyFilters));
  reset.addEventListener("click", () => {
    search.value = "";
    group.value = "";
    capability.value = "";
    selectedType = "";
    $("#type-filter").querySelectorAll("button").forEach((button, index) => button.classList.toggle("active", index === 0));
    applyFilters();
    search.focus();
  });
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
    <section class="page-intro">
      <div class="wrap detail-hero" data-reveal data-reveal-y="14">
        <div class="detail-title">
          <p class="breadcrumb"><a href="products.html">产品索引</a><span>/</span>${product.type}<span>/</span>${formatValue(product.group)}</p>
          <div class="detail-heading-row">${productMark(product, "large")}<h1>${product.name}</h1></div>
          <p>${product.summary}</p>
          <div class="hero-actions">
            <a class="ghost-button" href="products.html">返回矩阵</a>
            ${externalLink(product.website, "访问官网")}
            ${externalLink(product.pricing, "查看定价")}
          </div>
        </div>
        <aside class="fact-panel spotlight-surface">
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
          <section id="capabilities" class="content-section" data-reveal data-reveal-y="16">
            <h2>核心能力</h2>
            ${product.featureBullets.length ? `<ul class="bullet-list">${product.featureBullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>${formatValue(product.features, "待补充")}</p>`}
          </section>
          <section id="ecosystem" class="content-section" data-reveal data-reveal-y="16">
            <h2>生态与入口</h2>
            ${product.ecosystemBullets.length ? `<ul class="bullet-list">${product.ecosystemBullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>${formatValue(product.ecosystem, "待补充")}</p>`}
          </section>
          <section id="updates" class="content-section" data-reveal data-reveal-y="16">
            <h2>重大更新时间线</h2>
            ${
              productUpdates.length
                ? `<div class="timeline-list">${productUpdates.map((item) => timelineCard(item, false)).join("")}</div>`
                : `<p>暂无经过审核的重大更新。原始调研记录仍保留在下方。</p>`
            }
          </section>
          <section id="raw-research" class="content-section" data-reveal data-reveal-y="16">
            <details>
              <summary>查看原始调研更新记录</summary>
              <div class="legacy-updates">
                ${product.updateBullets.length ? `<ul class="bullet-list">${product.updateBullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>${formatValue(product.updates, "暂无整理出的更新记录")}</p>`}
              </div>
            </details>
          </section>
        </main>
        <aside class="side-stack">
          <nav class="side-panel detail-outline" aria-label="详情页目录" data-reveal data-reveal-x="12">
            <h3>研究档案</h3>
            <a href="#capabilities"><span>01</span>核心能力</a>
            <a href="#ecosystem"><span>02</span>生态与入口</a>
            <a href="#updates"><span>03</span>重大动态</a>
            <a href="#raw-research"><span>04</span>原始记录</a>
          </nav>
          <section class="side-panel spotlight-surface" data-reveal data-reveal-x="12">
            <h3>能力标签</h3>
            <div class="tag-row" style="margin-top:12px">
              ${product.capabilities.map((item) => tag(item, "teal")).join("") || tag("待补充")}
            </div>
          </section>
          <section class="side-panel spotlight-surface" data-reveal data-reveal-x="12">
            <h3>相关产品</h3>
            <div class="cluster-list" style="margin-top:12px">
              ${related
                .map(
                  (item) => `
                    <a class="cluster-item" href="${productUrl(item)}">
                      ${productMark(item, "small")}
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
    <article class="timeline-card scroll-focus spotlight-surface">
      <div class="timeline-date">${formatDate(item.date)}</div>
      <div class="timeline-body">
        <div class="timeline-product-line">
          ${product ? productMark(product, "small") : ""}
          <div class="tag-row">
            ${tag(item.category, "teal")}
            ${showProduct && product ? tag(product.name, "gold") : ""}
          </div>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="impact-note"><strong>为什么值得收录</strong><span>${item.impact}</span></div>
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
    <section class="page-intro">
      <div class="wrap intro-grid timeline-intro" data-reveal data-reveal-y="14">
        <div><p class="section-label">重大动态</p><h1>过滤噪音，只留下改变判断的事件</h1></div>
        <p class="lead">只收录会改变产品定位、核心能力、商业模式或行业格局的事件。普通日常更新不进入此时间线。</p>
        <div class="stats-row compact-stats">
          <div class="stat"><strong data-count="${majorUpdates.length}">${majorUpdates.length}</strong><span>已审核重大事件</span></div>
          <div class="stat"><strong data-count="${new Set(majorUpdates.map((item) => item.productSlug)).size}">${new Set(majorUpdates.map((item) => item.productSlug)).size}</strong><span>涉及产品</span></div>
          <div class="stat"><strong data-count="${categories.length}">${categories.length}</strong><span>事件类别</span></div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap timeline-layout">
        <aside class="filter-panel spotlight-surface" data-reveal data-reveal-x="-12">
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
          <div class="section-head"><div><p class="section-label">已审核事件</p><h2 id="timeline-count" aria-live="polite">${majorUpdates.length} 条重大动态</h2></div></div>
          <div id="timeline-list" class="timeline-list timeline-stack"></div>
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
      : `<div class="empty-state"><strong>没有匹配的重大动态</strong><span>调整搜索词或事件类别后再试。</span></div>`;
    initScrollFocus(list);
    initSpotlightSurfaces(list);
  }

  [search, category].forEach((control) => control.addEventListener("input", applyTimelineFilters));
  applyTimelineFilters();
}

function initCountUp() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const formatter = new Intl.NumberFormat("en-US");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.dataset.count);
        const pad = Number(element.dataset.pad || 0);
        const start = performance.now();
        const duration = 1050;
        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const value = Math.round(target * eased);
          element.textContent = formatter.format(value).padStart(pad, "0");
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(element);
      });
    },
    { threshold: 0.45 },
  );
  counters.forEach((counter) => observer.observe(counter));
}

function initSplitText() {
  const heading = $(".split-heading");
  if (!heading || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  heading.querySelectorAll(":scope > span").forEach((segment, index) => {
    segment.style.setProperty("--split-delay", `${index * 90}ms`);
  });
  requestAnimationFrame(() => heading.classList.add("split-visible"));
}

function initAnimatedContent(root = document) {
  const elements = root.querySelectorAll("[data-reveal]:not(.reveal-visible)");
  if (!elements.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  elements.forEach((element) => {
    element.style.setProperty("--reveal-x", `${element.dataset.revealX || 0}px`);
    element.style.setProperty("--reveal-y", `${element.dataset.revealY || 14}px`);
    element.style.setProperty("--reveal-delay", `${element.dataset.revealDelay || 0}ms`);
  });
  document.documentElement.classList.add("motion-enabled");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );
  elements.forEach((element) => observer.observe(element));
}

function initNavGlider() {
  const nav = $(".nav-links");
  const active = $(".nav-links a.active");
  if (!nav || !active) return;
  function position() {
    nav.style.setProperty("--nav-x", `${active.offsetLeft}px`);
    nav.style.setProperty("--nav-width", `${active.offsetWidth}px`);
  }
  requestAnimationFrame(position);
  addEventListener("resize", position, { passive: true });
}

function initPageProgress() {
  const bar = $(".page-progress i");
  if (!bar) return;
  function update() {
    const distance = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${distance > 0 ? Math.min(scrollY / distance, 1) : 0})`;
  }
  update();
  addEventListener("scroll", update, { passive: true });
}

function initSpotlightSurfaces(root = document) {
  if (matchMedia("(pointer: coarse)").matches) return;
  root.querySelectorAll(".spotlight-surface:not([data-spotlight-ready])").forEach((surface) => {
    surface.dataset.spotlightReady = "true";
    surface.addEventListener("pointermove", (event) => {
      const rect = surface.getBoundingClientRect();
      surface.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      surface.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    });
  });
}

function initScrollFocus(root = document) {
  const items = root.querySelectorAll(".scroll-focus");
  if (!items.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-focused", entry.isIntersecting));
    },
    { threshold: 0.58 },
  );
  items.forEach((item) => observer.observe(item));
}

renderHeader();
renderHome();
renderProducts();
renderProductDetail();
renderTimeline();
initGlobalGalaxy();
initCompetitionMap();
initCountUp();
initSplitText();
initAnimatedContent();
initNavGlider();
initPageProgress();
initSpotlightSurfaces();
initScrollFocus();
