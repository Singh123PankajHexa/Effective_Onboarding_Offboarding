import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { getOnboardingData } from '../api/onboardingApi.js';
import OnboardingKpis from '../components/onboarding/OnboardingKpis.jsx';
import DepartmentReadiness from '../components/onboarding/DepartmentReadiness.jsx';
import UpcomingNewHires from '../components/onboarding/UpcomingNewHires.jsx';
import TaskBoard from '../components/onboarding/TaskBoard.jsx';
import NewHireChecklist from '../components/onboarding/NewHireChecklist.jsx';

const VIEWS = [
  { value: 'overview', label: 'Overview' },
  { value: 'tasks', label: 'Department Tasks' },
  { value: 'checklist', label: 'New Hire Checklist' },
];

export default function Onboarding() {
  const [view, setView] = useState('overview');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getOnboardingData()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Failed to load onboarding data');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Onboarding
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Department-wise onboarding tasks (IT, Admin, HR Ops) and readiness status.
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
          <OnboardingKpis kpis={data.kpis} />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <DepartmentReadiness departments={data.departments} />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <UpcomingNewHires newHires={data.upcomingNewHires} />
            </Grid>
          </Grid>
        </Stack>
      )}

      {data && view === 'tasks' && (
        <TaskBoard tasks={data.tasks} departments={data.departments.map((d) => d.name)} />
      )}

      {data && view === 'checklist' && <NewHireChecklist newHires={data.newHires} />}
    </Box>
  );
}
