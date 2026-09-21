# Employee Onboarding & Offboarding Management System

A centralized system for the full employee lifecycle — candidate approval through onboarding to exit clearance — automating approvals, department task assignment, notifications, reminders, and dashboards across Recruitment, HR Operations, IT, Admin, and Finance.

This project also serves as the hands-on build for an AI certification track (Agents, MCP, embeddings, vector databases, prompting), via an AI Assistant feature described in [docs/ai-feature-spec.md](docs/ai-feature-spec.md).

## Docs

- [docs/PRD.md](docs/PRD.md) — full product requirements
- [docs/tech-stack.md](docs/tech-stack.md) — frontend/backend/AI stack and rationale
- [docs/ai-feature-spec.md](docs/ai-feature-spec.md) — AI Assistant feature spec (agents, MCP, embeddings, vector DB, prompting)
- [docs/access-matrix.md](docs/access-matrix.md) — role × module permission matrix
- [docs/learning-plan.md](docs/learning-plan.md) — AI certification checklist mapped to this codebase
- [docs/juscode-coverage.md](docs/juscode-coverage.md) — what the JusCode model-router does/doesn't cover here

## Structure

```
frontend/   React (JS, Vite) — UI
backend/    Node.js (Express) + PostgreSQL — API, workflows, AI Assistant
```

## Getting started

### Frontend
```
cd frontend
npm install
npm run dev
```

### Backend
```
cd backend
cp .env.example .env   # fill in DATABASE_URL and other values
npm install
npm run dev
```

Backend health check: `GET http://localhost:4000/health`

## Status

Initial scaffold — folder structure, stub routes/pages, and documentation are in place. Business logic (recruitment/onboarding/offboarding workflows) and the AI Assistant's real logic (embeddings pipeline, MCP tools, agent loop, JusCode integration) are implemented in follow-up work — see [docs/ai-feature-spec.md](docs/ai-feature-spec.md) and [docs/learning-plan.md](docs/learning-plan.md) for the plan.
