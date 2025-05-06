import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar, Toolbar, Typography, Switch, Box, Container,
  FormControlLabel, useMediaQuery
} from '@mui/material';
import { ThemeContext } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import HomePage from './pages/HomePage';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
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
          <Router>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                      Loan Calculator
                    </Link>
                  </Typography>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                      HOME
                    </Link>
                    <Link to="/exchange-rates" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                      EXCHANGE RATES (LIVE)
                    </Link>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                      ABOUT
                    </Link>
                    <Link to="/error-page" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                      ERROR PAGE
                    </Link>
                  </Box>
                  <FormControlLabel
                    control={<Switch checked={darkMode} onChange={handleThemeChange} />}
                    label=""
                  />
                </Toolbar>
              </AppBar>
            </Box>

            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/error-page" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/error-page" replace />} />
              </Routes>
            </Container>
          </Router>
        </ThemeProvider>
      </CurrencyProvider>
    </ThemeContext.Provider>
  );
}

export default App
