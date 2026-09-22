import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StatusChip from '../dashboard/StatusChip.jsx';

export default function UpcomingNewHires({ newHires }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Upcoming New Hires
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Next 7 days
        </Typography>
        <Stack divider={<Box sx={{ borderTop: 1, borderColor: 'divider' }} />} spacing={1.25} sx={{ mt: 1 }}>
          {newHires.map((hire) => (
            <Stack key={hire.id} direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ pt: 1 }}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  {hire.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {hire.role} &middot; {hire.department}
                </Typography>
              </Box>
              <Stack alignItems="flex-end" spacing={0.5}>
                <Typography variant="caption" color="text.secondary">
                  {hire.doj}
                </Typography>
                <StatusChip status={hire.status} label={hire.status === 'blocked' ? 'At risk' : undefined} />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
