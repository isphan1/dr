import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#37a000",
    },
    secondary: {
      main: "#fff",      
    },
    blue: {
      main:"#4285F4"
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