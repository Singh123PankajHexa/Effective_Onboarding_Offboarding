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

const EXIT_TYPES = ['Resignation', 'Termination', 'Retirement', 'Layoff'];

export default function LwdCapture({ employees, ktOwners, recentConfirmations: initialConfirmations }) {
  const [employeeId, setEmployeeId] = useState(employees[0]?.id ?? '');
  const [exitType, setExitType] = useState('Resignation');
  const [lwd, setLwd] = useState('2026-10-15');
  const [ktOwner, setKtOwner] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmations, setConfirmations] = useState(initialConfirmations);
  const [confirmedName, setConfirmedName] = useState(null);

  const employee = employees.find((e) => e.id === employeeId);

  function handleConfirm() {
    if (!employee) return;
    setConfirmations((prev) => [{ id: `lc-${employee.id}-${Date.now()}`, employeeName: employee.name, lwd }, ...prev]);
    setConfirmedName(employee.name);
  }

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Last Working Day Capture
        </Typography>

        {employees.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No employees are awaiting an LWD confirmation right now.
          </Typography>
        ) : (
          <Stack spacing={1.75}>
            <TextField
              select
              fullWidth
              size="small"
              label="Employee"
              value={employeeId}
              onChange={(e) => {
                setEmployeeId(e.target.value);
                setConfirmedName(null);
              }}
            >
              {employees.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.name} &mdash; {e.role}
                </MenuItem>
              ))}
            </TextField>

            <TextField select fullWidth size="small" label="Exit Type" value={exitType} onChange={(e) => setExitType(e.target.value)}>
              {EXIT_TYPES.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              size="small"
              type="date"
              label="Last Working Day"
              slotProps={{ inputLabel: { shrink: true } }}
              value={lwd}
              onChange={(e) => setLwd(e.target.value)}
            />

            <TextField fullWidth size="small" label="Reporting Manager" value={employee?.reportingManager ?? ''} disabled />

            <TextField select fullWidth size="small" label="Knowledge Transfer Owner" value={ktOwner} onChange={(e) => setKtOwner(e.target.value)}>
              <MenuItem value="">
                <em>Assign a KT owner&hellip;</em>
              </MenuItem>
              {ktOwners.map((o) => (
                <MenuItem key={o} value={o}>
                  {o}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              multiline
              minRows={2}
              size="small"
              label="Notes"
              placeholder="Exit reason, rehire eligibility, asset return notes, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <Stack direction="row" spacing={1}>
              <Button fullWidth variant="outlined">
                Save as Draft
              </Button>
              <Button fullWidth variant="contained" onClick={handleConfirm}>
                Confirm LWD &amp; Trigger Clearance
              </Button>
            </Stack>

            {confirmedName && (
              <Typography variant="caption" color="success.main" fontWeight={600}>
                Clearance workflow triggered for {confirmedName}.
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
          Recent LWD Confirmations
        </Typography>
        <Stack spacing={1} sx={{ mt: 1 }}>
          {confirmations.map((rc) => (
            <Stack key={rc.id} direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="body2" fontWeight={500}>
                  {rc.employeeName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  LWD: {rc.lwd}
                </Typography>
              </Box>
              <Chip size="small" variant="outlined" color="success" label="Clearance Triggered" />
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
