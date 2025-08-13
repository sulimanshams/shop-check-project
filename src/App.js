import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderComponent from "./Header";

const theme = createTheme(); 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderComponent />
    </ThemeProvider>
  );
}

export default App;
