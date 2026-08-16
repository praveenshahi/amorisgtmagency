# current-ia-map.md

Every route, with a decision. Generated against `main` @ `a03c37c`. Build produces **19 pages**.

Decisions: `KEEP` · `REWRITE` · `MERGE` · `MOVE` · `REDIRECT` · `REMOVE`

Locked decision 6 governs: Phase 1 is the **existing** route set, consolidated. No new page tree. A solo operator maintains what exists before adding.

---

## Phase 1 routes

| Route | Source | Live | Decision | Notes |
|---|---|---|---|---|
| `/` | `src/pages/index.astro` → `components/home/home-content.astro` | 200 | **REWRITE** | Nine-section ceiling (decision 5), argument-led H1 (decision 1), exactly one process diagram (decision 2). See `proposed-homepage.md` |
| `/products` | `src/pages/products.astro` | 200 | **KEEP + REWRITE** | Carries `intel-echo` structured data. Tier language audit per `claims-vs-code.md` §3 |
| `/pricing` | `src/pages/pricing.astro` | 200 | **REWRITE** | Decision 4. Audit figure changes; pilot rung added; the commercial ladder renders as an **engagement list, not a diagram** (decision 2). The existing "Why the build price is not listed" section stays — it already does the right job |
| `/architecture` | `src/pages/architecture.astro` | 200 | **KEEP** | Holds `architecture-diagram.astro`. This is where the detailed diagram belongs, and it must **not** migrate to `/` |
| `/founder` | `src/pages/founder.astro` | 200 | **REWRITE** | Per decision 1, the arbitrage thesis ("building got cheap, distribution is hard") lives here as worldview, not in the hero |
| `/faq` | `src/pages/faq.astro` + `src/content/faq-answers/en/*.md` (10 answers) | 200 | **KEEP + REWRITE** | Two answers carry the pricing figure and change with it |
| `/contact` | `src/pages/contact.astro` | 200 | **KEEP** | Candidate host for the form-gated Signal Scan (decision 3) rather than a new route |
| `/data-and-ip` | `src/pages/data-and-ip.astro` | 200 | **KEEP** | Ownership/IP position. Supports the "you own the system" claim |
| `/blog` | `src/pages/blog/[...page].astro` | 200 | **KEEP** | Container for the teardown series. One article exists |
| `/blog/how-to-audit-your-gtm-motion` | `src/content/articles/en/` | 200 | **KEEP** | The only article. See the blocking dependency below |
| `/blog/categories`, `/blog/categories/gtm-engineering` | generated | 200 | **KEEP** | Thin with one article, but harmless |
| `/blog/tags`, `/blog/tags/{audit,automation,gtm}` | generated | 200 | **KEEP** | Same |
| `/legal-notice` | `src/pages/legal-notice.astro` | 200 | **KEEP** | |
| `/privacy-policy` | `src/pages/privacy-policy.astro` | 200 | **KEEP** | |
| `/404` | `src/pages/404.astro` | — | **KEEP** | |

## Static pages outside the Astro route tree

| Route | Source | Live | In sitemap | Linked from | Decision |
|---|---|---|---|---|---|
| `/intel-echo/` | `public/intel-echo/index.html` | 200 | **No** | `footer-nav.astro:34` | **KEEP** — real, shipped, public. Belongs in Proof from day one |
| `/intel-echo-gtm/` | `public/intel-echo-gtm/index.html` | 200 | **No** | **nothing** | **DECIDE** — see below |

### `/intel-echo-gtm/` is the one true orphan

Live, reachable, 31KB, titled *"Intel Echo GTM — The Messaging Loop That Measures Itself"* — and nothing on the site links to it. It is also absent from `sitemap-index.xml`, so it is neither discoverable nor indexed.

Three options, founder's call:

1. **Link it** from the footer beside Intel Echo and add both to the sitemap. Correct if it is a real product surface.
2. **Leave unlisted** deliberately, as a page you send people to directly. Legitimate, but then it should be recorded here as intentional rather than looking like an accident.
3. **Retire it** with a 301 to `/products`. Only if it no longer represents the offer.

Do not silently delete it — it returns 200 today, so removal breaks a live URL.

**Also note:** neither intel-echo page is in the sitemap. If they are meant to be found, that is a gap to fix regardless of which option is chosen.

## Deferred — explicitly not built in Phase 1

The source brief contemplated seven new pages. Under decision 6 they are deferred. Where the content matters, it lands inside an existing route:

| Deferred page | Where the content goes in Phase 1 |
|---|---|
| Teardown index | `/blog` with a category |
| Signal Scan landing | A section on `/contact` |
| Individual teardowns | `/blog/{slug}` articles |
| Separate worldview/thesis page | `/founder` |
| Case studies | Nowhere — no client results exist and none may be invented |

---

## Server-side redirects already in force

Documented in the separate `AMORISGTM` repo, `DEPLOY-NGINX.md`, applied on the VM. **Not managed by this repo** — changing routes here can silently break them.

| Rule | Target |
|---|---|
| `/research`, `/research/` | `/` |
| `/labs`, `/labs/` | `/` |
| `/ai-employees`, `/agents` | `/products/` |
| `/aios` | `/products/` |
| `/how-it-works` | `/` |
| `/about` | `/founder/` |
| `/work` | `/products/` |
| `/contact` | `/#contact` |
| `/sitemap.xml` | `/sitemap-index.xml` |
| `/pricing` | `/` |

### Two live conflicts

1. **`location = /pricing { return 301 https://amoris.in/; }` contradicts the live `/pricing` page**, which currently returns 200. Either the rule was never applied or it is ordered below the static handler. Resolve before changing pricing copy — a rewritten page behind a 301 is invisible.
2. **`location = /contact { return 301 https://amoris.in/#contact; }` contradicts the live `/contact` page**, which returns 200. Same problem, and it matters more now: `/contact` is the proposed home for the Signal Scan.

Both need checking against the VM's actual nginx config before launch.

## Orphan check

Every route in `src/pages/` appears above with a decision. Every URL in `sitemap-index.xml` appears above. The two `public/` pages appear above. **Zero unaccounted routes.**

The only unresolved item is `/intel-echo-gtm/`, held open deliberately for the founder rather than defaulted.

---

## Blocking dependency

The Proof section cannot ship until **at least one complete "How We'd Sell This" teardown exists**. Without it the section is an empty container.

Today `/blog` holds one article, *"How to audit your GTM motion"* — a methodology piece, not a teardown. It does not satisfy the dependency.

Intel Echo is real, shipped and public, so it carries Proof from day one on its own. But the teardown series is what the repositioning rests on: under decision 7 the site's centre of gravity moves to "we think well", and a teardown series that stalls after one entry argues the opposite. Commit to a cadence that survives a busy delivery week.
