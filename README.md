# amoris.in

Website for **Amoris** — a founder-led AI GTM practice run by Praveen Shahi.

Astro 5 static site, Tailwind 4. Originally scaffolded from the Stardrive boilerplate; the boilerplate's setup flow has been removed.

## Develop

```bash
npm install
npm run dev
```

Local dev server at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Static output goes to `dist/`.

## Check

```bash
npm run check
```

Runs `astro check`, `tsc --noEmit`, ESLint and Prettier.

## Deployment

`amoris.in` serves from **nginx on a VM**. Deployment is manual and owned by the founder — there is no deploy workflow in this repo, and the bundled Cloudflare worker config is not what serves production.

Do not deploy from an agent session. Build locally and hand over for review.

## Structure

```
src/
├── pages/          # routes: /, products, pricing, architecture, founder,
│                   #   data-and-ip, faq, contact, blog/*, legal-notice,
│                   #   privacy-policy, 404
├── components/
│   ├── home/       # home-content.astro — all homepage sections
│   ├── layout/     # header, footer, nav, hero, references
│   ├── blog/ faq/ head/ structured/ promo/
│   └── architecture-diagram.astro
├── content/
│   ├── articles/en/
│   └── faq-answers/en/
├── i18n/  styles/  utils/  images/
docs/rework/        # implementation brief and pre-work deliverables
public/
├── intel-echo/     # live, unlinked from nav
└── intel-echo-gtm/ # live, unlinked from nav
```

## Before writing copy

Read [AGENTS.md](./AGENTS.md). Copy is governed by a voice specification and a set of locked positioning decisions.
