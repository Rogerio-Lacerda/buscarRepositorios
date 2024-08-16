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
      paper: '#292a2e',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
    },
  },
});
