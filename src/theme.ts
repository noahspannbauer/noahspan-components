import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#4D4D4D',
      dark: '#171717',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#0288D1',
      light: '#808080',
      dark: '#434343',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#bc4b09',
      light: '#C96F3A',
      dark: '#833406',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#b10e1c',
      light: '#C03E49',
      dark: '#7B0913',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#efefef'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF'
        }
      }
    },
    MuiCircularProgress: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    }
  }
});

export default responsiveFontSizes(theme);
