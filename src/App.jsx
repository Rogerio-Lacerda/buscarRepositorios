import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import { CssBaseline } from '@mui/material';
import BuscaRepositorios from './BuscaRepositorios';
import { GlobalContextProvider } from './GlobalContext/GlobalContext';

function App() {
  return (
    <>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BuscaRepositorios />
        </ThemeProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
