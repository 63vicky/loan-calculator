import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '70vh'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Something went wrong in the application.
      </Typography>
      
      <Button 
        component={Link} 
        to="/" 
        variant="contained" 
        color="primary"
        sx={{ mt: 3 }}
      >
        GO HOME
      </Button>
    </Box>
  );
};

export default ErrorPage;
