import Chip from '@mui/material/Chip';

const STATUS_MAP = {
  ready: { label: 'Ready', color: 'success' },
  on_track: { label: 'On track', color: 'success' },
  done: { label: 'Done', color: 'success' },
  in_progress: { label: 'In progress', color: 'warning' },
  pending: { label: 'Pending', color: 'warning' },
  attention: { label: 'Attention', color: 'warning' },
  not_started: { label: 'Not started', color: 'error' },
  blocked: { label: 'Blocked', color: 'error' },
};

export default function StatusChip({ status, label }) {
  const meta = STATUS_MAP[status] || { label: status, color: 'default' };
  return <Chip size="small" label={label || meta.label} color={meta.color} variant="outlined" />;
}
