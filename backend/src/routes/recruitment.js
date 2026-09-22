import { Router } from 'express';
import { recruitmentMockData } from '../mocks/recruitmentMockData.js';

const router = Router();

// Recruiter marks candidate Selected/Rejected/Hold, hiring manager approval,
// DOJ capture -> triggers onboarding workflow. See docs/PRD.md.
// Serves mock data until the real workflow/DB-backed implementation lands.
router.get('/', (req, res) => {
  res.json(recruitmentMockData);
});

export default router;
