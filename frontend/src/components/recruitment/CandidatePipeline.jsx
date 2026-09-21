import { useMemo, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import StageChip from './StageChip.jsx';
import StageProgress from './StageProgress.jsx';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'applied', label: 'Applied' },
  { value: 'screening', label: 'Screening' },
  { value: 'interview', label: 'Interview' },
  { value: 'offer', label: 'Offer' },
  { value: 'hired', label: 'Hired' },
];

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function CandidatePipeline({ candidates }) {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const result = { all: candidates.length };
    FILTERS.slice(1).forEach((f) => {
      result[f.value] = candidates.filter((c) => c.stage === f.value).length;
    });
    return result;
  }, [candidates]);

  const visible = filter === 'all' ? candidates : candidates.filter((c) => c.stage === filter);

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1 }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Candidate Pipeline
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <Chip
                key={f.value}
                label={`${f.label} (${counts[f.value] ?? 0})`}
                size="small"
                onClick={() => setFilter(f.value)}
                color={filter === f.value ? 'primary' : 'default'}
                variant={filter === f.value ? 'filled' : 'outlined'}
              />
            ))}
          </Stack>
        </Stack>

        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Candidate</TableCell>
                <TableCell>Role / Department</TableCell>
                <TableCell>Stage</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Recruiter</TableCell>
                <TableCell>Hiring Manager</TableCell>
                <TableCell>Applied On</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {visible.map((c) => (
                <TableRow key={c.id} hover>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Avatar sx={{ width: 32, height: 32, fontSize: '0.75rem', bgcolor: 'primary.light' }}>
                        {initials(c.name)}
                      </Avatar>
                      <Typography variant="body2" fontWeight={500}>
                        {c.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {c.role}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {c.department}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <StageChip stage={c.stage} />
                  </TableCell>
                  <TableCell>
                    <StageProgress stage={c.stage} />
                  </TableCell>
                  <TableCell>{c.recruiter}</TableCell>
                  <TableCell>{c.hiringManager}</TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {c.appliedOn}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Button size="small" variant="outlined">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {visible.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8}>
                    <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
                      No candidates in this stage.
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
