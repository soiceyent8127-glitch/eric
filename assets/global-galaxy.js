// Shared global star field — single source of truth for the homepage (cockpit) and all other pages.
// Vanilla WebGL port of the React Bits <Galaxy /> component (no ogl dependency).
// Loaded before app.js on app pages (app.js calls initGlobalGalaxy); called by cockpit.js on the homepage.
function initGlobalGalaxy() {
  let canvas = document.querySelector("#global-galaxy");
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
