# KELVRA — Site institucional

Landing page da KELVRA, agência de desenvolvimento web. Projeto estático (React + TypeScript + Vite), publicado no GitHub Pages.

## Tecnologias

React 18, TypeScript, Vite 6, Lucide React (ícones), ESLint 9 e Prettier. Estilos em CSS puro (`src/styles`); animações com CSS e `IntersectionObserver`, sem bibliotecas extras.

## Requisitos

Node.js 20 ou superior (o workflow usa Node 22) e npm.

## Primeiros passos

```bash
git clone <URL-DO-REPOSITORIO>
cd kelvra
npm install        # gera o package-lock.json: faça commit dele
npm run format     # padroniza o código com Prettier (recomendado na primeira vez)
npm run dev        # desenvolvimento local
```

## Comandos

| Comando                | O que faz                                      |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento                    |
| `npm run build`        | Verifica tipos e gera o build em `dist/`       |
| `npm run preview`      | Serve o build de produção localmente           |
| `npm run lint`         | ESLint                                         |
| `npm run typecheck`    | Verificação de tipos (`tsc -b`)                |
| `npm run format`       | Formata o código                               |
| `npm run format:check` | Confere a formatação sem alterar arquivos      |

Para testar a versão de produção: `npm run build && npm run preview`. Para simular o caminho-base de um repositório de projeto: `VITE_BASE_PATH=/nome-do-repo/ npm run build && npm run preview`.

## Configuração

Tudo o que muda fica em `src/config/site.ts`:

- **WhatsApp:** `whatsappNumber`, somente dígitos com país e DDD. Enquanto estiver vazio, os botões de contato aparecem desabilitados. Mensagens pré-preenchidas em `messages`.
- **Instagram:** `instagramUrl`. Vazio = ícone oculto.
- **Desenvolvedor:** `developerName`, `developerBio` e `developerPhoto`.
- **Projetos:** `src/data/projects.ts`. Coloque as imagens em `src/assets/images/projects/`, importe-as no arquivo e use o campo `image`. Sem `url`, o card abre o WhatsApp. Marque `isDemo: false` nos projetos reais.
- **Depoimentos:** `src/data/testimonials.ts` (os atuais são exemplos; use `isDemo: false` só em depoimentos reais e autorizados).
- **Logo:** `src/assets/images/logo/logo-kelvra.png`. Para trocar, substitua o arquivo mantendo o nome (ajuste `width`/`height` em `Logo.tsx` se a proporção mudar). A logo é preta e fica sobre uma placa clara (`.logo` em `globals.css`).
- **Fotos e imagens:** hoje o notebook, o celular e os cards usam ilustrações vetoriais (`src/components/art`). Substitua por imagens reais quando houver.

## Caminho-base (Vite) e GitHub Pages

`vite.config.ts` lê a variável `VITE_BASE_PATH` (padrão `/`).

- Repositório de projeto (`https://usuario.github.io/repo/`): base `/repo/`.
- Domínio próprio ou `usuario.github.io`: base `/`.

No workflow, a base é definida automaticamente: `/<nome-do-repo>/`, ou `/` se o repositório terminar em `.github.io`. Para domínio próprio, crie a variável de repositório `VITE_BASE_PATH` com o valor `/` (Settings → Secrets and variables → Actions → Variables).

### Publicar

1. Rode `npm install` localmente e faça commit do `package-lock.json` (o workflow exige o arquivo e usa `npm ci`).
2. Envie o projeto para o GitHub (branch `main`; se for outra, ajuste `.github/workflows/deploy.yml`).
3. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. A cada push na `main` (ou execução manual em **Actions**), o workflow roda lint, typecheck e build, e publica a pasta `dist`.

## Antes do lançamento

- [ ] Número do WhatsApp
- [ ] Link do Instagram
- [ ] Nome, bio e foto do proprietário
- [ ] Projetos reais (imagens e links) e depoimentos reais
- [ ] Imagens reais dos mockups do hero
- [ ] `siteUrl` e meta tags Open Graph (imagem de compartilhamento) em `index.html`
- [ ] Fontes: o site carrega Manrope e Caveat pelo Google Fonts; para hospedar localmente, coloque os arquivos em `src/assets/fonts`
