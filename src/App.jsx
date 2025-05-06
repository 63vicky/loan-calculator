import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar, Toolbar, Typography, Switch, Box, Container,
  FormControlLabel, useMediaQuery
} from '@mui/material';
import { ThemeContext } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import HomePage from './pages/HomePage';
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
      <CurrencyProvider>
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
                </div>
              </Toolbar>
            </AppBar>
          </Box>

          <Container>
            <HomePage />
          </Container>
        </ThemeProvider>
      </CurrencyProvider>
    </ThemeContext.Provider>
  );
}

export default App
