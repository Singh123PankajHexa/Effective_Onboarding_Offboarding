import { useMemo, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import StatusChip from '../dashboard/StatusChip.jsx';

const PRIORITY_COLOR = {
  high: 'error.main',
  medium: 'warning.main',
  low: 'text.disabled',
};

function PriorityLabel({ priority }) {
  return (
    <Stack direction="row" alignItems="center" spacing={0.75}>
      <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: PRIORITY_COLOR[priority] || 'text.disabled' }} />
      <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
        {priority}
      </Typography>
    </Stack>
  );
}

export default function ClearanceBoard({ items, departments }) {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const result = { all: items.length };
    departments.forEach((dept) => {
      result[dept] = items.filter((i) => i.department === dept).length;
    });
    return result;
  }, [items, departments]);

  const visible = filter === 'all' ? items : items.filter((i) => i.department === filter);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Clearance Items by Department
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Filter by department to review clearance ownership and status
        </Typography>

        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mt: 1.5, mb: 1 }}>
          <Chip
            label={`All (${counts.all})`}
            size="small"
            onClick={() => setFilter('all')}
            color={filter === 'all' ? 'primary' : 'default'}
            variant={filter === 'all' ? 'filled' : 'outlined'}
          />
          {departments.map((dept) => (
            <Chip
              key={dept}
              label={`${dept} (${counts[dept] ?? 0})`}
              size="small"
              onClick={() => setFilter(dept)}
              color={filter === dept ? 'primary' : 'default'}
              variant={filter === dept ? 'filled' : 'outlined'}
            />
          ))}
        </Stack>

        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Clearance Item</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visible.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {item.title}
                    </Typography>
                  </TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.employee}</TableCell>
                  <TableCell>{item.owner}</TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {item.dueDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <PriorityLabel priority={item.priority} />
                  </TableCell>
                  <TableCell>
                    <StatusChip status={item.status} />
                  </TableCell>
                </TableRow>
              ))}
              {visible.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
                      No clearance items in this department.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
