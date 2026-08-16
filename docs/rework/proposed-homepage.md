# proposed-homepage.md

Section-by-section wireframe for `/`. Nine sections, hard ceiling (decision 5).

> **Partially gated.** Strategy documents v3 (§1–30) and v4 (§30–39) were not supplied. Structure, displacement logic and honesty constraints below are derived from Step 1 of the brief prompt, the delivery-stack document, and the existing site. Anything that would require v3/v4 to settle is marked **`TBD — v3/v4`** rather than invented.

---

## What has to change, and why something must go

Today `/` renders **ten** blocks: hero, problem, wedge, tier status, GTM Audit, wider practice, marquee ×2, fit, CTA.

The ceiling is nine, and three new things must land: a Proof section, the arbitrage thesis as a mid-page section, and the single process diagram. Under decision 5 they **displace**; they do not append.

| Displaced | To where | Why |
|---|---|---|
| Marquee ×2 (`references.astro`) | Merged to one and moved into the wedge section, or retired | The delivery stack forbids a logo wall. Two consecutive marquees is the least argument-carrying content on the page — see `component-inventory.md` |
| Standalone GTM Audit block | Becomes rung one of the engagement ladder in §7 | The audit is the ladder's entry point, so it reads better as a rung than as an isolated card |
| "Wider practice" three phases (Audit/Design/Deploy) | Absorbed into the §7 diagram | The six-step chain supersedes the three-phase list |

---

## The nine sections

### 1 — Hero

- **Purpose:** make the visitor recognise their own problem in the first sentence.
- **Argument:** more GTM activity will not fix a bad decision.
- **H1 direction:** argument-led, indicting the reader's own GTM. Decision 1 forbids the category label as H1 — "Amoris is an AI GTM practice" describes, it does not argue.
- **Honest if:** it claims nothing about outcomes. It is a claim about the reader's situation, not about Amoris's results.
- **Must not appear:** the category label as H1; "building got cheap / distribution is hard" (that is §6); any metric; any client name.
- **Note:** the current H1, *"AI GTM systems that start at the decision"*, is close but still describes what Amoris sells. The replacement should be falsifiable — something a reader could disagree with.
- **`TBD — v3/v4`:** exact H1 wording.

### 2 — The problem

- **Purpose:** name the failure precisely enough that the reader knows you have seen it.
- **Argument:** outbound fails at deciding what to say, not at sending.
- **Honest if:** it stays a claim about how outbound works, with no implied Amoris result.
- **Must not appear:** statistics about reply rates or industry benchmarks — none are measured.
- **Keep as is.** `home-content.astro:142` is already the strongest sentence on the site. Do not rewrite it.

### 3 — The wedge: evidence-led research

- **Purpose:** show the mechanism, including where it refuses.
- **Argument:** research that knows when to stop is worth more than research that always produces a message.
- **Contains:** the four-step Research → Reason → Judge → You decide cards; the HOLD panel; the four refusals.
- **Honest if:** the "14 quality checks" count is verified (`claims-vs-code.md` 1.7); HOLD stays described as a quality gate and not a correctness guarantee.
- **Must not appear:** any suggestion that sending is automated. `:46` — "Nothing is connected to your inbox and nothing is sent" — is load-bearing and matches the delivery stack's position that sending stays on the client's infrastructure.
- **Keep nearly intact.** The refusals family is a differentiator, not filler. If the engine marquee survives, it belongs here as substantiation rather than as its own section.

### 4 — Where this actually is

- **Purpose:** pre-empt the maturity question before the reader has to ask it.
- **Argument:** the boundary between shipped and in-testing is stated, not blurred.
- **Contains:** the Running / In private testing split.
- **Honest if:** tier language holds — Tier 1 plain present tense, Tier 2 hedged in the same sentence, Tier 3 future framing only.
- **Must not appear:** any Phase 2 item in present tense — dashboards, MCP server, CRM integrations, automated response classification, warehouse infrastructure.
- **Keep as is.** This section is the model voice spec §5 points other pages at. The green/stone colour coding is the visual half of the rule.

### 5 — Proof

