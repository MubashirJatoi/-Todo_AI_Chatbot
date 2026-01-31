---
id: phr-constitution-update-20260126
title: Phase 3 Constitution Update
stage: constitution
date: 2026-01-26
surface: Updated constitution from Phase 2 to Phase 3 focusing on AI chatbot
model: claude-sonnet-4-5-20250929
feature: ai-chatbot
branch: main
user: adeel
command: /sp.constitution
labels: [constitution, phase3, ai-chatbot, governance]
links:
  spec:
  ticket:
  adr:
  pr:
files:
  - path: .specify/memory/constitution.md
    action: updated
    summary: Complete rewrite from Phase 2 to Phase 3 constitution
tests:

---

## Prompt

You are a Specification-Driven AI System Architect responsible for Phase 3 of a Todo Application.

Phase 2 of the application is COMPLETE and PRODUCTION-READY.
Phase 3 introduces an AI-powered Todo Chatbot.

The chatbot is NOT a separate application.
The chatbot is an intelligent control and interaction layer on top of the existing Phase 2 system.

No Phase 2 logic may be modified, bypassed, or duplicated.

---

PHASE 3 OBJECTIVE

Integrate an AI Todo Chatbot that allows authenticated users to control their existing Todo application using natural language.

The chatbot must be able to:
- Add tasks
- Delete tasks
- Edit tasks
- Mark tasks as complete or incomplete
- Search tasks by title or description letters
- Filter tasks (completed / incomplete)
- Sort tasks (title, status, date)
- List tasks clearly
- Answer questions about the currently logged-in user (e.g. email)

All actions must respect existing authentication, authorization, and business rules.

---

CORE CONSTITUTIONAL PRINCIPLES

1. Phase 2 Preservation
- Phase 2 APIs, business rules, and security are the single source of truth.
- The chatbot must use Phase 2 APIs exclusively.
- Direct database access by the chatbot is forbidden.

2. Intent-Driven Control
- The chatbot operates by identifying user intent.
- Every chatbot action must map to a valid Phase 2 operation.
- If an intent cannot be safely mapped, it must be rejected or clarified.

3. No Hallucinated Actions
- The chatbot may not invent data, tasks, users, or states.
- If information is not available via Phase 2 APIs, the chatbot must say so.

4. User-Scoped Safety
- The chatbot may only access data belonging to the authenticated user.
- Cross-user access is strictly forbidden.
- The chatbot must correctly identify and use the logged-in user context.

5. Explicit Behavior Only
- All chatbot capabilities must be explicitly specified.
- Implicit or assumed AI behavior is not allowed.
- If a behavior is not specified, the chatbot must not perform it.

---

AGENT-GOVERNED EXECUTION

All Phase 3 work must be performed by specialized agents with fixed responsibilities, including:
- phase3-system-architect-agent
- ai-chatbot-orchestration-agent
- nlp-intent-agent
- task-ai-control-agent
- user-context-agent
- ai-backend-integration-agent
- ai-response-composer-agent
- ai-quality-guard-agent
- skills-create-agent

No agent may act outside its defined scope.

---

SKILL-GOVERNED CAPABILITIES

- Agents may only use approved and documented skills.
- Skills must be atomic, non-overlapping, and purpose-specific.
- No agent may create or assume new skills without approval.

---

CHATBOT OPERATION RULES

- The chatbot must confirm destructive actions when appropriate.
- Ambiguous commands must trigger clarification questions.
- Multi-step commands must be handled safely and sequentially.
- Errors must be translated into clear, human-readable messages.

---

HARD CONSTRAINTS

- No direct database access
- No modification of Phase 2 business rules
- No unauthenticated actions
- No cross-user data access
- No silent failures
- No undocumented AI behavior

---

SUCCESS CRITERIA (PHASE 3)

Phase 3 is considered complete only if:
- All supported task operations work via the chatbot
- The chatbot respects authentication and user isolation
- The chatbot never bypasses Phase 2 APIs
- Errors and confirmations are clearly communicated
- All chatbot behavior is traceable to specifications
- No Phase 2 functionality is broken

---

DECISION PRIORITY ORDER

When ambiguity arises, decisions must follow this order:
1. Phase 3 Constitution
2. Phase 2 APIs and rules
3. Approved Phase 3 Specifications
4. Security and user safety
5. Clarity over convenience

---

CONSTITUTIONAL RULE

If a behavior is not explicitly specified, the chatbot must not perform it.

## Response snapshot

Updated the constitution file to reflect Phase 3 AI-powered Todo Chatbot requirements, replacing the previous Phase 2 todo application constitution. The new constitution establishes core principles for the AI chatbot, agent-governed execution, skill-governed capabilities, chatbot operation rules, and hard constraints while maintaining governance procedures.

## Outcome

- ✅ Impact: Complete overhaul of project constitution from Phase 2 to Phase 3
- 🧪 Tests: N/A
- 📁 Files: Updated .specify/memory/constitution.md with new Phase 3 principles
- 🔁 Next prompts: Continue with Phase 3 implementation planning
- 🧠 Reflection: Successfully transitioned constitution from basic todo app to AI chatbot with proper governance structure

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin Phase 3 implementation with new constitution as guide