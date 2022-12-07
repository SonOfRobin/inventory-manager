import { createTheme } from '@mui/material/styles';

const RootTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c97e7f',
    },
    secondary: {
      main: '#00d0f5',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
});

export default RootTheme;