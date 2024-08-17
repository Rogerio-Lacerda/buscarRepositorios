import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import { CssBaseline } from '@mui/material';
import BuscaRepositorios from './BuscaRepositorios';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BuscaRepositorios />
      </ThemeProvider>
    </>
  );
}

export default App;
