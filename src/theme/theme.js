import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#913af3',
      dark: '#7f18f3',
      light: '#a65ff2',
      contrastText: '#fff',
    },
    background: {
      default: '#292a2e',
      paper: '#0f1014',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
    },
    fontFamily: 'monospace',
  },
});
