import React from 'react';

import { FormControl, FormHelperText, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


const FormFields: React.FC<{}> = () => {
  return (
    <div>

      <div>
        <TextField
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
          }}

          helperText="We'll never share your details. See our Privacy Policy"
        />
      </div>
    </div>
  );
};

export default FormFields;
