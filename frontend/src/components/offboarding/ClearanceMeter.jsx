import Box from '@mui/material/Box';

export default function ClearanceMeter({ score, total = 4 }) {
  const fillColor = score >= total ? 'success.main' : 'primary.main';

  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      {Array.from({ length: total }).map((_, i) => (
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
