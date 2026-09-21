import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StatusChip from './StatusChip.jsx';

function FunnelStage({ label, count, isFinal }) {
  return (
    <Box
      sx={{
        flex: 1,
        textAlign: 'center',
        py: 1.75,
        px: 1,
        borderRadius: 2,
        bgcolor: isFinal ? 'success.50' : 'action.hover',
        border: 1,
        borderColor: isFinal ? 'success.light' : 'divider',
      }}
    >
      <Typography variant="h5" fontWeight={600} color={isFinal ? 'success.dark' : 'text.primary'}>
        {count}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

export default function OpsTimeline({ data }) {
  const { clearanceFunnel, overdueTasks, upcomingEvents } = data;

  return (
    <Stack spacing={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Offboarding clearance funnel
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
            All departments · this month
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            {clearanceFunnel.map((stage, i) => (
              <Stack key={stage.label} direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
                <FunnelStage label={stage.label} count={stage.count} isFinal={i === clearanceFunnel.length - 1} />
                {i < clearanceFunnel.length - 1 && (
                  <ArrowForwardIcon fontSize="small" sx={{ color: 'text.disabled' }} />
                )}
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Overdue tasks
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Past reminder threshold
              </Typography>
              <Stack divider={<Box sx={{ borderTop: 1, borderColor: 'divider' }} />} spacing={1.25}>
                {overdueTasks.map((task) => (
                  <Stack key={task.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1 }}>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {task.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {task.employeeName} · {task.department}
                      </Typography>
                    </Box>
                    <Stack alignItems="flex-end" spacing={0.5}>
                      <StatusChip status={task.status} />
                      <Typography variant="caption" color="error.main" fontWeight={600}>
                        {task.overdueDays}d overdue
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Upcoming DOJ / LWD
              </Typography>
              <Stack divider={<Box sx={{ borderTop: 1, borderColor: 'divider' }} />} spacing={1.25}>
                {upcomingEvents.map((ev) => (
                  <Stack key={ev.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1 }}>
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
