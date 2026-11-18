/* BlurReveal (equivalente ao do Spell UI, em JS puro): o texto passa de desfocado para nítido, palavra por palavra.
   Uso: <div data-blur-group> com filhos (ex.: cards); dentro de cada filho, os elementos [data-blur] são revelados em sequência.
   Cada filho entra com um pequeno atraso em relação ao anterior. Dispara uma única vez, ao entrar na tela. */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window) || !("animate" in Element.prototype)) return; // texto permanece normal
  const CFG = { blur: 10, rise: 10, duration: 700, wordStagger: 28, unitStagger: 180, ease: "cubic-bezier(.22,1,.36,1)", threshold: 0.25 };
  const split = el => {
    const words = el.textContent.trim().split(/\s+/); el.textContent = "";
    words.forEach((w, i) => { const s = document.createElement("span"); s.className = "br-w"; s.textContent = w; el.append(s); if (i < words.length - 1) el.append(" "); });
    el.classList.add("br-ready");
  };
  const reveal = group => [...group.children].forEach((unit, u) => {
    let n = 0;
    unit.querySelectorAll("[data-blur]").forEach(el => {
      el.querySelectorAll(".br-w").forEach(w => w.animate(
        [{ opacity: 0, filter: `blur(${CFG.blur}px)`, transform: `translateY(${CFG.rise}px)` }, { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" }],
        { duration: CFG.duration, delay: u * CFG.unitStagger + n++ * CFG.wordStagger, easing: CFG.ease, fill: "backwards" }));
      el.classList.add("br-in");
    });
  });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } }), { threshold: CFG.threshold });
  document.querySelectorAll("[data-blur-group]").forEach(g => { g.querySelectorAll("[data-blur]").forEach(split); io.observe(g); });
})();
