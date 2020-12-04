import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#37a000",
    },
    secondary: {
      main: "#e0e0e0",
    },
  },
  breakpoints: {
    values: {
      xs:0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme