# claims-vs-code.md

Verification table for the amoris.in rework. Generated against `main` @ `a03c37c`.

## Scope — deliberately narrow

Amoris is an agency, not a SaaS vendor. This is **not** an audit of whether a capability is automated or manual; that is discovery-call territory and the offer does not depend on it.

What this file checks is the subset that can be caught out publicly:

1. **Numbers in copy** — any figure a reader could hold you to.
2. **Named external artifacts** — anything a reader can go and look at.
3. **Tier labelling** — that present-tense capability language is not applied to something in private testing.

Voice spec §5 rule applies throughout: *if a number fails verification, remove it rather than rounding it.*

Status values: `VERIFIED` (checked, true) · `TBD` (needs founder confirmation) · `CHANGE` (must change under a locked decision).

---

## 1. Numbers in copy

| # | Claim | Where | Status | Action |
|---|---|---|---|---|
| 1.1 | GTM Audit `₹15,000 – ₹25,000` + GST | `src/components/home/home-content.astro:286` | `CHANGE` | Decision 4. All **five** sites change together |
| 1.2 | Same figure | `src/pages/pricing.astro:77` | `CHANGE` | Same |
| 1.3 | Same figure, prose form "₹15,000 to ₹25,000 plus GST" | `src/content/faq-answers/en/what-does-it-cost.md:9` | `CHANGE` | Same |
| 1.4 | Same figure, prose form | `src/content/faq-answers/en/what-does-the-audit-cover.md:9` | `CHANGE` | Same |
| 1.5 | **"Engagements start with a paid GTM Audit at Rs 15,000"** | `theme.config.ts:113` (`llms.intro`) | `CHANGE` — **live inconsistency** | See below |

### The fifth occurrence, and why it is the worst one

`theme.config.ts:113` is the `llms.intro` string. `scripts/postbuild.js` renders it into **`llms.txt`**, which is what AI assistants read when asked about Amoris.

It states a **flat `Rs 15,000`**, not the `₹15,000 – ₹25,000` range every human-facing surface shows. So an assistant summarising Amoris today quotes the bottom of the range as the price — and a prospect arrives anchored to a number you did not publish.

This is exactly the "two live signals" failure decision 4 forbids, and it is invisible from the rendered site. It sits outside `src/`, which is why a `src`-scoped search misses it. **Any pricing change must include this file**, and the flat figure should become the same range as everywhere else.
| 1.6 | Audit delivered in "2-3 days" | `home-content.astro:287,434`, `pricing.astro:78`, both FAQ answers, `theme.config.ts:113` | `TBD` | Confirm this still holds at the new price point. If the audit's scope grows with the price, the duration must move with it |
| 1.7 | "Checked against **14 quality checks**" | `home-content.astro:40` | `TBD` | **The brief names this claim specifically.** It is falsifiable and precise, which is why it is good copy and why it must be right. Confirm the judge implements exactly 14. If it is a different number, use that number. If the count is unstable, describe the checks by category and drop the count |
| 1.8 | Both engagement models "ship in six weeks" | `pricing.astro:27,42,123`, `faq-answers/en/is-six-weeks-realistic.md` | `TBD` | Check against the delivery stack: if a client needs new sending domains that is a **3–4 week warmup**, which has to sit inside or beside the six weeks rather than being discovered in week two. Either the timeline accounts for it or the copy names it as a precondition |
| 1.9 | "Four weeks of post-launch iteration" (DWY) / "Eight weeks" (DFY) | `pricing.astro:32,49` | `TBD` | Confirm these are the terms you actually offer |
| 1.10 | "tested against a small number of real accounts" | `home-content.astro:265` | `VERIFIED` | Correctly vague. An unverifiable exact count would be worse. Leave as is |

### On the new pricing ladder

Decision 4 is to publish ranges consistent with the pilot ladder rather than remove numbers. The delivery-stack document supplies one figure directly — pilots at **₹1.5–3L**. It does not supply an audit price.

Required shape:

| Rung | Figure | Source |
|---|---|---|
| GTM Audit | **TBD — founder** | Not in any source document. v3 §10's objection is that ₹15,000–₹25,000 signals the wrong ICP |
| First paid pilot | ₹1.5–3L | Delivery stack, governing principle |
| Ongoing partnership | Scoped, no figure | Consistent with the existing "Why the build price is not listed" section, `pricing.astro:181` |

