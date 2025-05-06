import { useState } from 'react';

export const useEmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    // Convert interest rate from annual to monthly percentage
    const monthlyInterestRate = interestRate / 12 / 100;

    // Convert loan term from years to months
    const loanTermInMonths = loanTerm * 12;

    // Calculate EMI using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const emiValue = (loanAmount * monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanTermInMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1);

    setEmi(emiValue);

    return emiValue;
  };

  return {
    loanAmount,
    setLoanAmount,
    interestRate,
    setInterestRate,
    loanTerm,
    setLoanTerm,
    emi,
    calculateEmi
  };
};
