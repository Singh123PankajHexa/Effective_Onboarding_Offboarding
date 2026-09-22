export async function getDashboardData() {
  const res = await fetch('/api/dashboard');
  if (!res.ok) throw new Error('Failed to load dashboard data');
  return res.json();
}
