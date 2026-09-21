import { Router } from 'express';

const router = Router();

// LWD capture, department exit notifications, clearance reminders,
// FnF gated on full clearance. See docs/PRD.md.
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented: offboarding workflow' });
});

export default router;
