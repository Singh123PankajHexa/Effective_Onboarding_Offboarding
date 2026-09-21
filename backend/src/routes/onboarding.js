import { Router } from 'express';

const router = Router();

// Department-wise onboarding tasks (IT/Admin/HR Ops), readiness dashboard,
// single-click credential dispatch on DOJ. See docs/PRD.md.
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented: onboarding workflow' });
});

export default router;
