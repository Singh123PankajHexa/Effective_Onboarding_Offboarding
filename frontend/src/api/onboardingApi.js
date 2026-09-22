import { onboardingMockData } from '../mocks/onboardingMockData.js';

// Swap point for the real endpoint. Once the backend exposes an onboarding
// summary route (e.g. GET /api/onboarding), replace the body with:
//   const res = await fetch('/api/onboarding');
//   if (!res.ok) throw new Error('Failed to load onboarding data');
//   return res.json();
// Callers already treat this as async and don't depend on it being mock data.
export async function getOnboardingData() {
  return Promise.resolve(onboardingMockData);
}
