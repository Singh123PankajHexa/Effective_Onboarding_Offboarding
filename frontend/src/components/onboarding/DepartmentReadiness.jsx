import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function barColor(pct, target) {
  const ratio = target === 0 ? 1 : pct / target;
  if (ratio >= 1) return 'success';
  if (ratio >= 0.85) return 'warning';
  return 'error';
}

function DeptRow({ name, completed, total, target }) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const color = barColor(pct, target);
  const met = pct >= target;

  return (
    <Box sx={{ py: 1.25, borderTop: 1, borderColor: 'divider', '&:first-of-type': { borderTop: 0, pt: 0.5 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 0.75 }}>
        <Typography variant="body2" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          {pct}%
        </Typography>
      </Stack>
      <LinearProgress variant="determinate" value={pct} color={color} sx={{ height: 7, borderRadius: 4 }} />
      <Typography variant="caption" color={`${color}.main`} sx={{ display: 'block', mt: 0.5 }}>
        {completed}/{total} tasks complete &middot; target {target}% &middot; {met ? 'on target' : 'below target'}
      </Typography>
    </Box>
  );
}

export default function DepartmentReadiness({ departments }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Department Readiness
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Onboarding task completion vs. target, by department
        </Typography>
        {departments.map((d) => (
          <DeptRow key={d.name} name={d.name} completed={d.completed} total={d.total} target={d.target} />
        ))}
      </CardContent>
    </Card>
  );
}
