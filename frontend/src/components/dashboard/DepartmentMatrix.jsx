import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StatusChip from './StatusChip.jsx';

function ProgressCell({ completed, total }) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const color = pct === 100 ? 'success' : pct >= 70 ? 'warning' : 'error';
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: 140 }}>
      <LinearProgress variant="determinate" value={pct} color={color} sx={{ flex: 1, height: 6, borderRadius: 4 }} />
      <Typography variant="caption" color="text.secondary" sx={{ width: 40, textAlign: 'right' }}>
        {completed}/{total}
      </Typography>
    </Stack>
  );
}

export default function DepartmentMatrix({ data }) {
  const { departmentMatrix, departmentOpenItems } = data;
  const rowsWithItems = departmentMatrix.filter((row) => departmentOpenItems[row.department]);
  const [selectedDept, setSelectedDept] = useState(rowsWithItems[0]?.department ?? null);
  const openItems = selectedDept ? departmentOpenItems[selectedDept] || [] : [];

  return (
    <Stack spacing={2}>
      <Card variant="outlined">
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Department</TableCell>
                <TableCell>Onboarding tasks</TableCell>
                <TableCell>Offboarding clearance</TableCell>
                <TableCell align="right">Overdue</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departmentMatrix.map((row) => {
                const clickable = Boolean(departmentOpenItems[row.department]);
                return (
                  <TableRow
                    key={row.department}
                    hover={clickable}
                    selected={clickable && row.department === selectedDept}
                    onClick={clickable ? () => setSelectedDept(row.department) : undefined}
                    sx={{ cursor: clickable ? 'pointer' : 'default' }}
                  >
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>
                        {row.department}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {row.scope}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <ProgressCell completed={row.onboardingTasks.completed} total={row.onboardingTasks.total} />
                    </TableCell>
                    <TableCell>
                      <ProgressCell completed={row.offboardingClearance.completed} total={row.offboardingClearance.total} />
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color={row.overdueCount > 0 ? 'error.main' : 'text.secondary'}>
                        {row.overdueCount}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <StatusChip status={row.status} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {selectedDept && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              {selectedDept} · open items
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              Click another department row above to filter this list
            </Typography>
            <Stack divider={<Box sx={{ borderTop: 1, borderColor: 'divider' }} />} spacing={1.25}>
              {openItems.map((item) => (
                <Stack key={item.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1 }}>
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.kind} · assigned to {item.assignedTo}
                    </Typography>
                  </Box>
                  <StatusChip status={item.status} />
                </Stack>
              ))}
              {openItems.length === 0 && (
                <Typography variant="body2" color="text.secondary">
                  No open items.
                </Typography>
              )}
            </Stack>
          </CardContent>
        </Card>
      )}
    </Stack>
  );
}
