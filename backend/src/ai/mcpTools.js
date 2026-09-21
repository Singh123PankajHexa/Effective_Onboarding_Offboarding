// MCP tool definitions the assistant's agent loop can call for live data,
// instead of the agent querying the database directly.
// See docs/ai-feature-spec.md (#4).

export const tools = {
  /** Department-wise onboarding readiness for an employee. */
  async getOnboardingReadiness(employeeId) {
    throw new Error('Not implemented: query onboarding task status by employeeId');
  },

  /** Department-wise offboarding clearance status for an employee. */
  async getClearanceStatus(employeeId) {
    throw new Error('Not implemented: query offboarding clearance status by employeeId');
  },

  /** Re-send a pending-task reminder to a department. */
  async triggerReminder(employeeId, department) {
    throw new Error('Not implemented: enqueue/send a reminder notification');
  },
};
