import { dashboardMockData } from '../mocks/dashboardMockData.js';

// Swap point for the real endpoint. Once the backend exposes a stats/summary
// route (e.g. GET /api/dashboard), replace the body with:
//   const res = await fetch('/api/dashboard');
//   if (!res.ok) throw new Error('Failed to load dashboard data');
//   return res.json();
// Callers already treat this as async and don't depend on it being mock data.
export async function getDashboardData() {
  return Promise.resolve(dashboardMockData);
}
