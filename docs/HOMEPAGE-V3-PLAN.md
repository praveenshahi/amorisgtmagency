# Homepage v3 — "Audit before you automate"

For review. Nothing implemented. Supersedes the positioning section of `PROJECT.md` on approval.

---

## What changes and why

The current homepage argues the diagnosis thesis correctly but **leads with philosophy instead of offer**. The H1 — "You're probably solving the wrong problem" — makes a buyer parse a worldview before learning what Amoris sells. That is the substance behind the "proposition is confusing" feedback, and it is worth taking as communication signal even if the critic misread the strategy.

Three concrete gaps, verified against the live site:

| Gap | Evidence |
|---|---|
| No stated business outcome | `qualified meeting`, `meetings`, `demo`, `booked`, `bookings` — **zero occurrences sitewide** |
| The enemy is unnamed | `premature` — zero occurrences |
| ICP is vague | "teams where outbound still carries someone's name" does not say *already has a GTM motion* |

The fix is not a new strategy. It is the same strategy said plainly, with the outcome attached.

---

## The repositioning

**Enemy: premature automation.** Not manual sales. The market is incentivised to say "you have an SDR problem, here is an AI SDR." Amoris says: *maybe — let's find out first.*

**Category: an AI GTM agency that diagnoses before it automates.** Not an AI SDR company. The lead-to-demo system is the *output* of a diagnosis, not the product.

**Outcome: more qualified meetings, not more automation.** This must appear above the fold and recur.

**ICP: companies that already have a GTM motion** and want lead → demo conversion to improve. Not pre-PMF founders looking for a first motion.

### The sequence the page must make obvious

> You already have a GTM motion → I audit it → we find where pipeline is actually leaking → we establish what your stack is ready for → we build only that → we measure qualified bookings.

### HOLD, unified

The best idea in this revision. The same principle operates at two levels:

- **Before building:** do not automate until the audit supports it.
- **Inside the system:** do not reach out until the account evidence supports it.

That turns HOLD from a product feature into the company's philosophy, stated once and demonstrated twice. It should be said explicitly in the system section.

---

## Naming decision needed

The H1 is "Audit before you automate", but I renamed the first engagement rung to **GTM Diagnostic** earlier today. Those now fight each other.

**Recommendation: revert to "GTM Audit".** It is the more legible term for a buyer, it matches the H1, and "audit before you automate" only works if the thing you sell is called an audit. This reverses my own earlier change — that change was wrong once the H1 became audit-led.

Affected: `pricing.astro`, `home-content.astro`, two FAQ answers, `theme.config.ts` (`llms.intro`, `askAiTrigger`), `en.json` pricing description. Five surfaces plus config, changed together.

---

## Nine sections

| # | Section | Job |
|---|---|---|
| 1 | **Audit before you automate** | Offer, outcome and ICP in one screen |
| 2 | Recognition | 4–5 symptom lines, now including lead→demo leakage |
| 3 | **Premature automation** | The enemy, named. Holds the thesis line — once |
| 4 | **The sequence** | The one diagram, ending in qualified bookings |
| 5 | Who's behind this | Unchanged. Both halves, five domains, the working model |
| 6 | How the judgement scales | The system. **HOLD at two levels stated here** |
| 7 | Your stack, and what it's ready for | Integration layer + technology readiness + client-hosted |
| 8 | Fit | Sharpened: already has a motion |
| 9 | One action | Book the audit |

Nine is still the ceiling. Sections 3 and 4 of the current page merge into the new section 3, which is what makes room.

### Section 1 — Hero

- **H1:** Audit before you automate.
- **Subhead direction:** *You already have a GTM motion. I audit it — the motion, the data, the stack — and find where lead-to-demo is actually leaking. Then we build only what the audit supports. The goal is more qualified meetings, not more automation.*
- **Category line:** A founder-led AI GTM agency.
- One CTA: Book 30 minutes. Micro-line unchanged.
- **Out:** the philosophy-first framing. "You're probably solving the wrong problem" moves to section 3 where it belongs as the argument, not the greeting.

### Section 3 — Premature automation

Merges the current "why this happens" and "why the category doesn't fix this". Contains:

- The thesis line, once: *outbound rarely fails at sending, it fails at deciding what to say.*
- The market's incentive: tools assume the diagnosis is done, agencies sell execution in one lane, both are built by single-domain people.
- The named enemy: **premature automation** — automating a bottleneck nobody confirmed, then blaming the tool.
- The counter-position: *maybe you do have an SDR problem. Let's find out before spending six weeks on it.*

### Section 4 — The sequence

Replaces the current Diagnose→Design→Build→Test→Measure→Learn chain with the sequence that ends in the outcome:

**Audit → Diagnose → Readiness → Build → Deploy → Qualified bookings**

Still exactly one rendered diagram on `/`. "Readiness" is a distinctive step worth keeping visible — it is a real audit output and nobody else names it.

### Section 7 — Stack and readiness

Existing seven-layer text treatment, plus two additions the analysis surfaced:

- **Technology readiness** as an explicit audit output: some companies are not ready to integrate, and saying so is part of the value.
- **Client-hosted for data privacy** — runs on your server. This is already true and already on `/data-and-ip`; it belongs on the homepage where the objection actually occurs.

---

## What does not change

- Nine-section ceiling, one diagram, thesis line once.
- Founder section, the five domains, abstract scale not company-attributed validation.
- First person singular. No team. No invented client results.
- USD ladder, no ceilings. One primary CTA.
- The voice specification and the tense rule.
- Nothing auto-sends.

---

## Sitewide follow-through

| Target | Change |
|---|---|
| `theme.config.ts` | `llms.intro` and `askAiTrigger` — audit-first framing, the outcome, "GTM Audit" naming |
| `en.json` | Home title/description, pricing description, meta slogans |
| `/pricing` | "GTM Audit" naming, outcome stated |
| FAQ answers | Two carry the naming |
| `/products` | Naming |
| `PROJECT.md` | Rewrite the positioning section so future sessions inherit v3, not v2 |

---

## One caution

The outcome claim — "more qualified meetings" — is a **promise about results**, and the site currently makes none. That is deliberate: there are no client engagements yet, and the voice spec forbids guarantees.

Write it as the **goal of the work**, never as a guaranteed result. "The goal is more qualified meetings, not more automation" is safe. "We book you qualified meetings" is not, and would be the first unsupported claim on the site.

---

## Open question

**Audit or Diagnostic?** I recommend Audit, and it reverses a change I made today. Confirm and I will apply it across all five surfaces plus config in one pass.
