import { createTheme } from '@mui/material';

import { typography } from '../globals';
import {
  MuiFormControl,
  MuiFormHelperText,
  MuiFormLabel,
  MuiInputBase,
  MuiTextField,
  MuiOutlinedInput,
  MuiInputLabel,
  MuiButtonBase,
  MuiIconButton,
} from '../overrides';

const lightTheme = createTheme({
  typography,
  components: {
    MuiButtonBase,
    MuiOutlinedInput,
    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputBase,
    MuiTextField,
    MuiInputLabel,
    MuiIconButton,
  },
  palette: {
    mode: 'light',
    primary: {
      50: '#EBF5FF',
      100: '#CCE5FF',
      200: '#99CCFF',
      300: '#66B2FF',
      400: '#3399FF',
      500: '#007FFF',
      600: '#0066CC',
      700: '#004C99',
      800: '#004C99',
      900: '#003A75',
      main: '#007FFF',
      light: '#66B2FF',
      dark: '#004C99',
      contrastText: '#fff'
    },
    secondary: {
      50: '#F3F6F9',
      100: '#E5EAF2',
      200: '#DAE2ED',
      300: '#C7D0DD',
      400: '#B0B8C4',
      500: '#9DA8B7',
      600: '#6B7A90',
      700: '#434D5B',
      800: '#303740',
      900: '#1C2025',
      main: '#DAE0E7',
      contrastText: '#2F3A46',
      light: 'rgb(225, 230, 235)',
      dark: 'rgb(152, 156, 161)'
    },
    divider: '#E5EAF2',
    primaryDark: {
      50: '#EAEDF1',
      100: '#DAE0E7',
      200: '#ACBAC8',
      300: '#7B91A7',
      400: '#4B5E71',
      500: '#3B4A59',
      600: '#2F3A46',
      700: '#1F262E',
      800: '#141A1F',
      900: '#101418',
      main: '#7B91A7'
    },
    common: {
      black: '#0B0D0E',
      white: '#fff'
    },
    text: {
      primary: '#1C2025',
      secondary: '#434D5B',
      tertiary: '#6B7A90',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    grey: {
      50: '#F3F6F9',
      100: '#E5EAF2',
      200: '#DAE2ED',
      300: '#C7D0DD',
      400: '#B0B8C4',
      500: '#9DA8B7',
      600: '#6B7A90',
      700: '#434D5B',
      800: '#303740',
      900: '#1C2025',
      main: '#E5EAF2',
      contrastText: '#6B7A90',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161'
    },
    error: {
      50: '#FFF0F1',
      100: '#FFDBDE',
      200: '#FFBDC2',
      300: '#FF99A2',
      400: '#FF7A86',
      500: '#FF505F',
      600: '#EB0014',
      700: '#C70011',
      800: '#94000D',
      900: '#570007',
      main: '#EB0014',
      light: '#FF99A2',
      dark: '#C70011',
      contrastText: '#fff'
    },
    success: {
      50: '#E9FBF0',
      100: '#C6F6D9',
      200: '#9AEFBC',
      300: '#6AE79C',
      400: '#3EE07F',
      500: '#21CC66',
      600: '#1DB45A',
      700: '#1AA251',
      800: '#178D46',
      900: '#0F5C2E',
      main: '#1AA251',
      light: '#6AE79C',
      dark: '#1AA251',
      contrastText: '#fff'
    },
    warning: {
      50: '#FFF9EB',
      100: '#FFF3C1',
      200: '#FFECA1',
      300: '#FFDC48',
      400: '#F4C000',
      500: '#DEA500',
      600: '#D18E00',
      700: '#AB6800',
      800: '#8C5800',
      900: '#5A3600',
      main: '#DEA500',
      light: '#FFDC48',
      dark: '#AB6800',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    gradients: {
      lightGrayRadio: 'radial-gradient(50% 50% at 50% 50%, #F0F7FF 0%, rgba(240, 247, 255, 0.05) 100%)',
      stylizedRadio: 'linear-gradient(rgba(255 255 255 / 0.3), rgba(255 255 255 / 0.3)), linear-gradient(254.86deg, rgba(194, 224, 255, 0.12) 0%, rgba(194, 224, 255, 0.12) 0%, rgba(255, 255, 255, 0.3) 49.98%, rgba(240, 247, 255, 0.3) 100.95%)',
      linearSubtle: 'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)'
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      paper: '#fff',
      default: '#fff'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
});

export default lightTheme;
