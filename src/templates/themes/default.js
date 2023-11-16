import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#ce712c",
      main: "#DA1A32",
      dark: "#ce712c",
    },
    text: {
      primary: "#000000",
      secondary: "#DA1A32",
    },
    secondary: {
      light: "#4F4F4F",
      main: "#363636",
      dark: "#4F4F4F",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: "proxima-nova",
    h1: {
      fontSize: "4.5rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export { baseTheme };
