---
publishDate: 2026-08-13
draft: false
featured: true
llmsTxt: true
title: 'How to audit your GTM motion in an afternoon'
excerpt: 'Most go-to-market problems are not tooling problems. Here is the audit we run before writing a line of automation, and how to run it yourself.'
tags: ['gtm', 'automation', 'audit']
categories: ['GTM engineering']
author:
  name: 'Praveen Shahi'
  url: 'https://amoris.in/founder'
---

Most teams asking for GTM automation do not have an automation problem. They have a motion nobody has looked at end to end in eighteen months.

So before Amoris writes a line of orchestration, we run an audit. It takes an afternoon. You can run it yourself, and you probably should before you pay anyone - including us - to build something.

## Start at the wrong end

The instinct is to start where leads enter. Start where they die instead.

Pull the last 100 lost opportunities and sort them by the stage they died in. Not the reason field - reps fill that in from a dropdown under time pressure and it is mostly fiction. The stage.

One cluster will be much larger than the others. That cluster is your actual problem, and it is rarely the one the team talks about in standup.

## The four questions

For each stage in the motion, ask:

1. **What has to be true for a lead to move forward from here?** If nobody can answer this in one sentence, the stage has no definition, and anything you automate against it will encode the confusion.
2. **Who decides, and what do they look at?** Follow the actual clicks. A rep who opens LinkedIn, the CRM, and the company's pricing page before every call is doing enrichment by hand, three times a day, forever.
3. **How long does the decision take, and how long does the wait before it take?** These are different numbers and the second is usually much larger. Waiting is where deals cool.
4. **What happens when it fails?** Most motions have no answer. Leads that fall out do not get routed anywhere - they just stop existing.

## What you are looking for

Three patterns show up in almost every audit:

**Humans as glue.** Someone copies a field from one system to another. Someone re-types a summary into the CRM. Every one of these is a queue with a person in it, and queues with people in them fail at exactly the moment volume goes up.

**Qualification that happens too late.** If the first real fit check is on a call, you are paying calendar time to learn something a research step could have told you for a fraction of a cent. This is the single most expensive pattern in B2B outbound.

**Signals nobody acts on.** Almost every team is sitting on intent data - pricing page visits, hiring signals, funding news - that reaches nobody in time to matter. Not a data problem. A routing problem.

## Write it down, then stop

Write one page: the stages, the biggest death cluster, and the three worst instances of humans-as-glue. Rank by how much time they cost per week.

Then stop, and resist building for a moment.

Because here is the thing worth knowing before you automate: **automating a broken stage makes it break faster.** If qualification has no definition, a LangGraph agent will apply the confusion at machine speed and hand you a hundred confidently wrong decisions instead of five slow ones. Fix the definition first. It is free.

## When automation is the right answer

Once the map is on paper, the automation cases are usually obvious - and there are fewer of them than anyone expects. The recurring ones:

- **Enrichment before the human.** Deterministic lookup first, then an LLM pass for intent signals. It moves fit checking off the calendar and into the pipeline.
- **Multi-step qualification.** Real qualification is reasoning across several pieces of evidence, which is why one-shot prompts do it badly and LangGraph-style agents do it well.
- **Routing on signals.** Not more dashboards. A system that watches for the signal and puts it in front of the person who can act, while it still matters.

Everything else on your list is probably a process fix wearing an automation costume.

## Then get it out of your head

The reason to write the audit down is not diligence theatre. It is that the map becomes the spec. Every component we build traces back to a specific line on that page, which is what stops a GTM system from turning into a pile of clever parts that nobody can explain six months later.

If you would rather not run it alone, [book the audit](https://calendly.com/praveenshahi13/30min). It takes an hour or two, and you keep the written map whether or not we build anything.
