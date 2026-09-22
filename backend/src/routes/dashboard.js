import { Router } from 'express';
import { dashboardMockData } from '../mocks/dashboardMockData.js';

const router = Router();

// Cross-functional onboarding/offboarding summary (KPIs, department matrix,
// upcoming DOJ/LWD events, clearance funnel). See docs/PRD.md.
// Serves mock data until the real workflow/DB-backed implementation lands.
router.get('/', (req, res) => {
  res.json(dashboardMockData);
});

export default router;
