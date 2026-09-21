import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

export default function DojCapture({ candidates, buddies, recentConfirmations: initialConfirmations }) {
  const [candidateId, setCandidateId] = useState(candidates[0]?.id ?? '');
  const [doj, setDoj] = useState('2026-10-06');
  const [buddy, setBuddy] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmations, setConfirmations] = useState(initialConfirmations);
  const [confirmedName, setConfirmedName] = useState(null);

  const candidate = candidates.find((c) => c.id === candidateId);

  function handleConfirm() {
    if (!candidate) return;
    setConfirmations((prev) => [
      { id: `rc-${candidate.id}-${Date.now()}`, candidateName: candidate.name, doj },
      ...prev,
    ]);
    setConfirmedName(candidate.name);
  }

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Date of Joining Capture
        </Typography>

        {candidates.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No candidates with a signed offer are awaiting a DOJ right now.
          </Typography>
        ) : (
          <Stack spacing={1.75}>
            <TextField
              select
              fullWidth
              size="small"
              label="Candidate"
              value={candidateId}
              onChange={(e) => {
                setCandidateId(e.target.value);
                setConfirmedName(null);
              }}
            >
              {candidates.map((c) => (
                <MenuItem key={c.id} value={c.id}>
                  {c.name} &mdash; {c.role}
                </MenuItem>
              ))}
            </TextField>

            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="caption" color="text.secondary">
                Offer Letter Status
              </Typography>
              <Chip size="small" variant="outlined" color="success" label="Signed" />
            </Stack>

            <TextField
              fullWidth
              size="small"
              type="date"
              label="Proposed Date of Joining"
              slotProps={{ inputLabel: { shrink: true } }}
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
            />

            <TextField fullWidth size="small" label="Reporting Manager" value={candidate?.reportingManager ?? ''} disabled />

            <TextField select fullWidth size="small" label="Onboarding Buddy" value={buddy} onChange={(e) => setBuddy(e.target.value)}>
              <MenuItem value="">
                <em>Assign a buddy&hellip;</em>
              </MenuItem>
              {buddies.map((b) => (
                <MenuItem key={b} value={b}>
                  {b}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              multiline
              minRows={2}
              size="small"
              label="Notes"
              placeholder="Notice period, relocation, background check status, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <Stack direction="row" spacing={1}>
              <Button fullWidth variant="outlined">
                Save as Draft
              </Button>
              <Button fullWidth variant="contained" onClick={handleConfirm}>
                Confirm DOJ &amp; Trigger Onboarding
              </Button>
            </Stack>

            {confirmedName && (
              <Typography variant="caption" color="success.main" fontWeight={600}>
                Onboarding triggered for {confirmedName}.
              </Typography>
            )}
          </Stack>
        )}

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ textTransform: 'uppercase', letterSpacing: 0.4, fontWeight: 600 }}
        >
          Recent Confirmations
        </Typography>
        <Stack spacing={1} sx={{ mt: 1 }}>
          {confirmations.map((rc) => (
            <Stack key={rc.id} direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="body2" fontWeight={500}>
                  {rc.candidateName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  DOJ: {rc.doj}
                </Typography>
              </Box>
              <Chip size="small" variant="outlined" color="success" label="Onboarding Triggered" />
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
