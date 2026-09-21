import { recruitmentMockData } from '../mocks/recruitmentMockData.js';

// Swap point for the real endpoint. Once the backend exposes a recruitment
// summary route (e.g. GET /api/recruitment), replace the body with:
//   const res = await fetch('/api/recruitment');
//   if (!res.ok) throw new Error('Failed to load recruitment data');
//   return res.json();
// Callers already treat this as async and don't depend on it being mock data.
export async function getRecruitmentData() {
  return Promise.resolve(recruitmentMockData);
}
