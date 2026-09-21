// Single integration point for JusCode (model routing). Every outbound LLM
// call in this project — embeddings and agent completions — goes through
// here, so no other file hardcodes a specific model/provider.
// See docs/juscode-coverage.md for what this does and doesn't cover.

/**
 * @param {{ task: 'embedding' | 'completion', input: unknown }} request
 * @returns {Promise<unknown>}
 */
export async function routeModelCall(request) {
  throw new Error('Not implemented: wire up JusCode client here');
}
