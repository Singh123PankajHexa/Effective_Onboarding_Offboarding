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

export default function TaskBoard({ tasks, departments }) {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const result = { all: tasks.length };
    departments.forEach((dept) => {
      result[dept] = tasks.filter((t) => t.department === dept).length;
    });
    return result;
  }, [tasks, departments]);

  const visible = filter === 'all' ? tasks : tasks.filter((t) => t.department === filter);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Onboarding Tasks by Department
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Filter by department to review task ownership and status
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
                <TableCell>Task</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visible.map((task) => (
                <TableRow key={task.id} hover>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {task.title}
                    </Typography>
                  </TableCell>
                  <TableCell>{task.department}</TableCell>
                  <TableCell>{task.owner}</TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {task.dueDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <PriorityLabel priority={task.priority} />
                  </TableCell>
                  <TableCell>
                    <StatusChip status={task.status} />
                  </TableCell>
                </TableRow>
              ))}
              {visible.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
                      No tasks in this department.
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
