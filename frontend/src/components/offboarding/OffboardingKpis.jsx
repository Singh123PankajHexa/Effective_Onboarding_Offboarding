import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Tile({ label, value, target, caption, captionColor }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography variant="h4" fontWeight={600}>
            {value}
          </Typography>
          {target && (
            <Typography variant="caption" color="text.secondary">
              {target}
            </Typography>
          )}
        </Stack>
        <Typography variant="caption" color={captionColor} fontWeight={600}>
          {caption}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function OffboardingKpis({ kpis }) {
  const { activeExitsMtd, clearancesCompleted, overdueClearances, avgClearanceDays, fnfReady, exitsThisWeek } = kpis;
  const daysAboveTarget = avgClearanceDays.value - avgClearanceDays.target;
  const clearancePending = clearancesCompleted.total - clearancesCompleted.completed;
  const fnfBlocked = fnfReady.total - fnfReady.ready;

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Active Exits (MTD)"
          value={activeExitsMtd.value}
          caption={`${activeExitsMtd.planned} planned this month`}
          captionColor="text.secondary"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Clearances Completed"
          value={`${clearancesCompleted.completed}/${clearancesCompleted.total}`}
          caption={`${clearancePending} tasks pending`}
          captionColor="text.secondary"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Overdue Clearances"
          value={overdueClearances.value}
          caption="Needs attention"
          captionColor="error.main"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Avg Clearance Time"
          value={`${avgClearanceDays.value}d`}
          caption={daysAboveTarget > 0 ? `${daysAboveTarget.toFixed(1)}d above ${avgClearanceDays.target}d target` : 'On target'}
          captionColor={daysAboveTarget > 0 ? 'warning.main' : 'success.main'}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="FnF Ready"
          value={`${fnfReady.ready}/${fnfReady.total}`}
          caption={fnfBlocked === 0 ? 'All clear' : `${fnfBlocked} blocked by clearance`}
          captionColor={fnfBlocked === 0 ? 'success.main' : 'warning.main'}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Exits This Week"
          value={exitsThisWeek.value}
          caption={`${exitsThisWeek.confirmed} LWD confirmed, ${exitsThisWeek.pending} pending`}
          captionColor="text.secondary"
        />
      </Grid>
    </Grid>
  );
}
