import { Router } from 'express';
import { offboardingMockData } from '../mocks/offboardingMockData.js';

const router = Router();

// LWD capture, department exit notifications, clearance reminders,
// FnF gated on full clearance. See docs/PRD.md.
// Serves mock data until the real workflow/DB-backed implementation lands.
router.get('/', (req, res) => {
  res.json(offboardingMockData);
});

export default router;
