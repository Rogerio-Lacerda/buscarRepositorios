import { useTheme } from '@emotion/react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const Error = ({ texto }) => {
  const themeRef = useTheme();
  const mdDown = useMediaQuery(themeRef.breakpoints.down('md'));
  const smDown = useMediaQuery(themeRef.breakpoints.down('sm'));

  return (
    <div>
      <Box
        sx={{
          maxWidth: smDown ? '310px' : mdDown ? '550px' : '850px',
          margin: '0 auto',
          bgcolor: themeRef.palette.background.paper,
          padding: themeRef.spacing(2.5),
          borderRadius: themeRef.spacing(0.5),
        }}
      >
        <Typography
          variant={smDown ? 'p' : 'h6'}
          component="p"
          sx={{ color: 'red' }}
        >
          {texto}
        </Typography>
      </Box>
    </div>
  );
};

export default Error;
