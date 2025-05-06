import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        setLoading(true);
        // Replace with your API key from https://www.exchangerate-api.com/
        const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY; 
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
        );
        setExchangeRates(response.data.conversion_rates);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching exchange rates:', err);
        setError('Failed to fetch exchange rates. Please try again later.');
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const convertCurrency = (amount, targetCurrency) => {
    if (!exchangeRates || !exchangeRates[targetCurrency]) return amount;
    return (amount * exchangeRates[targetCurrency]).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        exchangeRates,
        loading,
        error,
        convertCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
