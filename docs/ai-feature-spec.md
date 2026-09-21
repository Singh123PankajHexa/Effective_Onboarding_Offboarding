# AI Assistant Feature Spec

## Purpose

An in-app AI Assistant that HR, IT, Admin, and employees can ask about onboarding/offboarding status, policies, and tasks — in natural language, instead of hunting through the dashboard. This feature is also the deliberate vehicle for practicing the five AI certification topics: Agents, MCP, Embeddings, Vector Database, and Prompting. Each concept below maps to a real file in `backend/src/ai/`.

## 1. Prompting — `backend/src/ai/agent.js`

- A system prompt scopes the assistant strictly to HR/IT/onboarding/offboarding topics for this organization (no general-purpose chit-chat).
- Prompts distinguish two response modes: **answer from policy** (retrieval) vs. **take/check an action** (tool call), so the model is instructed on when to call a tool rather than hallucinate an answer.

## 2. Embeddings + Vector Database — `backend/src/ai/embeddings.js`

- Source documents: HR policy docs, onboarding SOPs, offboarding clearance checklists.
- Pipeline: chunk documents → generate embeddings → store in a `document_embeddings` table (Postgres + pgvector).
- Retrieval: on a user question, embed the query, run a similarity search (`<=>` operator in pgvector) against `document_embeddings`, and feed the top matches into the prompt as context (RAG).

## 3. Agents — `backend/src/ai/agent.js`

- The assistant is not a single prompt/response call — it runs an agent loop that can:
  1. Answer directly from retrieved policy context, or
  2. Decide a question needs live data (e.g. "what's still pending for my exit clearance?") and call an MCP tool instead, then compose the final answer from the tool result.
- Keeps the agent loop simple and inspectable (a small explicit loop, not a black-box framework) so it's clear where MCP tools plug in and where JusCode's model routing plugs in.

## 4. MCP (Model Context Protocol) — `backend/src/ai/mcpTools.js`

- Internal task/status lookups are exposed as MCP tools rather than hardcoded function calls, so the same tools are reusable by any MCP-compatible client later:
  - `getOnboardingReadiness(employeeId)` — department-wise readiness status.
  - `getClearanceStatus(employeeId)` — offboarding clearance status per department.
  - `triggerReminder(employeeId, department)` — re-sends a pending-task reminder.
- The agent (§3) calls these as tools during its loop instead of querying the database directly — this is the piece of the certification track (MCP) this project exists to practice.

## 5. Model Routing — `backend/src/ai/modelRouter.js` (JusCode)

- All outbound LLM calls (embedding generation, agent reasoning) go through this single module.
- JusCode picks the appropriate model per call — e.g. a cheap/fast model for a simple policy lookup, a stronger model for multi-step agent reasoning with tool calls — so the rest of the codebase never hardcodes a specific model or provider.
- See `docs/juscode-coverage.md` for the precise boundary of what JusCode does and doesn't touch in this project.

## Out of scope for the initial scaffold

Full conversational memory, streaming responses, and a polished chat UI are not part of this pass — the scaffold stubs these files so the architecture is in place; the actual model/tool/embedding logic is implemented in a later session.
