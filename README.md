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
