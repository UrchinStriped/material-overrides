import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette:  {
    mode: 'dark',
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
      main: '#3399FF',
      light: '#66B2FF',
      dark: '#004C99',
      contrastText: 'rgba(0, 0, 0, 0.87)'
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
      main: '#1F262E',
      contrastText: '#2F3A46',
      light: 'rgb(75, 81, 87)',
      dark: 'rgb(21, 26, 32)'
    },
    divider: 'rgba(59, 74, 89, 0.2)',
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
    background: {
      default: '#101418',
      paper: 'rgba(20, 26, 31, 0.8)'
    },
    common: {
      black: '#0B0D0E',
      white: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#B0B8C4',
      tertiary: '#B0B8C4',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
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
      main: '#434D5B',
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
      main: '#1DB45A',
      light: '#6AE79C',
      dark: '#1AA251',
      contrastText: 'rgba(0, 0, 0, 0.87)'
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
      stylizedRadio: 'linear-gradient(rgba(0 0 0 / 0.1), rgba(0 0 0 / 0.1)), linear-gradient(254.86deg, rgba(0, 58, 117, 0.18) 0%, rgba(11, 13, 14, 0.3) 49.98%, rgba(0, 76, 153, 0.21) 100.95%)',
      linearSubtle: 'linear-gradient(to top right, rgba(0, 58, 117, 0.1) 40%, rgba(20, 26, 31, 0.2) 100%)'
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  },
});

export default darkTheme;
