import Chip from '@mui/material/Chip';

const STAGE_MAP = {
  applied: { label: 'Applied', color: 'default' },
  screening: { label: 'Screening', color: 'warning' },
  interview: { label: 'Interview', color: 'info' },
  offer: { label: 'Offer', color: 'primary' },
  hired: { label: 'Hired', color: 'success' },
  rejected: { label: 'Rejected', color: 'error' },
};

export default function StageChip({ stage }) {
  const meta = STAGE_MAP[stage] || { label: stage, color: 'default' };
  return <Chip size="small" label={meta.label} color={meta.color} variant="outlined" />;
}
