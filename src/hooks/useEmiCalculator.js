import { useState } from 'react';

export const useEmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

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

    // Generate amortization schedule
    generateAmortizationSchedule(emiValue, monthlyInterestRate, loanTermInMonths);

    return emiValue;
  };

  const generateAmortizationSchedule = (emiValue, monthlyInterestRate, loanTermInMonths) => {
    let balance = loanAmount;
    const schedule = [];

    for (let month = 1; month <= loanTermInMonths; month++) {
      const interestPayment = balance * monthlyInterestRate;
      const principalPayment = emiValue - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month,
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        balance: Math.max(0, balance).toFixed(2)
      });
    }

    setAmortizationSchedule(schedule);
    return schedule;
  };

  const resetCalculator = () => {
    setLoanAmount(100000);
    setInterestRate(8.5);
    setLoanTerm(5);
    setEmi(0);
    setAmortizationSchedule([]);
  };

  return {
    loanAmount,
    setLoanAmount,
    interestRate,
    setInterestRate,
    loanTerm,
    setLoanTerm,
    emi,
    amortizationSchedule,
    calculateEmi,
    resetCalculator
  };
};
