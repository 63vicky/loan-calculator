import React, { useState, useContext, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, Paper,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Select, MenuItem, FormControl,
  InputLabel, Grid
} from '@mui/material';
import { useEmiCalculator } from '../hooks/useEmiCalculator';
import { CurrencyContext } from '../context/CurrencyContext';

const HomePage = () => {
  const {
    loanAmount, setLoanAmount,
    interestRate, setInterestRate,
    loanTerm, setLoanTerm,
    emi, amortizationSchedule,
    calculateEmi, resetCalculator
  } = useEmiCalculator();

  const {
    baseCurrency,
    convertCurrency
  } = useContext(CurrencyContext);

  const [selectedCurrency, setSelectedCurrency] = useState(baseCurrency);
  const [convertedEmi, setConvertedEmi] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (emi > 0) {
      setConvertedEmi(convertCurrency(emi, selectedCurrency));
    }
  }, [emi, selectedCurrency, convertCurrency]);

  const handleCalculate = () => {
    const calculatedEmi = calculateEmi();
    setConvertedEmi(convertCurrency(calculatedEmi, selectedCurrency));
    setShowResults(true);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleResetTable = () => {
    // Reset the table or recalculate with default values
    setLoanAmount(100000);
    setInterestRate(8.5);
    setLoanTerm(5);
    // Hide all results except the reset button
    setShowResults(false);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

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
        sx={{ mb: 3 }}
      >
        CALCULATE
      </Button>

      {emi > 0 && (
        <>
          {/* Always show the reset button */}
          

          {/* Show the rest of the content only when showResults is true */}
          {showResults && (
            <>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h5" gutterBottom>
                Monthly EMI: ${emi.toFixed(2)}
              </Typography>
              <Button
              variant="outlined"
              color="primary"
              onClick={handleResetTable}
            >
              RESET TABLE
            </Button>
          </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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

              <Typography variant="h6" gutterBottom>
                Amortization Schedule ({selectedCurrency})
              </Typography>

              <TableContainer component={Paper} sx={{ mb: 4 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Month</TableCell>
                      <TableCell align="right">Principal</TableCell>
                      <TableCell align="right">Interest</TableCell>
                      <TableCell align="right">Remaining Balance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {amortizationSchedule.map((row) => (
                      <TableRow key={row.month}>
                        <TableCell component="th" scope="row">
                          {row.month}
                        </TableCell>
                        <TableCell align="right">
                          {convertCurrency(row.principalPayment, selectedCurrency)} {selectedCurrency}
                        </TableCell>
                        <TableCell align="right">
                          {convertCurrency(row.interestPayment, selectedCurrency)} {selectedCurrency}
                        </TableCell>
                        <TableCell align="right">
                          {convertCurrency(row.balance, selectedCurrency)} {selectedCurrency}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default HomePage;
