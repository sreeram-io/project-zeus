import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#054dd8',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#eceff1',
    },
  },
  typography: {
    // fontSize: 13,
    fontFamily: 'Ubuntu, Roboto, Helvetica, Arial, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#000000',
      },
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: '#000000',
      },
    },
    MuiBottomNavigationAction: {
      label: {
        display: 'none',
        '&.Mui-selected': {
          fontSize: 12,
          display: 'none',
        },
      },
    },
  },
});

export default theme;
