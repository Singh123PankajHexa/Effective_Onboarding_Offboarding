import Box from '@mui/material/Box';

const TOTAL = 5;

export default function ReadinessMeter({ score }) {
  const fillColor = score >= TOTAL ? 'success.main' : 'primary.main';

  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      {Array.from({ length: TOTAL }).map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: i < score ? fillColor : 'transparent',
            border: i < score ? 'none' : '1px solid',
            borderColor: 'divider',
          }}
        />
      ))}
    </Box>
  );
}
