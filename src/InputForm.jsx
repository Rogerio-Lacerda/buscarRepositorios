import React from 'react';
import { TextField, useTheme } from '@mui/material';

const InputForm = ({ type, label, id, value, onChange }) => {
  const themeRef = useTheme();
  return (
    <>
      <TextField
        id={id}
        name={id}
        type={type}
        variant="filled"
        label={label}
        value={value}
        onChange={onChange}
        sx={{
          bgcolor: themeRef.palette.background.paper,
          borderRadius: themeRef.spacing(1, 1, 0, 0),
          width: '100%',
        }}
        InputProps={{
          style: {
            color: '#fff',
          },
        }}
        required
      />
    </>
  );
};

export default InputForm;
