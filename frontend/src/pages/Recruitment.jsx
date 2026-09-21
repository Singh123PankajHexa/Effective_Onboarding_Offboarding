import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { getRecruitmentData } from '../api/recruitmentApi.js';
import RecruitmentKpis from '../components/recruitment/RecruitmentKpis.jsx';
import CandidatePipeline from '../components/recruitment/CandidatePipeline.jsx';
import HiringManagerApprovals from '../components/recruitment/HiringManagerApprovals.jsx';
import DojCapture from '../components/recruitment/DojCapture.jsx';

export default function Recruitment() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getRecruitmentData()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Failed to load recruitment data');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2, mb: 2 }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Recruitment
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Candidate selection, hiring manager approval, and DOJ capture.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <TextField
            size="small"
            placeholder="Search candidates"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button variant="contained">+ Add Candidate</Button>
        </Stack>
      </Stack>

      {error && <Alert severity="error">{error}</Alert>}

      {!error && !data && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <CircularProgress size={28} />
        </Box>
      )}

      {data && (
        <Stack spacing={2}>
          <RecruitmentKpis kpis={data.kpis} />
          <CandidatePipeline candidates={data.candidates} />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <HiringManagerApprovals approvals={data.approvals} />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <DojCapture
                candidates={data.dojReadyCandidates}
                buddies={data.buddies}
                recentConfirmations={data.recentConfirmations}
              />
            </Grid>
          </Grid>
        </Stack>
      )}
    </Box>
  );
}
