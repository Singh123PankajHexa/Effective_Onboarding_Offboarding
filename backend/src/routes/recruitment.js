import { Router } from 'express';

const router = Router();

// Recruiter marks candidate Selected/Rejected/Hold, hiring manager approval,
// DOJ capture -> triggers onboarding workflow. See docs/PRD.md.
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented: recruitment workflow' });
});

export default router;
