import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { getOffboardingData } from '../api/offboardingApi.js';
import OffboardingKpis from '../components/offboarding/OffboardingKpis.jsx';
import DepartmentClearance from '../components/offboarding/DepartmentClearance.jsx';
import LwdCapture from '../components/offboarding/LwdCapture.jsx';
import ClearanceBoard from '../components/offboarding/ClearanceBoard.jsx';
import ExitChecklist from '../components/offboarding/ExitChecklist.jsx';

const VIEWS = [
  { value: 'overview', label: 'Overview' },
  { value: 'clearance', label: 'Department Clearance' },
  { value: 'checklist', label: 'Exit Checklist & FnF Gate' },
];

export default function Offboarding() {
  const [view, setView] = useState('overview');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getOffboardingData()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Failed to load offboarding data');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Offboarding
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        LWD capture, department clearance status, and FnF gating.
      </Typography>

      <Tabs value={view} onChange={(_, v) => setView(v)} sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}>
        {VIEWS.map((v) => (
          <Tab key={v.value} value={v.value} label={v.label} />
        ))}
      </Tabs>

      {error && <Alert severity="error">{error}</Alert>}

      {!error && !data && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <CircularProgress size={28} />
        </Box>
      )}

      {data && view === 'overview' && (
        <Stack spacing={2}>
          <OffboardingKpis kpis={data.kpis} />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <DepartmentClearance departments={data.departments} />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <LwdCapture
                employees={data.exitingEmployees}
                ktOwners={data.ktOwners}
                recentConfirmations={data.recentLwdConfirmations}
              />
            </Grid>
          </Grid>
        </Stack>
      )}

      {data && view === 'clearance' && (
        <ClearanceBoard items={data.clearanceItems} departments={data.departments.map((d) => d.name)} />
      )}

      {data && view === 'checklist' && <ExitChecklist employees={data.exitChecklist} />}
    </Box>
  );
}
