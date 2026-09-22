// Mock payload for GET /api/recruitment, shaped like the response the real
// recruitment workflow (candidate pipeline, approvals, DOJ handoff) will return.
// See docs/PRD.md.

export const recruitmentMockData = {
  kpis: {
    openRequisitions: { value: 18, target: 22 },
    activeCandidates: { value: 64, target: 60 },
    avgTimeToHireDays: { value: 27, target: 25 },
    pendingApprovals: { value: 5 },
    offersExtendedMtd: { value: 9, target: 8 },
    dojsThisWeek: { value: 3, confirmed: 2, pending: 1 },
  },

  candidates: [
    { id: 'c1', name: 'Ananya Rao', role: 'Senior Backend Engineer', department: 'Engineering', stage: 'interview', recruiter: 'Rohit Sharma', hiringManager: 'Vikram Mehta', appliedOn: '2026-08-20' },
    { id: 'c2', name: 'Karan Malhotra', role: 'Product Designer', department: 'Design', stage: 'screening', recruiter: 'Priya Nair', hiringManager: 'Ananya Iyer', appliedOn: '2026-09-01' },
    { id: 'c3', name: 'Fatima Sheikh', role: 'QA Lead', department: 'Engineering', stage: 'offer', recruiter: 'Rohit Sharma', hiringManager: 'Vikram Mehta', appliedOn: '2026-08-10' },
    { id: 'c4', name: 'Aditya Kulkarni', role: 'DevOps Engineer', department: 'Infrastructure', stage: 'applied', recruiter: 'Priya Nair', hiringManager: 'Suresh Pillai', appliedOn: '2026-09-15' },
    { id: 'c5', name: 'Meera Joshi', role: 'HR Business Partner', department: 'Human Resources', stage: 'hired', recruiter: 'Rohit Sharma', hiringManager: 'Neha Kapoor', appliedOn: '2026-07-28' },
    { id: 'c6', name: 'Sandeep Verma', role: 'Data Analyst', department: 'Analytics', stage: 'interview', recruiter: 'Priya Nair', hiringManager: 'Vikram Mehta', appliedOn: '2026-08-25' },
  ],

  approvals: [
    { id: 'ap1', candidateName: 'Fatima Sheikh', role: 'QA Lead', hiringManager: 'Vikram Mehta', hiringManagerTitle: 'Engineering Manager', requestedAgo: '2 days ago' },
    { id: 'ap2', candidateName: 'Sandeep Verma', role: 'Data Analyst', hiringManager: 'Vikram Mehta', hiringManagerTitle: 'Engineering Manager', requestedAgo: '1 day ago' },
    { id: 'ap3', candidateName: 'Karan Malhotra', role: 'Product Designer', hiringManager: 'Ananya Iyer', hiringManagerTitle: 'Design Lead', requestedAgo: '4 hours ago' },
  ],

  dojReadyCandidates: [
    { id: 'c3', name: 'Fatima Sheikh', role: 'QA Lead', reportingManager: 'Vikram Mehta' },
  ],

  buddies: ['Sunita Rao', 'Arjun Desai'],

  recentConfirmations: [
    { id: 'rc1', candidateName: 'Meera Joshi', doj: '2026-09-01' },
  ],
};
