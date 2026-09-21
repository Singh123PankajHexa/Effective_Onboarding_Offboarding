import { createTheme } from '@mui/material/styles';

// Matches the existing NavBar palette (frontend/src/components/NavBar.css)
// so MUI-based pages sit alongside the hand-rolled nav without clashing.
export const theme = createTheme({
  palette: {
    primary: { main: '#2563eb', dark: '#1d4ed8' },
    text: { primary: '#111827', secondary: '#4b5563' },
    divider: '#eef0f3',
  },
  shape: { borderRadius: 8 },
});
