/* Fundo animado do Hero — port em JS puro do AnimatedGradient (Spell UI), que usa o shader Warp do Paper Design (WebGL).
   Uso: <div class="hero-gradient" data-hero-gradient data-preset="Prism" aria-hidden="true"></div>
   Valores baseados nos padrões documentados do componente (proportion 35, softness 100, distortion 12, swirl 80,
   swirlIterations 10, shape Checks, shapeSize 10 → escala 0–1 do Paper), com cores da identidade Kelvra. */
(function () {
  const host = document.querySelector("[data-hero-gradient]"), P = window.PaperShaders;
  if (!host || !P) return; // sem WebGL/shader: o Hero mantém o fundo CSS de reserva
  const PRESETS = {
    Prism: { colors: ["#05080D", "#1F3A5F", "#152841", "#FF6B2C"], proportion: 0.35, softness: 1, distortion: 0.12, swirl: 0.8,
             swirlIterations: 10, shape: "checks", shapeScale: 0.1, scale: 1, rotation: 0, speed: 0.5 }
  };
  const cfg = PRESETS[host.dataset.preset] || PRESETS.Prism;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const tex = P.getShaderNoiseTexture();
  const ready = tex.complete && tex.naturalWidth ? Promise.resolve() : new Promise(r => { tex.onload = r; tex.onerror = r; });
  ready.then(() => {
    const uniforms = {
      u_colors: cfg.colors.map(P.getShaderColorFromString), u_colorsCount: cfg.colors.length,
      u_proportion: cfg.proportion, u_softness: cfg.softness, u_distortion: cfg.distortion, u_swirl: cfg.swirl,
      u_swirlIterations: cfg.swirlIterations, u_shapeScale: cfg.shapeScale, u_shape: P.WarpPatterns[cfg.shape], u_noiseTexture: tex,
      u_scale: cfg.scale, u_rotation: cfg.rotation, u_fit: P.ShaderFitOptions.none, u_offsetX: 0, u_offsetY: 0,
      u_originX: 0.5, u_originY: 0.5, u_worldWidth: 0, u_worldHeight: 0
    };
    let mount;
    try {
      // velocidade 0 com movimento reduzido (quadro estático); resolução limitada (~1,4 MP) para poupar GPU no mobile
      mount = new P.ShaderMount(host, P.warpFragmentShader, uniforms, {}, reduce.matches ? 0 : cfg.speed, 6000, 1, 1280 * 720 * 1.5);
    } catch (e) { return; }
    host.classList.add("is-ready"); // a pausa fora da tela é feita pelo próprio ShaderMount
    const onChange = () => mount.setSpeed(reduce.matches ? 0 : cfg.speed);
    reduce.addEventListener ? reduce.addEventListener("change", onChange) : reduce.addListener(onChange);
  });
})();
