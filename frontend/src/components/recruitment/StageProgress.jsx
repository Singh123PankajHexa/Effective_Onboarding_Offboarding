import Box from '@mui/material/Box';

const STAGES = ['applied', 'screening', 'interview', 'offer', 'hired'];

export default function StageProgress({ stage }) {
  const idx = STAGES.indexOf(stage);
  const filledCount = stage === 'hired' ? STAGES.length : idx + 1;
  const fillColor = stage === 'hired' ? 'success.main' : 'primary.main';

  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      {STAGES.map((s, i) => (
        <Box
          key={s}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: i < filledCount ? fillColor : 'transparent',
            border: i < filledCount ? 'none' : '1px solid',
            borderColor: 'divider',
          }}
        />
      ))}
    </Box>
  );
}
