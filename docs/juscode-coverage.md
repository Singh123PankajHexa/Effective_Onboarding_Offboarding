# What JusCode Covers in This Project

JusCode is a model-routing tool: it picks the best underlying model for a given task so the calling code doesn't have to hardcode or manually choose a provider/model. It is **not** a framework, database, or application layer — it only sits at the point where this project makes an actual LLM call.

## Covered by JusCode

- `backend/src/ai/modelRouter.js` — the single integration point. Every outbound model call from the AI Assistant goes through here:
  - Embedding generation calls (from `embeddings.js`)
  - Agent reasoning / tool-calling completions (from `agent.js`)
- Model selection trade-offs: e.g. a cheaper/faster model for a simple FAQ-style lookup vs. a stronger model when the agent is doing multi-step reasoning with tool calls.
- Any future addition of a new LLM-backed capability in this project (e.g. summarizing a document) would also route through this same module.

## Not covered by JusCode

- **Business workflow logic** — recruitment approval, onboarding/offboarding task state machines, FnF gating: plain application code in `backend/src/controllers` and `backend/src/routes`.
- **Database access** — Postgres queries/schema, including the pgvector similarity search itself (JusCode routes the *model call* that produces an embedding; the vector search query against Postgres is plain SQL).
- **Authentication/authorization** — role/permission enforcement (`docs/access-matrix.md`) is ordinary backend logic, unrelated to model choice.
- **MCP tool definitions** — `backend/src/ai/mcpTools.js` defines what a tool does and its schema; JusCode has no role in that — it only affects which model is used when the agent *decides* to call a tool.
- **Frontend** — React UI, routing, and rendering have no LLM calls and therefore never touch JusCode.
- **Notifications** — email/Teams/in-app notification delivery is unrelated infrastructure.

## Rule of thumb

If a piece of code makes an LLM API call, it goes through JusCode. If it doesn't call a model, JusCode is irrelevant to it — including code that's part of the "AI feature" conceptually (like the MCP tool's own implementation) but doesn't itself call a model.
