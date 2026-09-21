import { Router } from 'express';
import { runAssistant } from '../ai/agent.js';

const router = Router();

// AI Assistant Q&A endpoint. See docs/ai-feature-spec.md.
router.post('/ask', async (req, res) => {
  const { question } = req.body || {};
  if (!question) {
    return res.status(400).json({ message: 'question is required' });
  }
  const answer = await runAssistant(question);
  res.json({ answer });
});

export default router;
