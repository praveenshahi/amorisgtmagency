---
publishDate: 2026-08-13
draft: false
question: 'What does Amoris build'
category: 'general'
llmsTxt: true
---

Amoris builds agentic AI systems for B2B go-to-market teams. In practice that means the whole outbound motion as one orchestrated system rather than a stack of disconnected tools:

- **Lead enrichment** - waterfall enrichment through Clay, then an LLM pass for intent signals and personalisation.
- **Qualification** - LangGraph agents that reason across multiple steps instead of making one-shot API calls.
- **Orchestration** - n8n for event-driven routing between your CRM, your data and the agents.
- **State and memory** - PostgreSQL, so conversations and decisions survive restarts and can be audited later.
- **Voice** - Retell or ElevenLabs where a call is the right channel.

Everything is self-hosted on your own infrastructure. You own the workflows, the prompts, the database and the code.
