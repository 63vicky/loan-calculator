import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar, Toolbar, Typography, Switch, Box, Container,
  FormControlLabel, useMediaQuery, IconButton, Drawer, List,
  ListItem,
  withTheme,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import HomePage from './pages/HomePage';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import './App.css';

// Navigation component that uses useLocation hook
const Navigation = ({ darkMode, handleThemeChange }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { text: 'HOME', path: '/' },
    { text: 'EXCHANGE RATES (LIVE)', path: '/exchange-rates' },
    { text: 'ABOUT', path: '/about' },
    { text: 'ERROR PAGE', path: '/error-page' }
  ];

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={toggleMobileMenu}
              sx={{
                display: { md: 'none' },
                mr: 2,
                fontSize: '2rem',
                padding: '8px'
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Loan Calculator
              </Link>
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    margin: '0 10px',
                    fontWeight: isActive(link.path) ? 'bold' : 'normal',
                    borderBottom: isActive(link.path) ? '2px solid white' : 'none',
                    padding: '4px 0'
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>

            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleThemeChange}
                  sx={{
                    '& .MuiSwitch-thumb': {
                      backgroundColor: '#fff',
                    },
                    '& .MuiSwitch-track': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    }
                  }}
                />
              }
              label=""
            />
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '70%',
            maxWidth: 400,
            backgroundColor: theme => theme.palette.background,
            color: '#fff'
          },
          
        }}
      >
        
        <List sx={{ pt: 0, padding: '16px', paddingRight: '0px' }}>
          {navLinks.map((link) => (
            <ListItem
              key={link.path}
              disablePadding
              sx={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: isActive(link.path) ? useTheme().palette.primary.light : 'transparent',
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px'
              }}
            >
              <Link
                to={link.path}
                style={{
                  textDecoration: 'none',
                  color: isActive(link.path) ? 'white' : useTheme().palette.text.primary,
                  width: '100%',
                  padding: '16px 24px',
                  display: 'block',
                  fontWeight: isActive(link.path) ? 'bold' : 'normal',
                }}
                onClick={closeMobileMenu}
              >
                <Typography variant="body1" sx={{
                  fontWeight: isActive(link.path) ? 700 : 500,
                  fontSize: isActive(link.path) ? '1.1rem' : '1rem'
                }}>
                  {link.text}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

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
            <Navigation darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <Container sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 3 }}>
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
