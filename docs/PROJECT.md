# Amoris — project scope and positioning

The single source of truth for what this site is arguing and why. If something here conflicts with an older document, this wins. Written 2026-08-16.

---

## What Amoris is

**A founder-led AI GTM agency.** One person: Praveen Shahi. No team, no employees, no junior bench.

Use the word **agency** everywhere — body copy, footer, wordmark, meta, structured data. Not "practice", not "studio", not "consultancy". This was decided deliberately: "agency" is what a global B2B buyer searches for, and category legibility beats elegance.

---

## The argument the site makes

**Audit before you automate.** That is the H1, the offer and the whole position.

The enemy is **premature automation** — building against a bottleneck nobody confirmed. The category is incentivised to say "you have an SDR problem, here is an AI SDR." Amoris says: maybe, let's find out first.

Underneath it, the reason the diagnosis is hard: **every specialist describes the problem in the shape of their own job.** Sales says lead quality, marketing says follow-up, product says positioning, data says instrumentation. Each is right about their slice; none owns the question of which slice matters. So the founder either decides half-blind or hands the decision to someone who takes it off their desk entirely. They want neither.

**What they want is the thinking done and the decision kept.** That is the product.

The offer is a 360-degree read across **sales, marketing, product management, analytics and machine learning** — enough range to say the thing no specialist will: this is not your problem, that one is.

### The outcome

**More qualified meetings, not more automation.** This must appear above the fold and recur.

Write it as **the goal of the work**, never as a guaranteed result. "The goal is more qualified meetings" is safe. "We book you qualified meetings" is not, and would be the first unsupported claim on the site. There are no client engagements yet.

### ICP

Companies that **already have a GTM motion** and want lead → demo conversion to improve. Not pre-revenue companies with nothing running — there is nothing to audit. This is stated as an explicit disqualifier in section 8.

### HOLD, unified

The same rule at two levels, and it is the site's philosophy rather than a product feature:

- **Before building** — do not automate until the audit supports it.
- **Inside the system** — do not reach out until the account evidence supports it.

Stated explicitly in homepage section 6. Do not let it collapse back into "a feature of the research engine".

### The sequence the page makes obvious

Audit → Diagnose → Readiness → Build → Deploy → Qualified bookings.

**Readiness** is a real step and a real audit output: some stacks are not in a state where automation would hold, and saying so is part of the value. Nobody else in the category names it.

### What the site is proving

Judgment, not product surface. It is why the writing matters more than the feature list.

## Locked decisions

Do not relitigate without the founder.

| # | Decision |
|---|---|
| 1 | Category word is **agency**. "A founder-led AI GTM agency." |
| 2 | H1 states the offer, not a philosophy: **"Audit before you automate."** |
| 3 | **Nine homepage sections, hard ceiling.** New ideas displace; they do not append. |
| 4 | **Exactly one rendered process diagram on `/`** — Audit→Diagnose→Readiness→Build→Deploy→Qualified bookings, in section 4. The commercial ladder renders as a list. |
| 5 | Pricing in **USD as published ranges**: free intro call · **GTM Audit $200–$500** · **Pilot $1,200–$3,000** · ongoing scoped, no public number. The first rung is called an **Audit**, never a "Diagnostic" — the H1 depends on it. |
| 5a | **Three factors move the price**, stated wherever a range appears: how tangled the workflow and GTM stack are, how clean and accessible the pipeline data is, and whether the client has technical or data talent available for the integration. The third is not padding — without an internal owner, more of the work and more of the chasing falls on Praveen, and the price reflects it. Ranges replaced the earlier "from X, no ceiling" construction on the founder's instruction. |
| 6 | **One primary CTA** — Calendly — repeated at hero and close. WhatsApp is not on the homepage. |
| 7 | The thesis line ("Outbound rarely fails at sending…") appears **exactly once**, in section 3. |
| 8 | Global default. Remote across US, EU and APAC, with overlap stated. Bengaluru named, not hidden. |
| 9 | **No claims-vs-code audit.** Copy accuracy is handled by the tense rule below and nothing more. |
| 10 | Phase 1 route set only. No new page tree. |

---

## Homepage structure

Nine sections. Verify after any change that the built `dist/index.html` has one `h1` and eight `h2`.

| # | Section | Job |
|---|---|---|
| 1 | Hero — Audit before you automate | Offer, outcome and ICP in one screen |
| 2 | The most expensive thing in GTM is solving the wrong problem well | Six plain symptom lines, including lead-to-demo leakage. No cards, no product |
| 3 | Most GTM automation fixes a bottleneck nobody confirmed | The enemy, named. Holds the thesis line — once |
| 4 | Audit, then automate. In that order | The one diagram, ending in qualified bookings |
| 5 | The judgement being automated is mine | Conversion section. Both halves, five domains, the working model |
| 6 | The system is not the strategy | The engine. **HOLD at two levels stated here** |
| 7 | Your stack, and what it is actually ready for | Integration layer, readiness, self-hosted |
| 8 | Built for teams that already have a motion | Fit. Pre-revenue is an explicit exclusion |
| 9 | Start with the audit | The ladder, then one CTA |

