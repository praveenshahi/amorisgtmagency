# Amoris.in — implementation brief

For an engineering agent working in this repository. Generated against `main` @ `a03c37c`.

> **Source note.** This brief resolves contradictions across four prior strategy documents. **v3 (§1–30) and v4 (§30–39) were not supplied to the session that produced it.** Sections A, C, D, E, H, I and J are complete. Sections B, F and G carry `TBD — v3/v4` markers where settling the point would require the source text. Nothing has been invented to fill those gaps.

---

## A. Decisions locked

Read first. Binding.

| # | Decision |
|---|---|
| 1 | **The H1 is argument-led and indicts the visitor's own GTM.** Direction: "More GTM activity won't fix a bad decision." The category label is never the H1. The arbitrage thesis is a mid-page section and a `/founder` worldview. *Rationale: the arbitrage line is widely repeated across AI GTM positioning and is a claim about the market, not about the reader.* |
| 2 | **Exactly one rendered process diagram on `/`:** Diagnose→Design→Build→Test→Measure→Learn. The commercial ladder renders as an engagement list. MARKET→RETENTION becomes one prose sentence. The teardown sequence lives inside teardown content. The positioning model is internal-only and never renders. |
| 3 | **The Signal Scan is human-delivered and form-gated.** The visitor submits a URL and receives a response from Praveen. No unmetered public inference. If any automated component ever ships, rate limiting, budget caps, input validation, logging and failure handling are launch blockers. |
| 4 | **Publish ranges consistent with the pilot ladder.** The `₹15,000–₹25,000` audit figure is replaced across **all five** occurrences at once. Leaving two signals live is not an option. |
| 5 | **Nine homepage sections, hard ceiling.** Any new idea displaces something rather than appending. |
| 6 | **Phase 1 is the existing route set, consolidated.** No new page tree. Deferred pages are listed in `current-ia-map.md`. |
| 7 | **The centre of gravity shifts from "we build systems" to "we think well."** This is a strategic trade, chosen deliberately. It is why the teardown series is load-bearing and why a stalled series is a negative signal. |
| 8 | **The voice & copy specification is binding.** Where a draft violates it, rewrite the draft rather than justifying it. |

---

## B. Positioning summary

`TBD — v3/v4` for the canonical wording. What is settled and traceable:

Amoris is a **founder-led AI GTM practice** — one operator, Praveen Shahi, not a staffed agency and not a SaaS vendor.

The **wedge** is evidence-led account research: given one company, the system researches the account live, decides whether there is a defensible commercial reason to start a conversation, and can HOLD — stopping when the evidence does not support outreach. Every factual claim traces to a cited source; inference is marked as inference; nothing is sent automatically.

The **thesis** is that outbound fails at deciding what to say, not at sending. More activity does not fix a bad decision.

What the site is **proving** is judgment, not product surface (decision 7). Evidence of judgment is the teardown series, the refusal behaviour, and `intel-echo` — a real published package a reader can install and inspect.

The **buying ladder** is: paid GTM Audit → first paid pilot → ongoing partnership.

---

## C. Non-negotiable constraints

### C1. Truthfulness tiers

| Tier | Meaning | Permitted verbs |
|---|---|---|
| 1 | Built and running | Plain present tense: "runs", "is deployed", "returns", "is reachable as an API" |
| 2 | In private testing | Hedged in the same sentence: "built and running locally", "tested against a small number of", "not yet deployed" |
| 3 | Conceptual / direction | Future or intent framing only: "is coming", "the next layer", "where this goes" |

**No Tier-2 or Tier-3 capability may be described in present tense.** Never list a roadmap item alongside shipped items without a visual and verbal distinction — the existing Running / In private testing split at `home-content.astro:243-273` is the model and must be reused.

Phase 2 items that may never appear in present tense: custom client dashboards, the MCP server, CRM integrations, automated response classification, any additional agentic layer, warehouse/data-modelling infrastructure.

### C2. The claims audit

