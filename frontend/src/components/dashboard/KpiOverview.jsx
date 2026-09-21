import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StatusChip from './StatusChip.jsx';

function barColor(value, target, higherIsBetter = true) {
  const ratio = target === 0 ? (value === 0 ? 1 : 0) : value / target;
  if (higherIsBetter) {
    if (ratio >= 1) return 'success';
    if (ratio >= 0.85) return 'warning';
    return 'error';
  }
  return value <= target ? 'success' : 'error';
}

function KpiCard({ label, value, target, unit, higherIsBetter }) {
  const display = unit === 'percent' ? `${value}%` : value;
  const targetDisplay = unit === 'percent' ? `target ${target}%` : `target ${target}`;
  const met = higherIsBetter ? value >= target : value <= target;
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography variant="h4" fontWeight={600}>
            {display}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {targetDisplay}
          </Typography>
        </Stack>
        <Typography variant="caption" color={met ? 'success.main' : 'error.main'} fontWeight={600}>
          {met ? 'On target' : 'Below target'}
        </Typography>
      </CardContent>
    </Card>
  );
}

function DeptBarRow({ label, value }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 1 }}>
      <Box sx={{ width: 110 }}>
        <Typography variant="body2" fontWeight={600}>
          {label}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        color={barColor(value, 100)}
        sx={{ flex: 1, height: 7, borderRadius: 4 }}
      />
      <Box sx={{ width: 36, textAlign: 'right' }}>
        <Typography variant="body2" color="text.secondary">
          {value}%
        </Typography>
      </Box>
    </Stack>
  );
}

export default function KpiOverview({ data }) {
  const { kpis, departments, upcomingEvents } = data;

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <KpiCard
            label="Onboarding readiness before DOJ"
            value={kpis.onboardingReadiness.value}
            target={kpis.onboardingReadiness.target}
            unit={kpis.onboardingReadiness.unit}
            higherIsBetter
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <KpiCard
            label="Access revoked by LWD"
            value={kpis.accessRevokedByLwd.value}
            target={kpis.accessRevokedByLwd.target}
            unit={kpis.accessRevokedByLwd.unit}
            higherIsBetter
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <KpiCard
            label="FnF settled with pending clearance"
            value={kpis.fnfWithPendingClearance.value}
            target={kpis.fnfWithPendingClearance.target}
            unit={kpis.fnfWithPendingClearance.unit}
            higherIsBetter={false}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Department readiness
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Onboarding
              </Typography>
              {departments.map((d) => (
                <DeptBarRow key={`onb-${d.name}`} label={d.name} value={d.onboardingReadiness} />
              ))}
              <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 1, pt: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Offboarding clearance
                </Typography>
                {departments.map((d) => (
                  <DeptBarRow key={`off-${d.name}`} label={d.name} value={d.offboardingClearance} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Next 7 days
              </Typography>
              <Stack divider={<Box sx={{ borderTop: 1, borderColor: 'divider' }} />} spacing={1.25}>
                {upcomingEvents.map((ev) => (
                  <Stack key={ev.id} direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ pt: 1 }}>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {ev.employeeName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {ev.type} · {ev.department}
                      </Typography>
                    </Box>
                    <Stack alignItems="flex-end" spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        {ev.date}
                      </Typography>
                      <StatusChip
                        status={ev.status}
                        label={ev.status === 'pending' ? `${ev.pendingCount} pending` : undefined}
                      />
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
