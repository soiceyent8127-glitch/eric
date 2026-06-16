function initFloatingLines() {
  const roots = Array.from(document.querySelectorAll("[data-floating-lines]"));
  if (!roots.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  roots.forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = "true";

    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    root.appendChild(canvas);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const pointer = {
      x: -1000,
      y: -1000,
      tx: -1000,
      ty: -1000,
      active: 0,
      targetActive: 0,
    };
    let width = 1;
    let height = 1;
    let ratio = 1;
    let frame = 0;
    let start = performance.now();

    function resize() {
      const rect = root.getBoundingClientRect();
      ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function drawWave({ count, baseY, gap, amp, speed, drift, alpha, widthScale }) {
      const time = reduce ? 16 : (performance.now() - start) / 1000;
      for (let i = 0; i < count; i += 1) {
        const y0 = baseY + (i - count / 2) * gap;
        const phase = i * 0.46 + time * speed;
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(242, 170, 72, ${alpha * 0.1})`);
        gradient.addColorStop(0.5, `rgba(245, 214, 160, ${alpha})`);
        gradient.addColorStop(1, `rgba(199, 123, 42, ${alpha * 0.18})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.72 + (i % 3) * 0.16;
        ctx.beginPath();

        const steps = 64;
        for (let s = 0; s <= steps; s += 1) {
          const progress = s / steps;
          const x = progress * width * widthScale - width * (widthScale - 1) * 0.5;
          const wave =
            Math.sin(progress * Math.PI * 2.2 + phase) * amp +
            Math.sin(progress * Math.PI * 5.4 + phase * 0.72) * amp * 0.22;
          const dx = x - pointer.x;
          const dy = y0 - pointer.y;
          const influence = Math.exp(-(dx * dx + dy * dy) / 22000) * pointer.active;
          const bend = (pointer.y - y0) * influence * -0.18;
          const parallax = (pointer.x / Math.max(width, 1) - 0.5) * drift * pointer.active;
          const y = y0 + wave + bend + parallax;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    function draw(now) {
      pointer.x += (pointer.tx - pointer.x) * 0.055;
      pointer.y += (pointer.ty - pointer.y) * 0.055;
      pointer.active += (pointer.targetActive - pointer.active) * 0.045;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";
      drawWave({ count: 9, baseY: height * 0.7, gap: 8, amp: 15, speed: 0.42, drift: 18, alpha: 0.28, widthScale: 1.2 });
      drawWave({ count: 13, baseY: height * 0.46, gap: 6, amp: 10, speed: 0.28, drift: -12, alpha: 0.18, widthScale: 1.1 });
      ctx.globalCompositeOperation = "source-over";

      if (!reduce) frame = requestAnimationFrame(draw);
    }

    function move(event) {
      const rect = root.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
      pointer.targetActive = 1;
    }

    function leave() {
      pointer.targetActive = 0;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(root);
    resize();
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);
    draw();

    document.addEventListener("visibilitychange", () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && !reduce) {
        start = performance.now() - ((performance.now() - start) % 60000);
        frame = requestAnimationFrame(draw);
      }
    });
  });
}
