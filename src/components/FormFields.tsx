import React from 'react';

import { InputAdornment, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Close from '@mui/icons-material/Close';


const FormFields: React.FC<{}> = () => {
  return (
    <div>

      <div>
        <TextField
          size="small"
          value="Test value"
          label="First name"
          placeholder="Input text"
          InputProps={{
            notched: false,
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small">
                  <Close />
                </IconButton>
              </InputAdornment>
            ),
          }}

          helperText="We'll never share your details. See our Privacy Policy"
        />
      </div>
    </div>
  );
};

export default FormFields;
