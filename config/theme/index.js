import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#2DBD60",
      dark: "#477658",
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: "#cccccc",
      main: "#f5f5f5",
      dark: "#888888",
      contrastText: "#ffcc00",
    },
    error: {
      main: "#F4511E",
    },
  },
});
