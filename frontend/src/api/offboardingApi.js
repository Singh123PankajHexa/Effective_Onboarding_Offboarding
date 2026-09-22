import { offboardingMockData } from '../mocks/offboardingMockData.js';

// Swap point for the real endpoint. Once the backend exposes an offboarding
// summary route (e.g. GET /api/offboarding), replace the body with:
//   const res = await fetch('/api/offboarding');
//   if (!res.ok) throw new Error('Failed to load offboarding data');
//   return res.json();
// Callers already treat this as async and don't depend on it being mock data.
export async function getOffboardingData() {
  return Promise.resolve(offboardingMockData);
}
