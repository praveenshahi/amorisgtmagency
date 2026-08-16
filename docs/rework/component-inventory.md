# component-inventory.md

Components and design tokens, marked **keep / adapt / retire**. Generated against `main` @ `a03c37c`.

Binding constraint: **evolve the existing visual identity, do not replace it.** Nothing here proposes a redesign.

---

## Copy-bearing components — the rewrite surface

| Component | Lines | Used by | Verdict | Notes |
|---|---|---|---|---|
| `home/home-content.astro` | 504 | `pages/index.astro` | **ADAPT** | The whole homepage. Every locked decision lands here. See pattern note below |
| `pages/pricing.astro` | 203 | route | **ADAPT** | Decision 4. The commercial ladder renders as an **engagement list** — the two-card `modes` grid at `:128` already is one. Do not promote it to a diagram |
| `architecture-diagram.astro` | 656 | `pages/architecture.astro:63` only | **KEEP, DO NOT MOVE** | Decision 2 allows exactly one rendered process diagram on `/`. This is not it and must stay on `/architecture` |
| `layout/hero.astro` | — | `layouts/default.astro` | **ADAPT** | Carries the H1. Decision 1: argument-led, indicts the visitor's own GTM. `heroChip: true` is the only promo flag enabled |
| `faq/faq-list.astro` | — | `pages/faq.astro` | **KEEP** | Renders `src/content/faq-answers/en/*.md`. Copy changes go in the markdown, not here |

### Follow the existing copy pattern

`home-content.astro` holds its copy in typed arrays at the top (`pipeline`, `refusals`, `phases`, `engineTools`, `deliveryTools`) with a comment block at `:14-21` stating the copy discipline. That comment already encodes the voice rules — first person, no invented outcomes, tier states never blurred.

New copy goes in the same arrays. Do not inline strings into markup, and do not delete the discipline comment.

---

## Layout and shell — keep

| Component | Verdict | Notes |
|---|---|---|
| `layout/header.astro`, `header-content.astro` | **KEEP** | |
| `layout/nav/main-nav.astro` | **ADAPT** | Nav order is deliberate and documented at `:16-17`: products → architecture → pricing → founder → faq, "the way a sceptical buyer moves". Preserve that reasoning if the order changes |
| `layout/nav/footer-nav.astro` | **ADAPT** | Three columns. Holds the only link to `/intel-echo/`; `/intel-echo-gtm/` is linked from nowhere |
| `layout/nav/legal.astro` | **KEEP** | |
| `layout/footer.astro`, `logo.astro`, `light-mode-switch.astro` | **KEEP** | |
| `layout/language-select.astro` | **KEEP** | Single locale today; harmless |
| `headline.astro`, `reveal.astro` | **KEEP** | `Reveal` is the site-wide scroll animation and respects `prefers-reduced-motion` |
| `head/base.astro`, `hreflang.astro`, `ogx.astro` | **KEEP** | Meta and OG |
| `structured/website.astro`, `webpage.astro`, `article.astro` | **KEEP** | schema.org. If `/products` claims change, the `SoftwareApplication` block at `products.astro:13-22` changes with them |
| `blog/*` (7 components) | **KEEP** | Host the teardown series |
| `layouts/default.astro`, `article.astro` | **KEEP** | |

---

## The marquee — needs a decision

| Component | Used by | Verdict |
|---|---|---|
| `layout/references.astro` | `home-content.astro:365,368` — **twice** | **DECIDE** |
| `patterns.astro` | `pages/founder.astro` | **KEEP** |

Two marquees render back to back on the homepage:

1. `:365` — `engineTools`: LangGraph, OpenAI, Anthropic, FastAPI, labelled *"What the research engine runs on"*.
2. `:368` — `deliveryTools`: n8n, Clay, PostgreSQL, HubSpot, Salesforce, Slack, Gmail, Google Sheets, Notion, Airtable, Zapier, Make, Calendly, labelled *"What I build with, and integrate into, on client engagements"*.

Three problems:

- **The delivery stack explicitly forbids turning the stack into a tools page or logo wall.** Two consecutive marquees is a logo wall.
- **Under the nine-section ceiling (decision 5) they cost two of nine slots** for the least argument-carrying content on the page. Decision 7 moves the centre of gravity to "we think well" — a logo wall argues the opposite.
- **HubSpot and Salesforce imply CRM integration**, which the delivery stack defers to Phase 2. The label at `:368` is carefully worded and does technically survive, but logos read faster than labels.

Recommendation: **merge into one marquee, or retire both.** The first is defensible — it is a real substantiation of the wedge. The second is closest to what the source document warns against. Founder's call; the mid-page section it frees up is worth more.

---

## Unused Stardrive furniture — retire

All promo flags are already `false` in `theme.config.ts:98-104`, with the comment *"all off. This is an agency site, not a SaaS funnel."* The components still ship and are still imported.

| Component | Flag | Verdict |
|---|---|---|
| `promo/newsletter-signup.astro` + `-wrapper.astro` | `newsletterSignup: false` | **RETIRE** |
| `promo/footer-banner.astro` | `footerBanner: false` | **RETIRE** |
| `promo/nav-ad.astro` | `navAd: false` | **RETIRE** |
| `promo/top-banner.astro` | `topBanner: false` | **RETIRE** |
| `add-to-calendar-button.astro` | — | **RETIRE** — imported nowhere. Event machinery from the boilerplate; `llms.addEvents: 'none'` |
| `styles/events.css` | — | **RETIRE** — no events collection exists |
| `styles/docs.css` | — | **VERIFY then retire** — boilerplate docs styling |
| `webmcp-tools.astro` | — | **VERIFY** — used by both layouts. Confirm it is wanted before touching |

Retiring the promo components means removing their imports from `layouts/default.astro`, `layouts/article.astro`, `layout/footer.astro`, `layout/header.astro` and `nav/main-nav.astro`, and dropping the `promotions` block from `theme.config.ts`. Low risk — all are flagged off, so nothing rendered changes. Do it as its own commit so a bisect stays clean.

---

## Design tokens — keep, evolve only

`theme.config.ts` and `src/styles/tailwind.config.css` hold the system. Do not swap the palette.

| Token / device | Where | Verdict |
|---|---|---|
| `--primary` / `--primary-light` / `--primary-darker`, `--secondary-*` | `styles/tailwind.config.css` | **KEEP** — purple/blue, `theme-color: #8b2cff` |
| Dark mode via `data-theme` + `.dark`, inline pre-paint script | `head/base.astro` | **KEEP** — no-flash pattern, works |
| Graph-paper background | `home-content.astro:466-503` | **KEEP** — a signature device; alternates section bands |
| Galaxy/nebula hero gradient | `layout/hero.astro` | **KEEP** |
| CTA glow band | `home-content.astro:458-464` | **KEEP** |
| Card grammar: `rounded-xl border border-stone-300 bg-white dark:bg-stone-900` | throughout | **KEEP** — reuse rather than inventing new card styles |
| Status colour coding: green border = Running, stone = In private testing | `home-content.astro:245,258` | **KEEP** — this is the visual half of voice spec §5's tier rule. Reuse it wherever tiers appear |
| Eyebrow label: `text-sm font-semibold tracking-[0.2em] uppercase` | every section | **KEEP** — the voice spec calls out this device by name |

---

## Summary

| Verdict | Count |
|---|---|
| Keep as is | 21 |
| Adapt (copy changes) | 5 |
| Retire | 7 |
| Decide (founder) | 2 |

Nothing in the visual system needs replacing. The rework is a copy and information-architecture job on top of a design that already works.
