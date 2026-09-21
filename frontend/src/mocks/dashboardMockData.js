// Mock payload shaped like the response the real dashboard endpoint(s) will return.
// Field names follow the PRD's planned schema (department, status, dueDate/DOJ/LWD,
// clearance) so swapping this for a live fetch later is a data-source change only.

export const dashboardMockData = {
  kpis: {
    onboardingReadiness: { value: 82, target: 95, unit: 'percent' },
    accessRevokedByLwd: { value: 94, target: 100, unit: 'percent' },
    fnfWithPendingClearance: { value: 2, target: 0, unit: 'count' },
  },

  departments: [
    { name: 'IT', onboardingReadiness: 90, offboardingClearance: 60 },
    { name: 'Admin', onboardingReadiness: 75, offboardingClearance: 85 },
    { name: 'HR Ops', onboardingReadiness: 100, offboardingClearance: 100 },
  ],

  upcomingEvents: [
    { id: 'ev-1', employeeName: 'Riya Kapoor', type: 'DOJ', department: 'IT', date: '2026-09-23', status: 'ready' },
    { id: 'ev-2', employeeName: 'Sameer Vora', type: 'LWD', department: 'Admin', date: '2026-09-24', status: 'pending', pendingCount: 2 },
    { id: 'ev-3', employeeName: 'Neha Iyer', type: 'DOJ', department: 'HR Ops', date: '2026-09-25', status: 'ready' },
    { id: 'ev-4', employeeName: 'Arjun Mehta', type: 'LWD', department: 'IT', date: '2026-09-26', status: 'not_started' },
  ],

  departmentMatrix: [
    {
      department: 'IT',
      scope: 'Access, hardware, accounts',
      onboardingTasks: { completed: 9, total: 10 },
      offboardingClearance: { completed: 3, total: 5 },
      overdueCount: 1,
      status: 'attention',
    },
    {
      department: 'Admin',
      scope: 'Workspace, ID card, assets',
      onboardingTasks: { completed: 6, total: 8 },
      offboardingClearance: { completed: 6, total: 7 },
      overdueCount: 2,
      status: 'attention',
    },
    {
      department: 'HR Ops',
      scope: 'Policy, payroll, induction',
      onboardingTasks: { completed: 6, total: 6 },
      offboardingClearance: { completed: 4, total: 4 },
      overdueCount: 0,
      status: 'on_track',
    },
  ],

  departmentOpenItems: {
    IT: [
      { id: 'it-1', title: 'Laptop handover — Riya Kapoor', kind: 'Onboarding', assignedTo: 'Vikram', status: 'done' },
      { id: 'it-2', title: 'Revoke VPN access — Arjun Mehta', kind: 'Offboarding', assignedTo: 'Priya', status: 'not_started' },
      { id: 'it-3', title: 'Email deactivation — Arjun Mehta', kind: 'Offboarding', assignedTo: 'Priya', status: 'in_progress' },
    ],
  },

  clearanceFunnel: [
    { label: 'Exit notified', count: 14 },
    { label: 'Clearance in progress', count: 9 },
    { label: 'Fully cleared', count: 5 },
    { label: 'FnF released', count: 3 },
  ],

  overdueTasks: [
    { id: 'ot-1', title: 'Revoke VPN access', employeeName: 'Arjun Mehta', department: 'IT', status: 'blocked', overdueDays: 1 },
    { id: 'ot-2', title: 'Return company ID card', employeeName: 'Sameer Vora', department: 'Admin', status: 'pending', overdueDays: 3 },
    { id: 'ot-3', title: 'Desk & asset checklist', employeeName: 'Sameer Vora', department: 'Admin', status: 'pending', overdueDays: 3 },
    { id: 'ot-4', title: 'Laptop handover', employeeName: 'Neha Iyer', department: 'HR Ops', status: 'not_started', overdueDays: 5 },
  ],
};