`pricing.astro:181-187` ("Why the build price is not listed") already does this job well and needs no change — it explains a withheld number instead of hiding it. Reuse that reasoning for the pilot rung.

**Do not write the new audit figure until the founder supplies it.** Inventing a price to fill the slot would violate the voice spec and misprice the offer.

---

## 2. Named external artifacts

| # | Claim | Where | Status |
|---|---|---|---|
| 2.1 | `intel-echo` published on npm | `home-content.astro:253`, `products.astro:18-61`, `founder.astro:51,96,128-130`, `footer-nav.astro:35` | `VERIFIED` — real, published, publicly checkable. Belongs in Proof from day one |
| 2.2 | `/intel-echo/` product page | `public/intel-echo/index.html`, linked in `footer-nav.astro:34` | `VERIFIED` — live, HTTP 200 |
| 2.3 | `/intel-echo-gtm/` product page | `public/intel-echo-gtm/index.html` | `VERIFIED` — live, HTTP 200, but **linked from nowhere on the site**. See `current-ia-map.md` |
| 2.4 | GitHub `github.com/praveenshahi` — "LangGraph, n8n, intel-echo, the research engine" | `founder.astro:128` | `TBD` — confirm those repos are public. A dead link here is worse than no link, because this page is where a sceptical reader goes to check you |
| 2.5 | Research layer "deployed and reachable as an API" | `home-content.astro:251` | `VERIFIED` against delivery stack §1, which lists FastAPI and the research layer as live |
| 2.6 | Calendly `calendly.com/praveenshahi13/30min` | `home-content.astro:308,441`, `pricing.astro:111` | `TBD` — confirm the link is live and the slot length matches "short" |
| 2.7 | WhatsApp `+91 91009 33191`, email `shahi@amoris.in` | `home-content.astro:127-128`, `pricing.astro:190-191` | `TBD` — confirm both are monitored |

---

## 3. Tier labelling

The "Running / In private testing" split at `home-content.astro:243-273` is the model the voice spec §5 tells all other pages to reuse. It is currently correct.

| # | Item | Tier | Where | Status |
|---|---|---|---|---|
| 3.1 | Research and account-analysis layer | 1 — built | `home-content.astro:251` | `VERIFIED` — plain present tense, correct |
| 3.2 | Outbound reasoning layer (hypothesis, angle, judge, HOLD) | 2 — private testing | `home-content.astro:264-266` | `VERIFIED` — hedged in the same sentence, and "not sold as a finished product" is stated. Exemplary; do not soften |
| 3.3 | MCP server for the research engine | 3 — conceptual | `home-content.astro:370` | `VERIFIED` — "is coming" is correct future framing. The delivery stack lists the MCP server as explicitly deferred to Phase 2, so this must never move to present tense |
| 3.4 | CRM integrations (HubSpot, Salesforce logos in `deliveryTools`) | 3 — Phase 2 per delivery stack | `home-content.astro:116-117` | `TBD` — logos in a marquee imply integration. The delivery stack defers CRM integrations explicitly. Either the marquee is framed as "what I build with on engagements" (which `:368` already says) or it needs to go. See open item on the marquee |
| 3.5 | Signal Scan | 3 — not built | not yet on site | Decision 3: ships human-delivered and form-gated. Must never be described as instant or automated |

### Phase 2 items that must never appear in present tense

From the delivery stack §5: custom client dashboards, the MCP server, CRM integrations, automated response classification, any additional agentic layer, warehouse/data-modelling infrastructure.

---

## Open items requiring the founder

1. The new **GTM Audit figure** (1.1–1.5).
2. Whether the judge really runs **14 checks** (1.7).
3. Whether **six weeks** survives the domain-warmup reality (1.8).
4. Confirmation of live links and monitored channels (2.4, 2.6, 2.7).
5. Whether the CRM logos in the delivery marquee overclaim (3.4).
6. What to do with `/intel-echo-gtm/` — see `current-ia-map.md`.

---

## Verification command

Pricing lives in five files across three directories, one of them outside `src/`. Always sweep the **whole repo**:

```bash
rg -n "15,000|25,000|Rs 15|Rs 25|₹" --glob '!dist/**' --glob '!node_modules/**' .
```

A `src/`-scoped search silently misses `theme.config.ts` and therefore misses `llms.txt`.
