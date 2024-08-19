import React from 'react';
import {
  Box,
  Button,
  Divider,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Star } from '@mui/icons-material';

const Repositorio = ({ nomeRepositorio, descricao, url, quantiEstrelas }) => {
  const themeRef = useTheme();
  const smDown = useMediaQuery(themeRef.breakpoints.down('sm'));
  return (
    <>
      <ListItem
        sx={{
          bgcolor: themeRef.palette.background.paper,
          display: 'grid',
          gap: themeRef.spacing(1),
          padding: themeRef.spacing(2.5),
          borderRadius: themeRef.spacing(0.5),
          maxWidth: smDown ? '310px' : 'initial',
        }}
      >
        <Box
          sx={{
            display: smDown ? 'grid' : 'flex',
            gap: themeRef.spacing(0.5),
            alignItems: 'center',
          }}
        >
          <Typography
            variant={smDown ? 'h5' : 'h4'}
            component="h3"
            sx={{
              color: themeRef.palette.primary.main,
              marginRight: themeRef.spacing(1.5),
              position: 'relative',
              wordBreak: 'break-all',
              '&::after': {
                content: '""',
                height: '5px',
                width: '20px',
                display: smDown ? 'none' : 'block',
                borderRadius: themeRef.spacing(0.5),
                position: 'absolute',
                bgcolor: themeRef.palette.background.default,
              },
            }}
          >
            {nomeRepositorio}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: themeRef.spacing(0.5),
              alignItems: 'center',
            }}
          >
            <Star
              sx={{
                fontSize: smDown ? 25 : 30,
                color: 'gold',
                display: 'flex',
                gap: themeRef.spacing(0.5),
              }}
            />
            <Typography variant="h5" component="p" sx={{ opacity: '0.6' }}>
              {quantiEstrelas}
            </Typography>
          </Box>
        </Box>
        {descricao ? (
          <Typography
            variant="p"
            component="p"
            sx={{
              marginBottom: themeRef.spacing(1),
              marginTop: smDown ? '0' : themeRef.spacing(1),
              fontSize: smDown ? '0.95rem' : '1rem',
            }}
          >
            {descricao}
          </Typography>
        ) : null}
        <Button
          href={url}
          target="_blank"
          variant="contained"
          sx={{
            maxWidth: 'max-content',
            marginTop: descricao ? '' : themeRef.spacing(2),
          }}
        >
          Ir para repositório
        </Button>
      </ListItem>
      <Divider sx={{ bgcolor: themeRef.palette.primary.main, height: 4 }} />
    </>
  );
};

export default Repositorio;
