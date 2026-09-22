// Mock payload for GET /api/onboarding, shaped like the response the real
// onboarding workflow (department tasks, readiness, DOJ pipeline) will return.
// See docs/PRD.md.

export const onboardingMockData = {
  kpis: {
    newHiresThisMonth: { value: 14, target: 12 },
    tasksCompleted: { completed: 25, total: 32 },
    overdueTasks: { value: 4 },
    avgReadinessScore: { value: 77, target: 85 },
    buddyAssigned: { assigned: 5, total: 6 },
    dojsThisWeek: { value: 4, confirmed: 3, pending: 1 },
  },

  departments: [
    { name: 'IT', completed: 11, total: 14, target: 90 },
    { name: 'Admin', completed: 9, total: 10, target: 85 },
    { name: 'HR Ops', completed: 5, total: 8, target: 90 },
  ],

  upcomingNewHires: [
    { id: 'nh1', name: 'Meera Iyer', role: 'HR Executive', department: 'HR Ops', doj: '2026-09-23', status: 'ready' },
    { id: 'nh2', name: 'Rohan Kapoor', role: 'Business Analyst', department: 'Admin', doj: '2026-09-25', status: 'blocked' },
    { id: 'nh3', name: 'Ananya Bhatt', role: 'Admin Coordinator', department: 'Admin', doj: '2026-09-26', status: 'in_progress' },
    { id: 'nh4', name: 'Priya Nair', role: 'Software Engineer', department: 'IT', doj: '2026-09-29', status: 'ready' },
  ],

  tasks: [
    { id: 't1', title: 'Provision laptop & accessories', department: 'IT', owner: 'IT Helpdesk', dueDate: '2026-09-24', priority: 'high', status: 'done' },
    { id: 't2', title: 'Create email & AD account', department: 'IT', owner: 'IT Helpdesk', dueDate: '2026-09-23', priority: 'high', status: 'done' },
    { id: 't3', title: 'Install dev environment & VPN access', department: 'IT', owner: 'Arjun Mehta', dueDate: '2026-09-26', priority: 'high', status: 'in_progress' },
    { id: 't4', title: 'Assign JIRA / Confluence licenses', department: 'IT', owner: 'IT Helpdesk', dueDate: '2026-09-27', priority: 'medium', status: 'not_started' },
    { id: 't5', title: 'Security & compliance training setup', department: 'IT', owner: 'IT Security', dueDate: '2026-09-29', priority: 'medium', status: 'not_started' },
    { id: 't6', title: 'Desk & workstation allocation', department: 'Admin', owner: 'Facilities', dueDate: '2026-09-24', priority: 'high', status: 'done' },
    { id: 't7', title: 'ID card & access badge', department: 'Admin', owner: 'Admin Desk', dueDate: '2026-09-25', priority: 'high', status: 'in_progress' },
    { id: 't8', title: 'Parking / transport enrollment', department: 'Admin', owner: 'Admin Desk', dueDate: '2026-09-28', priority: 'low', status: 'not_started' },
    { id: 't9', title: 'Welcome kit dispatch', department: 'Admin', owner: 'Ananya Bhatt', dueDate: '2026-09-26', priority: 'medium', status: 'blocked' },
    { id: 't10', title: 'Offer & background verification closure', department: 'HR Ops', owner: 'Meera Iyer', dueDate: '2026-09-22', priority: 'high', status: 'done' },
    { id: 't11', title: 'Payroll & bank details setup', department: 'HR Ops', owner: 'HR Ops Team', dueDate: '2026-09-27', priority: 'high', status: 'in_progress' },
    { id: 't12', title: 'Buddy program assignment', department: 'HR Ops', owner: 'Neha Joshi', dueDate: '2026-09-24', priority: 'medium', status: 'done' },
    { id: 't13', title: 'Induction & policy briefing', department: 'HR Ops', owner: 'Kartik Menon', dueDate: '2026-09-30', priority: 'medium', status: 'not_started' },
  ],

  newHires: [
    { id: 'nh4', name: 'Priya Nair', role: 'Software Engineer', department: 'IT', doj: '2026-09-29', buddy: 'Arjun Mehta', itSetup: 'done', workstation: 'done', documentation: 'in_progress', readinessScore: 4 },
    { id: 'nh2', name: 'Rohan Kapoor', role: 'Business Analyst', department: 'Admin', doj: '2026-09-25', buddy: 'Sana Iqbal', itSetup: 'in_progress', workstation: 'not_started', documentation: 'done', readinessScore: 2 },
    { id: 'nh1', name: 'Meera Iyer', role: 'HR Executive', department: 'HR Ops', doj: '2026-09-23', buddy: 'Kabir Singh', itSetup: 'done', workstation: 'done', documentation: 'done', readinessScore: 5 },
    { id: 'nh5', name: 'Devansh Rao', role: 'QA Engineer', department: 'IT', doj: '2026-10-02', buddy: null, itSetup: 'not_started', workstation: 'not_started', documentation: 'in_progress', readinessScore: 1 },
    { id: 'nh3', name: 'Ananya Bhatt', role: 'Admin Coordinator', department: 'Admin', doj: '2026-09-26', buddy: 'Farah Sheikh', itSetup: 'done', workstation: 'in_progress', documentation: 'in_progress', readinessScore: 3 },
    { id: 'nh6', name: 'Kartik Menon', role: 'HRBP', department: 'HR Ops', doj: '2026-09-30', buddy: 'Neha Joshi', itSetup: 'in_progress', workstation: 'done', documentation: 'not_started', readinessScore: 3 },
  ],
};
