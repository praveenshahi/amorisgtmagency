---
publishDate: 2026-08-13
draft: false
question: 'What does Amoris build'
category: 'general'
llmsTxt: true
---

Two related things, and it is worth keeping them apart.

**The research engine.** An evidence-led system that researches one account at a time, decides whether there is a defensible reason to start a conversation, and can stop when there isn't. It runs on LangGraph, with Tavily for live web research and an LLM provider for the reasoning, exposed as an API. The research layer is deployed; the outbound reasoning layer is in private testing.

**The wider automation practice.** Designing and building the GTM automation layer around a revenue team, on the stack that team already runs — n8n for orchestration, Clay for enrichment, PostgreSQL for state, and integration into whatever the CRM and comms tooling happens to be.

The first is the sharp end and the reason to start a conversation. The second is the broader engagement most teams end up needing.

Everything is built to be handed over: it runs on your infrastructure, and it is documented so your team can change it without Amoris.
