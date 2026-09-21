import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import recruitmentRoutes from './routes/recruitment.js';
import onboardingRoutes from './routes/onboarding.js';
import offboardingRoutes from './routes/offboarding.js';
import aiRoutes from './routes/ai.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/recruitment', recruitmentRoutes);
app.use('/api/onboarding', onboardingRoutes);
app.use('/api/offboarding', offboardingRoutes);
app.use('/api/ai', aiRoutes);

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
