import { Router } from 'express';
import { onboardingMockData } from '../mocks/onboardingMockData.js';

const router = Router();

// Department-wise onboarding tasks (IT/Admin/HR Ops), readiness dashboard,
// single-click credential dispatch on DOJ. See docs/PRD.md.
// Serves mock data until the real workflow/DB-backed implementation lands.
router.get('/', (req, res) => {
  res.json(onboardingMockData);
});

export default router;
