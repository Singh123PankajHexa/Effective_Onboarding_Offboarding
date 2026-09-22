export async function getRecruitmentData() {
  const res = await fetch('/api/recruitment');
  if (!res.ok) throw new Error('Failed to load recruitment data');
  return res.json();
}
