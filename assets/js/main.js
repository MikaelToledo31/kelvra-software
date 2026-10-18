(function () {
  const C = window.KELVRA, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const wa = C.whatsappNumber ? `https://wa.me/${C.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(C.whatsappMessage)}` : "#contato";
  if (!C.whatsappNumber) console.warn("Kelvra: defina whatsappNumber em assets/js/config.js");
  $$("[data-wa]").forEach(a => { a.href = wa; if (C.whatsappNumber) { a.target = "_blank"; a.rel = "noopener noreferrer"; } });
  const ig = $("[data-ig]"); if (C.instagramUrl) { ig.href = C.instagramUrl; ig.hidden = false; }
  $$("[data-founder]").forEach(e => e.textContent = C.founderName);
  $("#year").textContent = new Date().getFullYear();

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  $("#projectList").innerHTML = C.projects.map(p => `
    <div class="swiper-slide"><article class="card project">
      <div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="Prévia do projeto ${esc(p.name)}" loading="lazy">` : `<span>Imagem do projeto</span>`}</div>
      <p class="tag">${esc(p.category)}</p><h3>${esc(p.name)}</h3><p class="muted">${esc(p.description)}</p>
      ${p.url ? `<a class="link" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">Ver projeto →</a>` : `<span class="muted small">Demonstração</span>`}
    </article></div>`).join("");

  $("#testimonialList").innerHTML = C.testimonials.length
    ? C.testimonials.map(x => `<blockquote class="card"><p>“${esc(x.text)}”</p><footer>${esc(x.name)} · <span class="muted">${esc(x.role)}</span></footer></blockquote>`).join("")
    : `<div class="card empty"><p>Em breve, depoimentos reais de clientes aparecerão aqui.</p></div>`;

  const btn = $(".menu-btn"), nav = $("#nav");
  const close = () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => btn.setAttribute("aria-expanded", nav.classList.toggle("open")));
  $$("#nav a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => e.key === "Escape" && close());

  const hd = $(".site-header"), onScroll = () => hd.classList.toggle("scrolled", scrollY > 10);
  onScroll(); addEventListener("scroll", onScroll, { passive: true });
  const links = $$("#nav a[href^='#']");
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.hash === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => io.observe(s));

  // Destaque animado do título: dispara uma única vez ao entrar na tela
  const hls = $$("[data-hl]");
  if ("IntersectionObserver" in window && hls.length) {
    const ho = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { $$("[data-hl]", e.target).forEach(h => h.classList.add("in")); ho.unobserve(e.target); } }), { threshold: .6 });
    ho.observe($("#porqueTitle"));
  } else hls.forEach(h => h.classList.add("in"));
})();
