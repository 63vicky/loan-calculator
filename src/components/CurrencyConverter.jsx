import React, { useState, useContext, useEffect } from 'react';
import { 
  Box, Typography, TextField, Select, MenuItem, 
  FormControl, InputLabel, Grid, Paper, CircularProgress 
} from '@mui/material';
import { CurrencyContext } from '../context/CurrencyContext';

const CurrencyConverter = () => {
  const { 
    baseCurrency, setBaseCurrency, 
    exchangeRates, loading, error, 
    convertCurrency 
  } = useContext(CurrencyContext);
  
  const [amount, setAmount] = useState(100);
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  // Popular currencies to show in the dropdown
  const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'INR', 'CNY'];
  
  useEffect(() => {
    if (exchangeRates && Object.keys(exchangeRates).length > 0) {
      setConvertedAmount(convertCurrency(amount, targetCurrency));
    }
  }, [amount, targetCurrency, exchangeRates, convertCurrency]);
  
  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };
  
  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };
  
  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Paper sx={{ p: 2, bgcolor: '#ffebee', color: '#c62828', my: 2 }}>
        <Typography>{error}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Note: You need to register for a free API key at 
          <a href="https://www.exchangerate-api.com/" target="_blank" rel="noopener noreferrer">
            exchangerate-api.com
          </a> 
          and update the API_KEY in CurrencyContext.jsx
        </Typography>
      </Paper>
    );
  }
  
  return (
    <Paper sx={{ p: 3, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        Currency Converter
      </Typography>
      
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={handleAmountChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="base-currency-label">From</InputLabel>
            <Select
              labelId="base-currency-label"
              value={baseCurrency}
              label="From"
              onChange={handleBaseCurrencyChange}
            >
              {popularCurrencies.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="target-currency-label">To</InputLabel>
            <Select
              labelId="target-currency-label"
              value={targetCurrency}
              label="To"
              onChange={handleTargetCurrencyChange}
            >
              {popularCurrencies.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5">
          {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Exchange rate: 1 {baseCurrency} = {exchangeRates[targetCurrency]} {targetCurrency}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CurrencyConverter;
