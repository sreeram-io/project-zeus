import { createMuiTheme } from '@material-ui/core/styles';
import {
  red as error,
  blue as primary,
} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary,
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: error.A400,
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Ubuntu, Oxygen, Roboto, Helvetica, Arial, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  overrides: {
    MuiTypography: {
      root: {
        color: '#c6c6c6',
      },
    },
    MuiListItemText: {
      primary: {
        color: '#000000',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'transparent',
      },
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: 'transparent',
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
    MuiButton: {
      contained: {
        '&.Mui-disabled': {
          backgroundColor: '#e4e4e4',
        },
      },
    },
  },
});

export default theme;
