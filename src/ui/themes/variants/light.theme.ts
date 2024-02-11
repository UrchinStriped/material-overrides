import { createTheme } from '@mui/material';

import {
  MuiFormControl,
  MuiFormHelperText,
  MuiFormLabel,
  MuiInputBase,
  MuiTextField,
  MuiOutlinedInput,
  MuiInputLabel,
} from '../overrides';

const lightTheme = createTheme({
  components: {
    MuiOutlinedInput,
    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputBase,
    MuiTextField,
    MuiInputLabel,
  },
  palette: {
    mode: 'light',
  },
});

export default lightTheme;
