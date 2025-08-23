import Home from './Home';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create theme with custom font
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
          `}
        </style>
        <Box>
          {/* <Navbar /> */}
          <Home />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App;
