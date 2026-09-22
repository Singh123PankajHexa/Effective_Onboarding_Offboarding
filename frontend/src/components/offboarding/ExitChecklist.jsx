import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import StatusChip from '../dashboard/StatusChip.jsx';
import ClearanceMeter from './ClearanceMeter.jsx';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function ExitChecklist({ employees }) {
  return (
    <Stack spacing={2}>
      <Alert severity="info" variant="outlined">
        Full &amp; Final settlement unlocks automatically once IT, Finance, Admin, and HR clearances are all marked{' '}
        <strong>Done</strong>. Employees below the 4/4 clearance score stay gated.
      </Alert>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Exit Checklist &amp; FnF Gate
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Per-exit clearance status and Full &amp; Final settlement gate
          </Typography>

          <TableContainer sx={{ mt: 1.5 }}>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell>Employee</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>LWD</TableCell>
                  <TableCell>Manager</TableCell>
                  <TableCell>IT</TableCell>
                  <TableCell>Finance</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>HR</TableCell>
                  <TableCell>FnF Gate</TableCell>
                  <TableCell>Clearance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id} hover>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Avatar sx={{ width: 32, height: 32, fontSize: '0.75rem', bgcolor: 'primary.light' }}>
                          {initials(emp.name)}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight={500}>
                            {emp.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {emp.role}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>{emp.department}</TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {emp.lwd}
                      </Typography>
                    </TableCell>
                    <TableCell>{emp.manager}</TableCell>
                    <TableCell>
                      <StatusChip status={emp.itClearance} />
                    </TableCell>
                    <TableCell>
                      <StatusChip status={emp.financeClearance} />
                    </TableCell>
                    <TableCell>
                      <StatusChip status={emp.adminClearance} />
                    </TableCell>
                    <TableCell>
                      <StatusChip status={emp.hrClearance} />
                    </TableCell>
                    <TableCell>
                      <StatusChip status={emp.fnfGate} />
                    </TableCell>
                    <TableCell>
                      <ClearanceMeter score={emp.clearanceScore} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Stack>
  );
}
