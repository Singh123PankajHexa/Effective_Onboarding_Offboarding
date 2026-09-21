// Embedding generation + pgvector similarity search over HR policy /
// onboarding-offboarding SOP documents. See docs/ai-feature-spec.md (#2)
// and docs/learning-plan.md.
import { routeModelCall } from './modelRouter.js';
import { pool } from '../config/db.js';

/**
 * Chunk a document and store its embeddings in the `document_embeddings`
 * table (Postgres + pgvector). Schema/migration not yet created.
 */
export async function ingestDocument(text, metadata) {
  throw new Error('Not implemented: chunk, embed via routeModelCall, store in pgvector');
}

/**
 * Embed a query and return the top-k most similar document chunks.
 */
export async function retrieveContext(query, topK = 5) {
  throw new Error('Not implemented: embed query via routeModelCall, run pgvector <=> search');
}
