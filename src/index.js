import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette:{
    mode:"light",
    background:{default:"#e9eef3"}
  },shape:{
    borderRadius:16
  },typography:{
    fontFamily:`"Inter" , "Roboto" , "Arial" , "sans-serif"`,
    h4:{fontWeight:800},
    button:{textTransform:"none"}
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
