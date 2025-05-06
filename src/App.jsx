import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar, Toolbar, Typography, Switch, Box, Container,
  FormControlLabel, useMediaQuery
} from '@mui/material';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#1976d2',
          },
        },
      }),
    [darkMode],
  );

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Loan Calculator
              </Typography>
              <div className="theme-toggle">
                <FormControlLabel
                  control={<Switch checked={darkMode} onChange={handleThemeChange} />}
                  label=""
                />
                <span className="theme-toggle-label">
                  {darkMode ? "Dark Mode" : "Light Mode"}
                </span>
              </div>
            </Toolbar>
          </AppBar>
        </Box>

        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Loan Calculator App
            </Typography>
            <Typography variant="body1">
              This is a simple loan calculator app with dark/light mode toggle.
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App