- **Purpose:** substantiate "we think well" with something checkable.
- **Argument:** here is the work; go and read it.
- **Contains:** `intel-echo` on npm (real, shipped, publicly inspectable) and the most recent "How We'd Sell This" teardown.
- **Honest if:** every item is something a reader can open. Intel Echo qualifies today.
- **Must not appear:** client logos, testimonials, case studies, or metrics. **None exist and none may be invented.** No "trusted by" band.
- **BLOCKING:** this section cannot ship until at least one complete teardown exists. Intel Echo alone can hold it open, but the teardown is what decision 7 rests on. `/blog` currently holds one methodology article, which does not count.
- **`TBD — founder`:** which company gets the first teardown, and the cadence.

### 6 — The thesis

- **Purpose:** give the reader the worldview that explains the rest of the page.
- **Argument:** building got cheap; distribution stayed hard. Demoted from H1 to mid-page under decision 1, because it is a widely repeated claim about the market rather than about the reader.
- **Contains:** the MARKET → RETENTION chain as **one prose sentence**, not a diagram (decision 2).
- **Honest if:** framed as a position you hold, not a finding you measured.
- **Must not appear:** a second rendered diagram; the internal positioning model, which never renders.
- **`TBD — v3/v4`:** the specific framing.

### 7 — Method and engagement

- **Purpose:** show how the work runs and how someone buys it.
- **Argument:** the sequence is the same every time, and you can enter it at a small, cheap first step.
- **Contains:**
  - **The one rendered process diagram on `/`:** Diagnose → Design → Build → Test → Measure → Learn. This is the only diagram permitted on the homepage (decision 2).
  - **The commercial ladder as a list, not a diagram:** GTM Audit → first paid pilot → ongoing partnership. Reuse the existing two-card `modes` grammar from `pricing.astro:128`.
- **Honest if:** the pricing shown matches every other surface — all five (`claims-vs-code.md` §1, including `theme.config.ts`). The audit figure is **`TBD — founder`**; the pilot rung is ₹1.5–3L per the delivery stack; the partnership rung carries no figure.
- **Must not appear:** a second diagram; a rate card for build work. The existing "Why the build price is not listed" reasoning at `pricing.astro:181` is good and should be echoed here in one line.
- **Note:** the audit's own honest-limitation copy — "It is a diagnostic, not an implementation" and "makes no revenue promises" — travels with it into the ladder.

### 8 — Fit

- **Purpose:** disqualify people, visibly.
- **Argument:** this is for teams where the quality of the message still matters to whoever sends it.
- **Honest if:** the "not a fit" column stays genuinely disqualifying rather than a humblebrag.
- **Must not appear:** softening of "Anyone looking for autonomous sending — the send stays manual by design." That line is the real filter and it matches the delivery stack exactly.
- **Keep as is.** `:419` — "That first line is the real exclusion. Everything else is a scope question." — is the sharpest disqualifier on the site.

### 9 — Close

- **Purpose:** one clear next action.
- **Argument:** the intro call costs nothing and its job is to find out whether this applies at all.
- **Honest if:** what happens after the click is stated plainly.
- **Must not appear:** more than two CTAs (voice spec §7 — the current CTA band stacks **three**: audit, intro call, products, plus a founder link; that must come down); urgency devices of any kind.
- **Note:** "Its only job is to work out whether an audit is worth doing at all" is exemplary CTA copy. Keep it.

---

## Diagram budget

| Diagram | Renders on | Status |
|---|---|---|
| Diagnose→Design→Build→Test→Measure→Learn | `/` §7 | **The one permitted homepage diagram** |
| Delivery architecture (`architecture-diagram.astro`) | `/architecture` | Stays. Must not migrate to `/` |
| Commercial ladder | `/` §7 | Renders as a **list** |
| MARKET→RETENTION | `/` §6 | Renders as **one prose sentence** |
| Teardown sequence | inside teardown articles | Not on `/` |
| Positioning model | nowhere | Internal-only, never renders |

**Acceptance check:** exactly one process diagram renders on `/`.

---

## Section count

| # | Section | Origin |
|---|---|---|
| 1 | Hero | rewrite |
| 2 | The problem | keep |
| 3 | The wedge | keep, absorbs marquee |
| 4 | Where this actually is | keep |
| 5 | Proof | **new** |
| 6 | The thesis | **new** |
| 7 | Method and engagement | **new diagram**, absorbs audit block + wider practice |
| 8 | Fit | keep |
| 9 | Close | trim CTAs |

Nine. Four sections keep their existing copy nearly intact — the current site's copy is an asset, and most of the work here is structural.

---

## Before implementing

Blocked on: v3/v4 for the H1 and thesis wording; the founder for the audit figure and the first teardown. Everything else in this wireframe can be built.