`claims-vs-code.md` is scoped to what can be publicly falsified: **numbers, named external artifacts, and tier labelling.** It is deliberately *not* an audit of whether a capability is automated or manual — Amoris is an agency, and mechanics are settled in discovery calls.

Two specific requirements:
- The **"14 quality checks"** claim at `home-content.astro:40` must be verified. If the count differs, use the real number; if unstable, describe the checks by category and drop the count.
- Every number in copy maps to a `VERIFIED` row, or the number is **removed rather than rounded**.

### C3. No invented anything

No client results, logos, metrics, testimonials, case studies, or "trusted by" bands. None exist. This is not a placeholder to fill later — it is a permanent constraint until there is something true to say.

### C4. Evolve the visual identity, do not replace it

The palette, dark-mode handling, graph-paper banding, card grammar, eyebrow labels and status colour coding all stay. See `component-inventory.md`. The rework is copy and IA on top of a design that works.

### C5. Preserve the honest-limitation copy

The "It will not manufacture confidence" family at `home-content.astro:50-67` is a differentiator, not filler. Also load-bearing and not to be softened:

- "HOLD is a quality gate, not a correctness guarantee."
- "It does not know who will buy… a smaller and more honest question than intent scoring."
- "Nothing is connected to your inbox and nothing is sent."
- "Anyone looking for autonomous sending — the send stays manual by design."
- "That first line is the real exclusion. Everything else is a scope question."

### C6. Solo operator

Rewritten from source documents that assumed a team. No "our team", "our engineers", "our analysts". No "our clients" until multiple external clients exist whose work can be described. First person singular where the founder does the work — the site already does this correctly.

Anything in the source documents implying headcount, parallel workstreams, or a content team is rewritten for one person. This is why decision 6 caps the route set and why teardown cadence is a real constraint rather than a scheduling detail.

---

## D. Pre-work deliverables

Produced. Review before any component is touched.

| File | Status |
|---|---|
| `claims-vs-code.md` | Complete. Five pricing occurrences found — one outside `src/` |
| `current-ia-map.md` | Complete. Zero orphans; one route held open for a decision |
| `component-inventory.md` | Complete. 21 keep, 5 adapt, 7 retire, 2 decide |
| `proposed-homepage.md` | Structure complete; H1 and thesis wording gated on v3/v4 |

Three findings worth escalating:

1. **`theme.config.ts:113`** states a flat "Rs 15,000" in the `llms.intro` string that generates `llms.txt`. AI assistants are quoting a different price than the site shows.
2. **`/intel-echo-gtm/`** is live at HTTP 200 and linked from nowhere, in no sitemap.
3. **Two nginx rules on the VM contradict live pages** — `/pricing` and `/contact` both have 301 rules documented while both return 200.

---

## E. Content dependencies that gate launch

**Blocking:** at least one complete "How We'd Sell This" teardown must exist before the Proof section ships. Without it the section is an empty container. The single existing article, *"How to audit your GTM motion"*, is a methodology piece and does not satisfy this.

**Non-blocking:** the internal experiment write-up can follow Phase 1.

**Available now:** Intel Echo is real, shipped and public. It belongs in Proof from day one and can hold the section open while the first teardown is written.

**Cadence:** state a rate that survives a busy delivery week. For a solo operator carrying delivery, one teardown per month is a commitment; one per week is not. A stalled series is a negative capability signal — under decision 7 the site argues that Amoris thinks well, and a series that dies after two entries argues the reverse more loudly than no series at all. **`TBD — founder`.**

---

## F. Homepage specification

See `proposed-homepage.md` for the full nine-section wireframe with purpose, argument, honesty condition and exclusions per section.

Summary: Hero → The problem → The wedge → Where this actually is → Proof → The thesis → Method and engagement → Fit → Close.

Displaced to stay within nine: both marquees, and the standalone GTM Audit block (which becomes rung one of the engagement ladder).

`TBD — v3/v4`: H1 wording, thesis framing.

---

## G. Page-by-page specification — Phase 1 only

