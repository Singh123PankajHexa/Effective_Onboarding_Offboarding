# Models / Schema

No ORM chosen yet — plain SQL via `pg` (see `../config/db.js`). Migrations to be added here once the schema is defined.

Tables anticipated from the PRD and AI feature spec:

- `candidates`, `employees` — recruitment through employee record.
- `onboarding_tasks`, `offboarding_tasks` — department-wise task rows (IT/Admin/HR Ops), status, reminders.
- `clearance_records` — offboarding clearance per department, gating FnF.
- `document_embeddings` — `id`, `content`, `embedding vector(n)`, `metadata jsonb` (requires `CREATE EXTENSION IF NOT EXISTS vector;` — see docs/tech-stack.md).
