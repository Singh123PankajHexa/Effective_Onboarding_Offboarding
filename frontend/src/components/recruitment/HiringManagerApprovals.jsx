import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

export default function HiringManagerApprovals({ approvals: initialApprovals }) {
  const [approvals, setApprovals] = useState(
    initialApprovals.map((a) => ({ ...a, comment: '', decision: null }))
  );

  const pendingCount = approvals.filter((a) => !a.decision).length;

  function setComment(id, comment) {
    setApprovals((prev) => prev.map((a) => (a.id === id ? { ...a, comment } : a)));
  }

  function decide(id, decision) {
    setApprovals((prev) => prev.map((a) => (a.id === id ? { ...a, decision } : a)));
  }

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Hiring Manager Approvals
          </Typography>
          <Chip label={`${pendingCount} pending`} size="small" color="warning" variant="outlined" />
        </Stack>

        <Stack spacing={1.5}>
          {approvals.map((a) => (
            <Box key={a.id} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 1.75 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    {a.candidateName} &mdash; {a.role}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Awaiting approval from {a.hiringManager} ({a.hiringManagerTitle})
                  </Typography>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: 'nowrap', ml: 1 }}>
                  {a.requestedAgo}
                </Typography>
              </Stack>

              {a.decision ? (
                <Chip
                  sx={{ mt: 1.5 }}
                  size="small"
                  variant="outlined"
                  color={a.decision === 'approved' ? 'success' : 'error'}
                  label={a.decision === 'approved' ? 'Approved' : 'Rejected'}
                />
              ) : (
                <>
                  <TextField
                    fullWidth
                    multiline
                    minRows={2}
                    size="small"
                    placeholder="Add a comment for the requester (optional)"
                    value={a.comment}
                    onChange={(e) => setComment(a.id, e.target.value)}
                    sx={{ mt: 1.5 }}
                  />
                  <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mt: 1 }}>
                    <Button size="small" color="error" variant="outlined" onClick={() => decide(a.id, 'rejected')}>
                      Reject
                    </Button>
                    <Button size="small" variant="contained" onClick={() => decide(a.id, 'approved')}>
                      Approve
                    </Button>
                  </Stack>
                </>
              )}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
