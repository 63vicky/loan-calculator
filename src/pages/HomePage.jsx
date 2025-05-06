import React, { useState, useContext, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, Paper,
  Select, MenuItem, FormControl,
  InputLabel, Grid
} from '@mui/material';
import { useEmiCalculator } from '../hooks/useEmiCalculator';
import { CurrencyContext } from '../context/CurrencyContext';

const HomePage = () => {
  const {
    loanAmount, setLoanAmount,
    interestRate, setInterestRate,
    loanTerm, setLoanTerm,
    emi, calculateEmi
  } = useEmiCalculator();

  const {
    baseCurrency,
    convertCurrency
  } = useContext(CurrencyContext);

  const [selectedCurrency, setSelectedCurrency] = useState(baseCurrency);
  const [convertedEmi, setConvertedEmi] = useState(0);

  useEffect(() => {
    if (emi > 0) {
      setConvertedEmi(convertCurrency(emi, selectedCurrency));
    }
  }, [emi, selectedCurrency, convertCurrency]);

  const handleCalculate = () => {
    const calculatedEmi = calculateEmi();
    setConvertedEmi(convertCurrency(calculatedEmi, selectedCurrency));
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Loan Amount"
              type="number"
              fullWidth
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Interest Rate (%)"
              type="number"
              fullWidth
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Term (Years)"
              type="number"
              fullWidth
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={handleCalculate}
          fullWidth
        >
          CALCULATE
        </Button>
      </Paper>

      {emi > 0 && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Monthly EMI: ${emi.toFixed(2)}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <FormControl sx={{ minWidth: 120, mr: 2 }}>
              <InputLabel id="currency-select-label">Currency</InputLabel>
              <Select
                labelId="currency-select-label"
                value={selectedCurrency}
                label="Currency"
                onChange={handleCurrencyChange}
              >
                {['INR', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'].map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography variant="body1">
              Converted EMI: {selectedCurrency} {convertedEmi}
            </Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default HomePage;