### The principle that repeats

*The thinking gets done, the decision stays yours.* It appears in section 5 (working model), section 6 (the system hands you a read, never sends), section 9 (you keep the document), and as a disqualifier in section 8 (*anyone who wants the decision taken off their desk entirely*).

---

## Routes

| Route | Notes |
|---|---|
| `/` | `src/components/home/home-content.astro` + `layout/hero.astro` |
| `/products` | Carries `intel-echo` SoftwareApplication schema |
| `/pricing` | USD ladder. Keep "why the full build price is not listed" |
| `/architecture` | Holds `architecture-diagram.astro`. **Must not migrate to `/`** |
| `/founder` | Long-form. Carries `personSchema` — the highest-value schema on the site |
| `/faq` | `src/content/faq-answers/en/*.md`. Emits `FAQPage` + `Question` entities |
| `/contact` | |
| `/data-and-ip` | Ownership position |
| `/blog` (+ article, categories, tags) | Content-marketing surface, in the main nav |
| `/legal-notice`, `/privacy-policy`, `/404` | |
| `/intel-echo/`, `/intel-echo-gtm/` | Static HTML in `public/`. Live, in the sitemap via `customPages` in `astro.config.ts` |

---

## Facts about the founder — use these, do not embellish

- Since **2014**. A decade across sales, marketing, product management, analytics and machine learning.
- **Four years at Amazon and Meta** on global data science and ML projects — pattern-finding and system design. This is the *systems* half, **not** revenue leadership. Earlier copy miscategorised it; do not reintroduce that.
- **Seven-plus years** in sales and growth hacking: building teams, opening new markets, growth across brands at different stages.
- Abstract scale used on `/` and `/founder`: **10+** years of experience, **150** largest sales team led, **6+** brands grown, **millions** in sales closed. Prior operating work across LATAM, Africa and India.
- LinkedIn carries the detail and is linked. `linkedin.com/in/praveenshahi13`
- **`intel-echo`** is real and published on npm.

### Two hard rules on credentials

1. **Abstract scale, not company-attributed validation.** Amoris sells a diagnosis for a problem buyers have no language for yet, so proof-of-results framing answers a question they have not learned to ask. Do not reintroduce per-company metrics or a reply-rate/qualified-leads stat band.
2. **No Amazon or Meta logos, ever.** Text only. Naming them describes where experience was gained; it is not an endorsement, and a logo would read as a client logo.

**Never invent** client results, logos, metrics, testimonials or case studies. There are no external client engagements yet.

---

## Voice

A senior operator explaining a system to another operator, with nothing to prove.

- **Argue, don't describe.** Section headings are full sentences that claim something.
- **State limitations as plainly as capabilities.** Every capability section answers "and what does it not do?"
- **Adjectives carry no persuasive load.** If removing one loses no information, remove it.
- **Mechanism over benefit.** "The source behind each observation" beats "higher quality".
- **Specificity over intensity.** Describe their Tuesday afternoon, not their strategic ambition.
- **First person singular.** No "our team", "our engineers", "our analysts". No "our clients" until there are several whose work can be described.
- **No urgency, scarcity, guarantees or superlatives.**

**Banned:** unlock, supercharge, revolutionize, 10x, "AI-powered" as a value claim, AI SDR, autonomous agents, seamless, turnkey, end-to-end solution, "leverage" as a verb, scene-setting preamble, "we're excited to".

**Also banned:** claim-shaped sentences with no content. Test every sentence — if a competitor could paste their name in unchanged, rewrite it.

### Copy that must not regress

- "Outbound rarely fails at sending. It fails at deciding what to say."
- "Every specialist you hire describes the problem in the shape of their own job."
- "HOLD is a quality gate, not a correctness guarantee."
- "It does not know who will buy… a smaller and more honest question than intent scoring."
- "That first line is the real exclusion. Everything else is a scope question."
- The four refusal blocks in `home-content.astro`. They are a differentiator, not filler.

---

## The only copy-accuracy rule

Present tense for what runs today. Explicit hedge **in the same sentence** for what is in testing. Future framing for what is planned.

| Tier | Verbs |
|---|---|
| Running | "runs", "is deployed", "returns", "is reachable as an API" |
| In private testing | "built and running locally", "tested against a small number of accounts", "not yet deployed" |
| Planned | "is coming", "the next layer", "where this goes" |

Current state: the **research layer is deployed**. The **outbound reasoning layer** (hypothesis, angle, judge, HOLD) is **built and in private testing**, not sold as a finished product. The **MCP server is not built** — future framing only, and no early-access CTA.

If a sentence cannot be written truthfully in these tenses, cut it.

---

## Non-goals

- No new routes or a large multi-page site.
- No visual redesign. Evolve the existing dark/technical identity.
- No public demo or unmetered public inference.
- No dashboards, MCP server, CRM integrations, or automated response classification described in present tense.
- No SaaS-funnel apparatus — newsletter capture, promo banners, nav ads. All flagged off in `theme.config.ts`.
- No invented social proof of any kind.
