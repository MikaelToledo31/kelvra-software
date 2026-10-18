/* Animação de entrada no scroll (equivalente ao AnimatedContent) — JS puro.
   Uso: <div data-animate> → anima cada filho direto, em sequência.
        data-animate="self" → anima o próprio elemento.
   Opções por elemento: data-distance (px), data-delay (segundos).        */
(function () {
  const CFG = { distance: 100, duration: 800, stagger: 80, ease: "cubic-bezier(.215,.61,.355,1)", threshold: 0.1 }; // ease ≈ power3.out
  const root = document.documentElement;
  const els = [...document.querySelectorAll("[data-animate]")];
  window.__kelvraAnim = true; // sinaliza ao fallback do <head> que o script carregou
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window) || !("animate" in Element.prototype)) {
    root.classList.remove("js"); els.forEach(e => e.classList.add("in-view")); return;
  }
  const run = c => {
    const items = c.dataset.animate === "self" ? [c] : [...c.children];
    const d = +(c.dataset.distance || CFG.distance), base = +(c.dataset.delay || 0) * 1000;
    items.forEach((el, i) => el.animate(
      [{ opacity: 0, transform: `translateY(${d}px)` }, { opacity: 1, transform: "translateY(0)" }],
      { duration: CFG.duration, delay: base + i * CFG.stagger, easing: CFG.ease, fill: "backwards" }));
    c.classList.add("in-view");
  };
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: CFG.threshold });
  els.forEach(e => io.observe(e)); // cada elemento anima só na primeira vez
})();
