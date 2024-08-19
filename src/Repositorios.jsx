import React from 'react';
import { GlobalContext } from './GlobalContext/GlobalContext';
import {
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Repositorio from './Repositorio';
import Loading from './Loading';
import Error from './Error';

const Repositorios = () => {
  const { data, error, loading } = React.useContext(GlobalContext);
  const themeRef = useTheme();
  const mdDown = useMediaQuery(themeRef.breakpoints.down('md'));
  const smDown = useMediaQuery(themeRef.breakpoints.down('sm'));

  if (loading) return <Loading />;
  if (error) return <Error texto={error} />;
  if (data)
    if (data.length <= 0) {
      return <Error texto="Nenhum repositório encontrado" />;
    } else {
      return (
        <List
          sx={{
            maxWidth: smDown ? '310px !important' : mdDown ? '550px' : '850px',
            margin: '0 auto',
            display: 'grid',
            justifyContent: 'center',
            gap: themeRef.spacing(1),
            overflowY: 'scroll',
            border: `2px solid ${themeRef.palette.primary.main}`,
            borderRadius: 1,
            padding: 2,
            height: 350,
            marginBottom: 1,
            '&::-webkit-scrollbar': {
              width: '18px',
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: '#fff',
              borderRadius: 0.5,
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: themeRef.palette.primary.main,
            },
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
              {data ? data[0].owner.login : null}
            </Typography>
          </ListItem>
          {data.map((item) => {
            return (
              <Repositorio
                key={item.id}
                nomeRepositorio={item.name}
                descricao={item.description}
                url={item.html_url}
                quantiEstrelas={item.stargazers_count}
              />
            );
          })}
        </List>
      );
    }
  return null;
};

export default Repositorios;
