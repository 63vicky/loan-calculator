import React, { useContext, useState } from 'react';
import {
  Box, Typography, Paper, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow,
  TablePagination, CircularProgress
} from '@mui/material';
import { CurrencyContext } from '../context/CurrencyContext';

const ExchangeRatesPage = () => {
  const { baseCurrency, exchangeRates, loading, error } = useContext(CurrencyContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
      <Box sx={{ my: 4 }}>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Note: You need to register for a free API key at
          <a href="https://www.exchangerate-api.com/" target="_blank" rel="noopener noreferrer">
            {' exchangerate-api.com '}
          </a>
          and update the API_KEY in CurrencyContext.jsx
        </Typography>
      </Box>
    );
  }

  const currencies = Object.keys(exchangeRates);
  const slicedCurrencies = currencies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Live Exchange Rates (Base: {baseCurrency})
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedCurrencies.map((currency) => (
              <TableRow key={currency}>
                <TableCell component="th" scope="row">
                  {currency}
                </TableCell>
                <TableCell align="right">
                  {exchangeRates[currency]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={currencies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};

export default ExchangeRatesPage;
