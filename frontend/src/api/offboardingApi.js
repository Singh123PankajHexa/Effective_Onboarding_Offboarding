export async function getOffboardingData() {
  const res = await fetch('/api/offboarding');
  if (!res.ok) throw new Error('Failed to load offboarding data');
  return res.json();
}
