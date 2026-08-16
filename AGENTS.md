# AGENTS.md — Amoris (amoris.in)

Instructions for any AI agent working in this repository. Read this before touching a file.

## What this is

The website for **Amoris**, a founder-led AI GTM practice run by Praveen Shahi. Single operator, no team.

This repo was built on the Stardrive Astro boilerplate. **That boilerplate's onboarding flow is gone and does not apply.** There is no `STARDRIVE_AGENT_MODE.md`, no `.ai/` directory, no `PLAN.md` setup ritual. This is a live production site, not an uninitialised starter. If you find instructions telling you to run a boilerplate setup, they are stale — ignore them.

## Stack

- Astro 5, `output: 'static'`
- Tailwind 4
- Content collections: `src/content/articles/en`, `src/content/faq-answers/en`
- Config: `astro.config.ts`, `theme.config.ts`

```bash
npm run dev      # local dev server
npm run build    # static build to dist/
npm run check    # astro check + tsc + eslint + prettier
```

## Deployment — do not guess

`amoris.in` serves from **nginx on a VM**, not from the Cloudflare worker this boilerplate ships with. There is **no deploy workflow in this repo**. Deployment is manual and owned by the founder.

**Never deploy. Never SSH. Never modify VM state.** Build locally, serve locally, and hand the result over for review. Live nginx 301 rules are documented in the separate `AMORISGTM` repo's `DEPLOY-NGINX.md` and are still in force — changing routes here can break them.

## Copy is governed by a voice specification

All copy work is bound by the Amoris voice & copy specification. The rules that get violated most often:

- **Argue, don't describe.** Short declaratives that make a falsifiable claim. Section headings are full sentences that claim something, not noun labels.
- **State limitations as plainly as capabilities.** Wherever a capability is described, "and what does it not do?" must be answered in the same section. This is the primary trust mechanism.
- **Adjectives carry no persuasive load.** If removing an adjective loses no information, remove it.
- **Mechanism over benefit.** Prefer "the source behind each observation" to "higher quality".
- **Maturity lives in the verbs.** Tier 1 (built) gets plain present tense. Tier 2 (private testing) must be hedged in the same sentence. Tier 3 (conceptual) gets future or intent framing only — never present-tense capability.
- **Founder-led, singular.** No "our team", "our engineers", "our analysts". No "our clients" until there are multiple external clients whose work can be described.
- **No urgency devices**, no guarantees of meetings or pipeline, no invented numbers, no fabricated logos or testimonials.

Banned outright: "unlock", "supercharge", "revolutionize", "10x", "AI-powered" as a value claim, "AI SDR", "autonomous agents", "seamless", "turnkey", "end-to-end solution", "leverage" as a verb, scene-setting preamble, "we're excited to".

Also banned is the quieter failure: **claim-shaped sentences with no content.** Test every sentence by asking whether a competitor could paste their own name in unchanged. If yes, rewrite it.

### Existing copy that must not regress

This site's current copy is an asset. Preserve these and anything in the same family:

- "Outbound rarely fails at sending. It fails at deciding what to say."
- "HOLD is a quality gate, not a correctness guarantee. It reduces the chance of sending something unsupported. It cannot tell you a message is right."
- "It does not know who will buy. It assesses whether there is a defensible reason to start a conversation. That is a smaller and more honest question than intent scoring."
- "Built for teams where outbound still carries someone's name."
- "Stated plainly, because you will ask on the first call anyway."

The "It will not manufacture confidence" refusal family in `src/components/home/home-content.astro` is a differentiator, not filler. Do not cut it for space.

## Locked decisions

Binding. Do not relitigate without the founder.

| # | Decision |
|---|---|
| 1 | The H1 is argument-led and indicts the visitor's own GTM. The category label is never the H1. The "building got cheap / distribution is hard" thesis is a mid-page section and a `/founder` worldview — not the hero. |
| 2 | **Exactly one rendered process diagram on `/`**: Diagnose→Design→Build→Test→Measure→Learn. The commercial ladder renders as an engagement list. Other chains are prose or internal-only. |
| 3 | The Signal Scan is human-delivered and form-gated. No unmetered public inference. |
| 4 | Pricing is published as ranges consistent with the pilot ladder. The old `₹15,000–₹25,000` audit figure is replaced everywhere at once, never left alongside a second signal. |
| 5 | Nine homepage sections, hard ceiling. New ideas displace; they do not append. |
| 6 | Phase 1 is the existing route set, consolidated. No new page tree. |
| 7 | The site's centre of gravity is "we think well", not "we build systems". |

## Amoris is an agency, not a SaaS vendor

Do not audit the site for whether a capability is automated or manual, and do not soften the offer to match implementation detail. Clarity of the offer is what converts paid pilots; mechanics are settled in discovery calls. What still must be true: any **number** in copy, and any **named external artifact**, has to be real and checkable.

`intel-echo` is real and published on npm. Two static product pages ship from `public/` and are live but unlinked from the nav: `/intel-echo/` and `/intel-echo-gtm/`.

## Working conventions

- Match the surrounding code. `home-content.astro` keeps its copy in typed arrays at the top of the file with a comment explaining the discipline — follow that pattern rather than inlining strings.
- Content changes to FAQ answers go in `src/content/faq-answers/en/*.md`, not in page components.
- Run `npm run check` before considering work done.
