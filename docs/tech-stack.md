# Tech Stack

## Frontend

- **React (JavaScript, no TypeScript)** — as specified for this project.
- **Vite** as the build tool/dev server — faster dev startup and HMR than CRA, minimal config.
- **React Router** for page navigation (Dashboard, Recruitment, Onboarding, Offboarding, AI Assistant).

## Backend

- **Node.js + Express** — lightweight, unopinionated, fast to scaffold; keeps the whole stack in JavaScript so the AI Assistant's agent/embedding code shares language and tooling with the rest of the API.
- **PostgreSQL** — relational store for candidates, employees, department tasks, clearance records, audit trail. Strong fit for the approval-workflow and readiness-tracking data model in the PRD.

## AI / Vector Store

- **pgvector** (PostgreSQL extension) for embedding storage and similarity search, instead of a separate vector database service.
  - Rationale: avoids standing up and operating a second piece of infrastructure (e.g. Pinecone/Weaviate) for a project of this scale; keeps policy-document embeddings transactionally close to the rest of the app's data; still exercises the "vector database" certification topic in full (schema, indexing, similarity queries).
- **JusCode** as the model-routing layer for every LLM call made by the AI Assistant (see `juscode-coverage.md` for exactly what this does and doesn't cover).

## Notifications

- Email (SMTP or a transactional provider, e.g. SendGrid/SES — to be decided at implementation time).
- Microsoft Teams webhook/Graph API integration (per PRD's "Good to Have").
- In-app notifications stored in Postgres, pushed to the frontend via polling or WebSockets (to be decided).

## Why not alternatives considered

- **.NET/SQL Server**: would fit a Microsoft-standardized shop (and pairs naturally with the PRD's AD/Teams integrations), but the user's FE/BE choice (React + Node.js) already commits to a JS-first stack.
- **Python/FastAPI**: strongest AI/ML ecosystem, but splits the stack across two languages for no functional gain here — Node's AI SDKs (for agents, embeddings, MCP) are equally capable for this scope.
