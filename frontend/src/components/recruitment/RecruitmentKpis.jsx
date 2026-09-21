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
              / {target}
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

export default function RecruitmentKpis({ kpis }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Open Requisitions"
          value={kpis.openRequisitions.value}
          target={`${kpis.openRequisitions.target} planned`}
          caption={`${kpis.openRequisitions.target - kpis.openRequisitions.value} below target`}
          captionColor="warning.main"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Active Candidates"
          value={kpis.activeCandidates.value}
          target={`${kpis.activeCandidates.target} target`}
          caption="On target"
          captionColor="success.main"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Avg. Time to Hire"
          value={`${kpis.avgTimeToHireDays.value}d`}
          target={`${kpis.avgTimeToHireDays.target}d target`}
          caption={`${kpis.avgTimeToHireDays.value - kpis.avgTimeToHireDays.target} days above target`}
          captionColor="warning.main"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Pending Approvals"
          value={kpis.pendingApprovals.value}
          caption="Needs hiring manager action"
          captionColor="warning.main"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="Offers Extended (MTD)"
          value={kpis.offersExtendedMtd.value}
          target={`${kpis.offersExtendedMtd.target} target`}
          caption="On target"
          captionColor="success.main"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
        <Tile
          label="DOJs This Week"
          value={kpis.dojsThisWeek.value}
          caption={`${kpis.dojsThisWeek.confirmed} confirmed, ${kpis.dojsThisWeek.pending} pending`}
          captionColor="text.secondary"
        />
      </Grid>
    </Grid>
  );
}
