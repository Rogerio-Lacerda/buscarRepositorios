import React from 'react';
import { GlobalContext } from './GlobalContext/GlobalContext';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Star } from '@mui/icons-material';
import Repositorio from './Repositorio';

const Repositorios = () => {
  const { data, error, loading } = React.useContext(GlobalContext);
  const themeRef = useTheme();
  const mdDown = useMediaQuery(themeRef.breakpoints.down('md'));
  const smDown = useMediaQuery(themeRef.breakpoints.down('sm'));

  if (loading) return null;
  if (error) return <p>{error}</p>;
  if (data) return <div>Data</div>;
  return (
    <List
      sx={{
        maxWidth: smDown ? '310px' : mdDown ? '550px' : '850px',
        margin: '0 auto',
        display: 'grid',
        gap: themeRef.spacing(1),
      }}
    >
      <ListItem>
        <Typography
          variant={smDown ? 'h5' : 'h4'}
          component="h2"
          sx={{
            display: 'flex',
            gap: themeRef.spacing(1),
            alignItems: 'center',
            '&::before': {
              content: '""',
              height: '10px',
              width: '10px',
              bgcolor: themeRef.palette.primary.main,
              borderRadius: '50%',
            },
          }}
        >
          Rogério-Lacerda
        </Typography>
      </ListItem>
      <Repositorio />
    </List>
  );
};

export default Repositorios;
