// AI Assistant agent loop: decides whether to answer from retrieved policy
// context (embeddings.js) or call an MCP tool (mcpTools.js) for live data,
// then composes the final answer via routeModelCall (JusCode).
// See docs/ai-feature-spec.md (#1 and #3).
import { routeModelCall } from './modelRouter.js';
import { retrieveContext } from './embeddings.js';
import { tools } from './mcpTools.js';

const SYSTEM_PROMPT = `You are the Onboarding/Offboarding Assistant for this organization.
Answer only questions about onboarding, offboarding, HR policy, and related tasks.
Prefer calling a tool over guessing when the question needs current, employee-specific data.`;

/**
 * @param {string} question
 * @returns {Promise<string>}
 */
export async function runAssistant(question) {
  throw new Error(
    'Not implemented: retrieveContext -> decide answer vs. tool call (tools.*) -> routeModelCall -> compose answer'
  );
}
