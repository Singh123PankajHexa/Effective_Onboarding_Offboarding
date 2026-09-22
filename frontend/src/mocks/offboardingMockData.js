// Mock payload shaped like the response the real offboarding endpoint(s) will return.
// Swapping this for a live fetch later is a data-source change only (see offboardingApi.js).

export const offboardingMockData = {
  kpis: {
    activeExitsMtd: { value: 14, planned: 18 },
    clearancesCompleted: { completed: 71, total: 112 },
    overdueClearances: { value: 9 },
    avgClearanceDays: { value: 6.4, target: 5 },
    fnfReady: { ready: 5, total: 14 },
    exitsThisWeek: { value: 4, confirmed: 2, pending: 2 },
  },

  departments: [
    { name: 'IT & Assets', completed: 22, total: 32, target: 90 },
    { name: 'Finance & Payroll', completed: 26, total: 30, target: 90 },
    { name: 'Admin & Facilities', completed: 18, total: 20, target: 85 },
    { name: 'HR & Compliance', completed: 15, total: 18, target: 90 },
  ],

  exitingEmployees: [
    { id: 'e1', name: 'Devansh Rao', role: 'QA Engineer', reportingManager: 'Arjun Mehta' },
    { id: 'e5', name: 'Rohan Kapoor', role: 'Software Engineer', reportingManager: 'Priya Nair' },
    { id: 'e6', name: 'Ananya Bhatt', role: 'Admin Coordinator', reportingManager: 'Sana Iqbal' },
  ],

  ktOwners: ['Priya Nair', 'Arjun Mehta', 'Neha Joshi', 'Sana Iqbal'],

  recentLwdConfirmations: [
    { id: 'lc1', employeeName: 'Kabir Singh', lwd: '2026-09-30' },
    { id: 'lc2', employeeName: 'Farah Sheikh', lwd: '2026-10-03' },
  ],

  clearanceItems: [
    { id: 'ci1', title: 'Revoke email & AD account', department: 'IT & Assets', employee: 'Devansh Rao', owner: 'IT Helpdesk', dueDate: '2026-10-14', priority: 'high', status: 'done' },
    { id: 'ci2', title: 'Recover laptop & accessories', department: 'IT & Assets', employee: 'Devansh Rao', owner: 'IT Helpdesk', dueDate: '2026-10-15', priority: 'high', status: 'in_progress' },
    { id: 'ci3', title: 'Revoke VPN & repo access', department: 'IT & Assets', employee: 'Devansh Rao', owner: 'IT Security', dueDate: '2026-10-15', priority: 'high', status: 'not_started' },
    { id: 'ci4', title: 'Recover laptop & accessories', department: 'IT & Assets', employee: 'Kabir Singh', owner: 'IT Helpdesk', dueDate: '2026-09-30', priority: 'high', status: 'done' },
    { id: 'ci5', title: 'Revoke email & AD account', department: 'IT & Assets', employee: 'Kabir Singh', owner: 'IT Helpdesk', dueDate: '2026-09-30', priority: 'high', status: 'done' },
    { id: 'ci6', title: 'Settle pending expense claims', department: 'Finance & Payroll', employee: 'Devansh Rao', owner: 'Finance Team', dueDate: '2026-10-16', priority: 'medium', status: 'not_started' },
    { id: 'ci7', title: 'Loan / advance clearance', department: 'Finance & Payroll', employee: 'Devansh Rao', owner: 'Finance Team', dueDate: '2026-10-16', priority: 'high', status: 'blocked' },
    { id: 'ci8', title: 'Final payroll computation', department: 'Finance & Payroll', employee: 'Kabir Singh', owner: 'Payroll Team', dueDate: '2026-10-02', priority: 'high', status: 'in_progress' },
    { id: 'ci9', title: 'ID card & access badge return', department: 'Admin & Facilities', employee: 'Devansh Rao', owner: 'Admin Desk', dueDate: '2026-10-15', priority: 'medium', status: 'not_started' },
    { id: 'ci10', title: 'Parking / transport de-enrollment', department: 'Admin & Facilities', employee: 'Kabir Singh', owner: 'Admin Desk', dueDate: '2026-09-30', priority: 'low', status: 'done' },
    { id: 'ci11', title: 'Exit interview', department: 'HR & Compliance', employee: 'Devansh Rao', owner: 'Neha Joshi', dueDate: '2026-10-13', priority: 'medium', status: 'not_started' },
    { id: 'ci12', title: 'Full & Final settlement sign-off', department: 'HR & Compliance', employee: 'Kabir Singh', owner: 'HR Ops Team', dueDate: '2026-10-05', priority: 'high', status: 'in_progress' },
    { id: 'ci13', title: 'Relieving letter issuance', department: 'HR & Compliance', employee: 'Farah Sheikh', owner: 'HR Ops Team', dueDate: '2026-10-03', priority: 'medium', status: 'blocked' },
  ],

  exitChecklist: [
    { id: 'e1', name: 'Devansh Rao', role: 'QA Engineer', department: 'IT & Assets', lwd: '2026-10-15', manager: 'Arjun Mehta', itClearance: 'in_progress', financeClearance: 'not_started', adminClearance: 'not_started', hrClearance: 'not_started', fnfGate: 'blocked', clearanceScore: 0 },
    { id: 'e2', name: 'Kabir Singh', role: 'Sales Executive', department: 'Finance & Payroll', lwd: '2026-09-30', manager: 'Farah Sheikh', itClearance: 'done', financeClearance: 'in_progress', adminClearance: 'done', hrClearance: 'in_progress', fnfGate: 'blocked', clearanceScore: 2 },
    { id: 'e3', name: 'Farah Sheikh', role: 'HR Executive', department: 'HR & Compliance', lwd: '2026-10-03', manager: 'Neha Joshi', itClearance: 'done', financeClearance: 'done', adminClearance: 'done', hrClearance: 'blocked', fnfGate: 'blocked', clearanceScore: 3 },
    { id: 'e4', name: 'Meera Iyer', role: 'Business Analyst', department: 'Finance & Payroll', lwd: '2026-09-25', manager: 'Kartik Menon', itClearance: 'done', financeClearance: 'done', adminClearance: 'done', hrClearance: 'done', fnfGate: 'released', clearanceScore: 4 },
    { id: 'e5', name: 'Rohan Kapoor', role: 'Software Engineer', department: 'IT & Assets', lwd: '2026-10-08', manager: 'Priya Nair', itClearance: 'in_progress', financeClearance: 'not_started', adminClearance: 'done', hrClearance: 'not_started', fnfGate: 'blocked', clearanceScore: 1 },
    { id: 'e6', name: 'Ananya Bhatt', role: 'Admin Coordinator', department: 'Admin & Facilities', lwd: '2026-10-01', manager: 'Sana Iqbal', itClearance: 'done', financeClearance: 'done', adminClearance: 'in_progress', hrClearance: 'not_started', fnfGate: 'blocked', clearanceScore: 2 },
  ],
};
