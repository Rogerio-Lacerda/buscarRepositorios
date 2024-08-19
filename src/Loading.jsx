import { Box, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Loading = () => {
  const themeRef = useTheme();
  const mdDown = useMediaQuery(themeRef.breakpoints.down('md'));
  const smDown = useMediaQuery(themeRef.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        maxWidth: smDown ? '310px' : mdDown ? '550px' : '850px',
        margin: '0 auto',
      }}
    >
      <CircularProgress size={50} thickness={6} />
    </Box>
  );
};

export default Loading;
