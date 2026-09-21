import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { getDashboardData } from '../api/dashboardApi.js';
import KpiOverview from '../components/dashboard/KpiOverview.jsx';
import DepartmentMatrix from '../components/dashboard/DepartmentMatrix.jsx';
import OpsTimeline from '../components/dashboard/OpsTimeline.jsx';

const VIEWS = [
  { value: 'kpi', label: 'KPI Overview' },
  { value: 'matrix', label: 'Department Matrix' },
  { value: 'timeline', label: 'Ops Timeline' },
];

export default function Dashboard() {
  const [view, setView] = useState('kpi');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getDashboardData()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Failed to load dashboard data');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Onboarding &amp; Offboarding Readiness
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Showing mock data until the readiness endpoints are wired up.
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

      {data && view === 'kpi' && <KpiOverview data={data} />}
      {data && view === 'matrix' && <DepartmentMatrix data={data} />}
      {data && view === 'timeline' && <OpsTimeline data={data} />}
    </Box>
  );
}
