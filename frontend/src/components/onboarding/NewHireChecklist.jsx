import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import StatusChip from '../dashboard/StatusChip.jsx';
import ReadinessMeter from './ReadinessMeter.jsx';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function NewHireChecklist({ newHires }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          New Hire Checklist
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Per-hire setup status and overall readiness
        </Typography>

        <TableContainer sx={{ mt: 1.5 }}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>New Hire</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>DOJ</TableCell>
                <TableCell>Buddy</TableCell>
                <TableCell>IT Setup</TableCell>
                <TableCell>Workstation</TableCell>
                <TableCell>Documentation</TableCell>
                <TableCell>Readiness</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newHires.map((hire) => (
                <TableRow key={hire.id} hover>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Avatar sx={{ width: 32, height: 32, fontSize: '0.75rem', bgcolor: 'primary.light' }}>
                        {initials(hire.name)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight={500}>
                          {hire.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {hire.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>{hire.department}</TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {hire.doj}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {hire.buddy ? hire.buddy : <StatusChip status="blocked" label="Not assigned" />}
                  </TableCell>
                  <TableCell>
                    <StatusChip status={hire.itSetup} />
                  </TableCell>
                  <TableCell>
                    <StatusChip status={hire.workstation} />
                  </TableCell>
                  <TableCell>
                    <StatusChip status={hire.documentation} />
                  </TableCell>
                  <TableCell>
                    <ReadinessMeter score={hire.readinessScore} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
