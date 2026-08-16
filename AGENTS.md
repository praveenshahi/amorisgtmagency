# AGENTS.md — Amoris (amoris.in)

Read this before touching a file. Then read [`docs/PROJECT.md`](./docs/PROJECT.md) before writing a single line of copy.

## Orientation

| | |
|---|---|
| What | The website for **Amoris**, a founder-led AI GTM agency. One person: Praveen Shahi. No team. |
| Repo | `github.com/praveenshahi/amorisgtmagency`, branch `main` |
| Stack | Astro 5 (`output: 'static'`), Tailwind 4 |
| Live | `amoris.in` — nginx on a GCP VM, document root `/var/www/amoris/dist` |

```bash
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the build
npm run check    # astro check + tsc + eslint + prettier
```

## The three documents that matter

| File | What it settles |
|---|---|
| [`docs/PROJECT.md`](./docs/PROJECT.md) | Positioning, the argument, locked decisions, homepage structure, founder facts, voice rules, copy-accuracy rule |
| [`docs/DEPLOY.md`](./docs/DEPLOY.md) | How the site actually reaches production, live nginx redirects, rollback |
| This file | Orientation and working conventions |

If an older document anywhere disagrees with `docs/PROJECT.md`, `docs/PROJECT.md` wins.

## Stale-instruction warning

This repo was scaffolded from the Stardrive Astro boilerplate. **That boilerplate's onboarding flow has been removed and does not apply.** There is no `STARDRIVE_AGENT_MODE.md`, no `.ai/` directory, no `PLAN.md` setup ritual. This is a live production site, not an uninitialised starter. If you find instructions telling you to run a boilerplate setup, they are stale — ignore them.

Two other repos exist and serve nothing: `praveenshahi/AMORISGTM` (pre-Stardrive agency site) and the old `amoris` consciousness-platform repo. Do not take copy, positioning or deploy instructions from either. `AMORISGTM/DEPLOY-NGINX.md` in particular contains redirect rules that are wrong — see `docs/DEPLOY.md`.

## Never deploy unasked

Deployment is manual and owned by the founder. Build locally, serve locally, hand it over. Do not SSH to the VM, modify nginx, or change server state unless explicitly asked in the current session. Pushing to GitHub does not deploy — the two are independent steps.

## The rules most often broken

Full detail in `docs/PROJECT.md`. The ones that get violated:

1. **Nine homepage sections, hard ceiling.** After any homepage change, confirm `dist/index.html` has one `h1` and eight `h2`.
2. **Exactly one process diagram on `/`.** The detailed architecture diagram stays on `/architecture`.
3. **The thesis line appears once.** "Outbound rarely fails at sending…" — section 3 only.
4. **First person singular.** No "our team", "our engineers", "our clients". There is no team.
5. **No invented anything** — client results, logos, metrics, testimonials, case studies. There are no external client engagements yet.
6. **Abstract scale, not company-attributed validation.** Do not reintroduce per-company revenue metrics or a stat band of reply rates.
7. **Amazon and Meta are the systems half** — four years on global data science and ML projects, not revenue leadership. Text only, never logos.
8. **Tense rule.** Present for shipped, hedged in the same sentence for in-testing, future for planned. The MCP server is not built.
9. **One primary CTA** — Calendly, at hero and close. WhatsApp is not on the homepage.
10. **Never say "practice".** The word is "agency".

## Working conventions

- **Copy lives in typed arrays** at the top of `home-content.astro`, with a comment block stating the discipline. Follow that pattern; do not inline strings into markup, and do not delete the comment.
- **FAQ answers** are Markdown in `src/content/faq-answers/en/`, not page components. They also feed `FAQPage` structured data and `llms.txt`.
- **Pricing appears in five places** and they must always agree: `home-content.astro`, `pricing.astro`, two FAQ answers, and `theme.config.ts`. The last is outside `src/`, so sweep the whole repo:
  ```bash
  rg -n '\$500|\$3,000|From \$' --glob '!dist/**' --glob '!node_modules/**' .
  ```
- **`theme.config.ts` `llms.intro`** is what AI assistants read about Amoris. Update it whenever positioning or pricing changes.
- **`personSchema` in `founder.astro`** is the highest-value structured data on the site — it makes Praveen findable as an entity. Keep it accurate.
- **Evolve the visual identity, do not replace it.** The palette, dark-mode handling, graph-paper banding, card grammar and eyebrow labels all stay.
- Run `npm run build` and `npx astro check` before considering work done. `npm run check` has a pre-existing Prettier CRLF failure — see `docs/DEPLOY.md`.