| Route | Action | What must be true |
|---|---|---|
| `/` | Rewrite | Nine sections; one diagram; argument-led H1 |
| `/products` | Keep + rewrite | Tier language holds. `SoftwareApplication` schema at `products.astro:13-22` stays accurate |
| `/pricing` | Rewrite | All pricing surfaces agree. Ladder renders as a list. "Why the build price is not listed" stays |
| `/architecture` | Keep | `architecture-diagram.astro` stays here and never moves to `/` |
| `/founder` | Rewrite | Hosts the arbitrage worldview. Verify the GitHub links resolve |
| `/faq` | Keep + rewrite | Two answers carry the pricing figure |
| `/contact` | Keep | Proposed host for the form-gated Signal Scan. **Check the nginx 301 first** |
| `/data-and-ip` | Keep | Supports the ownership claim |
| `/blog` + article + taxonomy | Keep | Hosts the teardown series |
| `/legal-notice`, `/privacy-policy`, `/404` | Keep | |
| `/intel-echo/` | Keep | Real, shipped. Consider adding to sitemap |
| `/intel-echo-gtm/` | Decide | Link, leave deliberately unlisted, or 301. Do not silently delete — it returns 200 |

`TBD — v3/v4`: per-page copy direction beyond the above.

---

## H. Acceptance criteria

Checkable. All must pass.

1. **The 30-second test.** A technically sophisticated B2B founder can answer, within 30 seconds on `/`: what Amoris does, who it is for, what is built vs. in testing, what AI does vs. what a human does, and what to do next.
2. **Exactly one process diagram renders on `/`.**
3. **Every claim in `claims-vs-code.md` shows `VERIFIED`, or the copy has changed.** No row is left at `TBD` at launch.
4. **Zero orphaned routes.** Every route has a decision; every internal link resolves.
5. **No page states a Tier-2 or Tier-3 capability in present tense.**
6. **Pricing is consistent across all five surfaces**, verified with a repo-wide sweep:
   ```bash
   rg -n "15,000|25,000|Rs 15|Rs 25|₹" --glob '!dist/**' --glob '!node_modules/**' .
   ```
7. **The honest-limitation copy in C5 is present** and not softened.
8. **No section could carry a competitor's name unchanged** (voice spec §9).
9. **No section describes a capability without answering what it does not do.**
10. **`npm run check` and `npm run build` pass.**
11. **No CTA cluster stacks more than two CTAs.**

---

## I. Non-goals

Explicitly not in scope. Carried forward in substance from v3 §25.

- **No large multi-page site.** A solo operator maintains a small route set well or a large one badly.
- **No client dashboards, MCP server, CRM integrations, automated response classification, additional agentic layers, or warehouse infrastructure** — deferred, and not describable in present tense.
- **No unmetered public live inference.** No public demo that runs on arbitrary input.
- **No invented social proof** of any kind.
- **No visual redesign.** No palette swap, no new design system.
- **No case studies** until there are clients whose work can be described.
- **No SaaS-funnel apparatus** — newsletter capture, promo banners, nav ads. All already flagged off; they get retired, not re-enabled.
- **No deployment from an agent session.**

---

## J. Checkpoint protocol

1. **Checkpoint 1 — after pre-work (section D).** Stop. Wait for approval. ← *you are here*
2. **Checkpoint 2 — after the homepage wireframe (`proposed-homepage.md`).** Stop. Wait for approval.
3. **Implementation.** Only after both are approved, and only for the Phase 1 route set.

Do not proceed unprompted. Build locally and serve locally for review — **never deploy.**

---

## Open questions — founder only

1. **Pricing display.** The new GTM Audit figure. The pilot rung is ₹1.5–3L per the delivery stack; the audit price is in no source document.
2. **Teardown cadence.** What is genuinely sustainable alongside delivery.
3. **The first teardown.** Which company.
4. **Signal Scan.** Confirm it stays human-delivered and form-gated.
5. **The marquee.** Merge to one, or retire both.
6. **`/intel-echo-gtm/`.** Link, leave unlisted, or retire.
7. **The "14 quality checks" count.** Verify against the judge.
8. **Deployment.** How this repo reaches the VM, and whether the `/pricing` and `/contact` nginx 301s are actually applied.
