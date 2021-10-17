import {
  red as error,
  blue as primary,
} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

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
    fontSize: 15,
    fontFamily: "Ubuntu, Oxygen, Roboto, Helvetica, Arial, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  overrides: {
    MuiTypography: {
      root: {
        color: '#cdcdcd',
      },
    },
    MuiListItemText: {
      primary: {
        color: '#000000',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#0e0e10',
        borderBottom: 'solid 1px #333',
      },
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: '#0e0e10',
        borderTop: 'solid 1px #333',
      },
    },
    MuiBottomNavigationAction: {
      label: {
        color: '#e4e4e4',
        fontSize: 12,
        '&.Mui-selected': {
          fontSize: 12,
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
