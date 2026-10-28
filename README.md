# Kelvra Software — site institucional (estático)
HTML/CSS/JS puro, sem build. Funciona direto no GitHub Pages.
## Executar localmente
Abra `index.html` no navegador (ou `python3 -m http.server`).
## Publicar
1. Envie todos os arquivos para a raiz do repositório.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Domínio próprio: adicione um arquivo `CNAME` com o domínio e configure o DNS.
## Configurar (tudo em `assets/js/config.js`)
WhatsApp (formato `5516999999999`), Instagram, nome do fundador, projetos e depoimentos reais.
## Pendências
- Trocar `SEU-DOMINIO.com.br` em `index.html`, `robots.txt` e `sitemap.xml`.
- Adicionar logo oficial, foto do fundador, imagens dos projetos e `og-image.jpg`.
- Cores centralizadas em `:root` de `assets/css/style.css`.
## Animações de entrada no scroll
`assets/js/animate.js` (JS puro, sem bibliotecas). Marque um bloco com `data-animate` para animar seus filhos em sequência
(ou `data-animate="self"` para animar o próprio elemento). Opções: `data-distance` (px) e `data-delay` (s).
Parâmetros globais (distância 100px, duração 0,8s, intervalo 0,08s, gatilho 10%) ficam no objeto `CFG` do arquivo.
Respeita `prefers-reduced-motion` e não esconde conteúdo se o JS falhar.
## Carrossel de projetos
Biblioteca: **Swiper 11 (MIT)**, incluída localmente em `assets/vendor/swiper/` (sem CDN, funciona no GitHub Pages).
Slides gerados a partir de `projects` em `assets/js/config.js` (campo `image` = captura do site; `url` vazia = sem link).
Parâmetros do Coverflow e breakpoints em `assets/js/carousel.js`. O loop infinito é ativado com 6 ou mais projetos.
## Projeto Rede Prime (Projeto 2)
Cadastrado em `assets/js/config.js` (2ª posição de `projects`).
Prévia: `assets/images/rede-prime-preview.webp` (808×505, recorte 16:10 do topo da captura real enviada).
A captura original, sem alterações, está em `assets/images/originals/rede-prime-original.png`.
## Logo
`assets/images/kelvra-logo.png` (296×407, PNG transparente, arte branca) é usada no header e no footer (`index.html`, classe `.logo`; tamanhos em `assets/css/style.css`).
É a logo enviada, apenas sem as margens transparentes; a original intacta está em `assets/images/originals/kelvra-logo-original.png`.
## Favicon
Imagem oficial enviada: `assets/images/originals/kelvra-favicon-original.ico` ("K" branco, fundo transparente, 6 tamanhos de 16 a 256 px).
`favicon.ico` (raiz) é essa mesma imagem; `favicon-16x16.png` e `favicon-32x32.png` são os quadros do próprio .ico, extraídos sem recodificar; `apple-touch-icon.png` (180×180) é o quadro de 256 px reduzido.
Tags no `<head>` do `index.html` com `?v=3` (cache). Ao trocar o ícone de novo, substitua os arquivos e incremente o `v`.
## Projeto Raquiel Studio Fitness
Cadastrado em `assets/js/config.js` (4ª posição). Prévia: `assets/images/raquiel-studio-fitness-preview.webp` (1200×750, recorte central 16:10 da captura enviada; original sem alterações em `assets/images/originals/raquiel-studio-fitness-original.png`).
