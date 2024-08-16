import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Buscar repositórios</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
