import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
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
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 9
        }
      }
    },
    MuiButton: {
      defaultProps: {
        size: 'large'
      },
      styleOverrides: {
        root: {
          borderRadius: 9
        },
        outlined: {
          color: '#212121',
          borderWidth: 2,
          borderColor: '#212121'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 9
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 9
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        nativeInput: {
          borderRadius: 10
        }
      }
    }
  }
});

export default responsiveFontSizes(theme);
