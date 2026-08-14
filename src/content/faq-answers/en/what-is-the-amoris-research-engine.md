---
publishDate: 2026-08-13
draft: false
question: 'What is the Amoris research engine'
category: 'products'
llmsTxt: true
---

It is an evidence-led GTM research system. You give it one company; it researches that company live, works out whether there is a defensible commercial reason to start a conversation, and produces a structured read with the source behind each observation. If an outbound message is warranted it will draft one and check its own draft — but the research output stands on its own, and sending is optional, manual and yours.

The pipeline is **Research → Reason → Judge → your decision**, and it is built on LangGraph.

Four things make it behave differently from most AI sales tooling:

- **Evidence discipline.** Every factual claim about the company must trace back to something found in the research. Anything resting on inference is written as curiosity, not as a diagnosis.
- **HOLD is a feature.** It can stop before writing anything if the evidence will not support a credible argument, and stop again after writing if a claim cannot be traced. Most tools in this category always produce a message.
- **Signal-first, not template-first.** The argument changes per company, not just the merge field with their name in it.
- **Human decides.** Nothing is connected to your inbox. Nothing is sent automatically.

**Where it actually is:** the research and analysis layer is deployed and running. The outbound reasoning layer — hypothesis, message angle, the judge and HOLD — is built and in private testing against a small number of real accounts. It is not yet deployed alongside the research layer, and it is not sold as a finished product.
