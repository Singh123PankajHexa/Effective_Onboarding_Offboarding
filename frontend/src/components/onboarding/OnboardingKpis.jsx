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

export default function OnboardingKpis({ kpis }) {
  const { newHiresThisMonth, tasksCompleted, overdueTasks, avgReadinessScore, buddyAssigned, dojsThisWeek } = kpis;
  const hiresAboveTarget = newHiresThisMonth.value >= newHiresThisMonth.target;
  const readinessMet = avgReadinessScore.value >= avgReadinessScore.target;
  const buddyGap = buddyAssigned.total - buddyAssigned.assigned;

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="New Hires This Month"
          value={newHiresThisMonth.value}
          caption={hiresAboveTarget ? `Above plan (${newHiresThisMonth.target})` : `Below plan (${newHiresThisMonth.target})`}
          captionColor={hiresAboveTarget ? 'success.main' : 'warning.main'}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Tasks Completed"
          value={`${tasksCompleted.completed}/${tasksCompleted.total}`}
          caption={`${tasksCompleted.total - tasksCompleted.completed} tasks pending`}
          captionColor="text.secondary"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Overdue Tasks"
          value={overdueTasks.value}
          caption="Needs attention"
          captionColor="error.main"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Avg Readiness Score"
          value={`${avgReadinessScore.value}%`}
          caption={readinessMet ? 'On target' : `Below ${avgReadinessScore.target}% target`}
          captionColor={readinessMet ? 'success.main' : 'warning.main'}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Buddy Assigned"
          value={`${buddyAssigned.assigned}/${buddyAssigned.total}`}
          caption={buddyGap === 0 ? 'All new hires covered' : `${buddyGap} unassigned`}
          captionColor={buddyGap === 0 ? 'success.main' : 'warning.main'}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="DOJs This Week"
          value={dojsThisWeek.value}
          caption={`${dojsThisWeek.confirmed} confirmed, ${dojsThisWeek.pending} pending`}
          captionColor="text.secondary"
        />
      </Grid>
    </Grid>
  );
}
