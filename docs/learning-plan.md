# AI Certification Learning Plan

Each topic is paired with the concrete place it's practiced in this repo, so studying stays grounded in a working example rather than staying abstract.

| Topic | Concept to learn | Practiced in | Status |
|---|---|---|---|
| Prompting | System prompts, scoping/guardrails, few-shot examples, response-mode instructions (answer vs. act) | `backend/src/ai/agent.js` — assistant system prompt | Not started |
| Embeddings | Chunking strategy, embedding generation, similarity metrics | `backend/src/ai/embeddings.js` — policy doc embedding pipeline | Not started |
| Vector Database | Schema design for vectors, indexing (ivfflat/hnsw), similarity queries | `docs/tech-stack.md` (pgvector decision) + `backend/src/ai/embeddings.js` | Not started |
| Agents | Agent loop design, deciding when to retrieve vs. act, composing tool results into a final answer | `backend/src/ai/agent.js` | Not started |
| MCP | Defining tools with schemas, exposing internal operations as MCP-callable, tool-calling from an agent | `backend/src/ai/mcpTools.js` | Not started |

## Suggested order

1. **Prompting** first — write and iterate on the assistant's system prompt before any retrieval or tools exist, using canned/static context.
2. **Embeddings + Vector Database** together — build the ingestion pipeline and pgvector schema, verify retrieval quality on a handful of test questions.
3. **MCP** — define and test the internal tools in isolation (call them directly) before wiring them into the agent.
4. **Agents** last — combine retrieval + MCP tools into the agent loop, since it depends on all of the above being in place.

Update the Status column as each piece is implemented.
