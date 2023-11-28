import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    fontFamily: "Montserrat",
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
    fontSize: '14px',
    h1: {
      fontSize: "24px",
      fontFamily: "Futura",
    },
    h2: {
      fontSize: "18px",
      fontFamily: "Futura",
    },
    h3: {
      fontWeight: 700,
      fontSize: "13px",
      fontFamily: "Futura",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
      fontFamily: "Futura",
    },
    h5: {
      fontWeight: 500,
      fontFamily: "Futura",
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Futura",
    },
    p: {
      fontSize: '14px',
      lineHeight: "1.75",
    },
  },
});

export { baseTheme };
