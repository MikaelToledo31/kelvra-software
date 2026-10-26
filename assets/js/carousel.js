/* Carrossel de projetos — Swiper (efeito Coverflow suave). Os slides são gerados em main.js a partir de config.js. */
(function () {
  const el = document.getElementById("projSwiper");
  if (!el || typeof Swiper === "undefined") return; // biblioteca ausente: não inicializa
  const count = el.querySelectorAll(".swiper-slide").length;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const loop = count >= 6; // loop infinito só quando há projetos suficientes para o efeito não repetir cards
  window.kelvraProjetos = new Swiper(el, {
    effect: "coverflow", touchEventsTarget: "container", grabCursor: true, centeredSlides: true, slideToClickedSlide: true,
    loop, initialSlide: loop ? 0 : Math.floor((count - 1) / 2), speed: reduce ? 0 : 600,
    keyboard: { enabled: true, onlyInViewport: true },
    // Referência: rotate 0 · stretch 0 · depth 100 · modifier 2.5 · slidesPerView 2.43 · spaceBetween 40 — adaptados por breakpoint
    coverflowEffect: { rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false },
    slidesPerView: 1.25, spaceBetween: 16,
    breakpoints: { 600: { slidesPerView: 1.7, spaceBetween: 24 }, 900: { slidesPerView: 2.2, spaceBetween: 32 }, 1200: { slidesPerView: 2.43, spaceBetween: 40 } },
    pagination: { el: "#projSwiper .swiper-pagination", clickable: true },
    navigation: { prevEl: "#projPrev", nextEl: "#projNext" },
    a11y: { prevSlideMessage: "Projeto anterior", nextSlideMessage: "Próximo projeto", paginationBulletMessage: "Ir para o projeto {{index}}" }
  });
})();
