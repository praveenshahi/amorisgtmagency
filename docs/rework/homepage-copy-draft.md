# Homepage copy draft — sections 1, 2, 4, 5

Build order step 1: the conversion spine. Checkpoint per §9 of the restructure brief. Nothing implemented yet.

Sourcing note: every factual claim below traces to existing copy on `/founder`. No new facts invented. Where the brief asked for specifics I did not have, I used the ones that are documented and attributed them to the right company.

---

## Section 1 — Hero

**Eyebrow / category line (small, secondary, above or below H1):**

> AI GTM systems for B2B revenue teams

**H1 — recommended:**

> ## Your outbound is busy. Your pipeline isn't.

**H1 — alternative, if you want the sharper accusation:**

> ## You're sending more and closing less.

**Subhead:**

> Most outbound breaks at the decision — which account, what to say, whether it's worth saying at all. I spent four years at Amazon and Meta on global data science and ML projects, and years after that carrying a revenue number. Amoris is the system that sits where those two meet.

**Primary CTA (one only):**

> Book 30 minutes → `https://calendly.com/praveenshahi13/30min`

**Micro-line under the CTA:**

> No deck. Thirty minutes on what's actually breaking in your motion.

**Notes**
- The stack chips currently under the hero (LangGraph, Tavily, OpenAI, Anthropic, FastAPI) should come out. They are a tool signal in the position where a credential signal belongs, and §1 permits one CTA and no logo strip. The stack argument now lives in section 7.
- WhatsApp drops out of the hero entirely; it survives as a secondary contact lower down.

---

## Section 2 — Recognition

No heading argument, no icons, no cards. Plain lines. The brief is explicit that format carries weight here.

**Optional lead-in (one line, small):**

> Some of this will sound familiar.

**The symptoms:**

> You are still the only person who can reliably tell whether an account is worth pursuing.
>
> The CRM says forty opportunities. You know six of them are real.
>
> Your reps send more than they did last year and book fewer meetings.
>
> Every message on the list could have gone to any company on the list.
>
> Research is the first thing dropped when the quarter gets tight.
>
> Your best customers don't look much like the ICP on your own website.

**Notes**
- Six lines, no product, no AI, no "Amoris" — per the brief, this section is entirely about them.
- I kept the brief's wording almost intact. It is already doing the specificity-over-intensity job, and rewriting it for freshness would cost precision.

---

## Section 4 — Why most AI GTM doesn't fix this

**Eyebrow:** Why the tools don't help

**H2:**

> ## The category got very good at the step that was never broken.

**Body:**

> Almost every AI GTM tool shipped in the last two years makes sending cheaper, faster and higher-volume. Sending was never the constraint. You could already send more email than anyone wanted to receive.
>
> Building an outbound tool is now a few weeks of engineering. Knowing which account is worth a conversation, and why this week rather than next quarter, is not. That judgment does not come out of a model. It comes out of having carried a number and watched which bets paid.
>
> So the scarce input in AI GTM is not model access. Everyone has the same models. It is commercial judgment — and that is the part being automated last, because it is the part almost nobody building these tools actually has.
>
> Amoris is built the other way round: the motion was run manually first, at scale, by the person who then automated it.

**Must-not-appear check:** no named competitors, no vendor disparagement, no "all AI tools are…". The claim is structural — about who builds the category and what they optimise — not about any rival.

---

## Section 5 — Who is behind this

**Eyebrow:** Who's behind this

**H2:**

> ## The judgment being automated is mine, and you can check where it came from.

**Layout:** photograph left (`/founder.png`, already on the site), copy right. Mirrors `/founder` so the identity reads consistently.

**Body:**

> **Praveen Shahi.** Four years at Amazon and Meta, on global data science and ML projects — finding patterns in systems large enough that intuition stops working and design has to take over. That is where I learned how a system is actually put together.
>
> Then I went and carried a number. At Great Learning I led a 150-person sales organisation doing $120K+ per month in net-new revenue, and built the go-to-market motion into LATAM and Africa. At CrunchPrep I scaled the business to ₹3.5Cr ARR with a team of 30 built from scratch. In both cases the job was designing the operating process, not adding headcount to a problem.
>
> More recently, at MsgKart, I built go-to-market from zero for an AI automation product sold to non-technical buyers — the hardest version of the problem. I designed the outbound stack end to end: Clay for waterfall enrichment, LLMs for personalisation, n8n for orchestration. First clients closed with one SDR and no ad spend.
>
> Most people in AI GTM have one of those two halves. The system designers have never had to explain a missed quarter. The revenue operators are waiting on an engineering team. I spent four years learning how large systems behave and years after that finding out which levers actually move revenue — so when I automate a decision, I know what it costs to get it wrong.
>
> Amoris is founder-led on purpose. The senior judgment is on your engagement directly, not delegated to a junior team — because there isn't one.

**Link:** The longer version, including what broke along the way → `/founder`

### Credential honesty — how this draft complies

| Rule | How it's handled |
|---|---|
| Stated factually | Amazon and Meta: four years, global data science and ML projects, pattern-finding and system design. Function stated, no seniority or team size attached. |
| Not endorsement | Phrased as where the work was done. Nothing suggests either company vouches for Amoris. |
| No logos | Text only. |
| No invented metrics | 150 people, $120K/month, ₹3.5Cr, 30 hires — all lifted from `/founder` and attributed to Great Learning and CrunchPrep, where they belong. |
| No team language | "there isn't one" states it outright and turns it into the argument. |

### `/founder` needs correcting too

The page currently reads: *"I spent ten years running revenue organisations - at Amazon, at Meta, and in sales leadership at Great Learning and Leverage Edu."*

That puts Amazon and Meta in the revenue-leadership bucket, which is not what the work was. The DS/ML systems work is a stronger and more differentiating credential than a vague revenue-org claim, and it is the half that makes the "I sell AI and I build the AI I sell" line on that page actually land. Same correction should apply to:

- `founder.astro` — the intro paragraph and the `2014-2023 / Operator` story beat
- `personSchema.description` — same page, feeds entity recognition in search and answer engines
- `pages.founder.description` in `en.json` — the meta description
- `theme.config.ts` `llms.intro` if it repeats the framing

---

## Decisions I need from you before step 2

**1. "Practice" or "agency"?** §8 says pick one and apply everywhere.

My recommendation: **agency**. You described the business to me as "like a marketing/sales agency", the wordmark already says AI GTM AGENCY, and it is the term a global buyer types into a search box. "Practice" is the more elegant word and fits founder-led positioning better, but it is a term of art that costs you category legibility with exactly the cold B2B buyer this restructure targets.

The catch: "agency" implies a team, which collides with §5's no-team rule. That is resolvable — "a founder-led AI GTM agency" is accurate and keeps the category word. Say the word and I'll apply it across body copy, footer, meta and structured data.

**2. H1** — recommended vs alternative above.

**3. The `/founder` Amazon/Meta phrasing** — see the flag in section 5.

---

## What happens after approval

Steps 2–5 in one pass: section 3 and 6 reordering, the integration layer, USD pricing ($500 diagnostic / $3,000 pilot), sections 8–9, and the §8 cleanup — duplicate thesis line, footer voice, CTA reduction from seven to one primary, and removing the MCP early-access CTA.
