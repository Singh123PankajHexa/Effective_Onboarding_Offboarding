export async function getOnboardingData() {
  const res = await fetch('/api/onboarding');
  if (!res.ok) throw new Error('Failed to load onboarding data');
  return res.json();
}
