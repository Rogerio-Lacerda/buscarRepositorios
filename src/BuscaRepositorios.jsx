import React from 'react';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import InputForm from './InputForm';
import { GlobalContext } from './GlobalContext/GlobalContext';

const BuscaRepositorios = () => {
  const themeRef = useTheme();
  const [user, setUser] = React.useState('');
  const smDowm = useMediaQuery(themeRef.breakpoints.down('sm'));
  const { request } = React.useContext(GlobalContext);

  function handleChange({ target }) {
    if (target instanceof HTMLInputElement) {
      setUser(target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const urlApi = `https://api.github.com/users/${user}/repos`;
    request(urlApi);
  }

  return (
    <Box
      component="section"
      sx={{
        padding: themeRef.spacing(3, 1),
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        gap: smDowm ? themeRef.spacing(3) : themeRef.spacing(4),
      }}
    >
      <Typography
        variant={smDowm ? 'h5' : 'h4'}
        component="h1"
        sx={{
          borderBottom: `4px solid ${themeRef.palette.primary.main}`,
          paddingBottom: themeRef.spacing(0.5),
        }}
      >
        Buscar repositórios
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'grid',
          gap: themeRef.spacing(2),
        }}
      >
        <InputForm
          type="text"
          label="Digite um usuário"
          id="nome"
          value={user}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          size={smDowm ? 'medium' : 'large'}
          sx={{ maxWidth: 'max-content' }}
          type="submit"
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
};

export default BuscaRepositorios;
