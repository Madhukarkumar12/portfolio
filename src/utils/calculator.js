import { OPERATORS } from './constants';

export const calculate = (prevValue, nextValue, operation) => {
  const prev = parseFloat(prevValue);
  const next = parseFloat(nextValue);
  
  if (isNaN(prev) || isNaN(next)) return '0';

  switch (operation) {
    case OPERATORS.ADD:
      return (prev + next).toString();
    case OPERATORS.SUBTRACT:
      return (prev - next).toString();
    case OPERATORS.MULTIPLY:
      return (prev * next).toString();
    case OPERATORS.DIVIDE:
      return next === 0 ? 'Error' : (prev / next).toString();
    default:
      return nextValue;
  }
};

export const formatNumber = (num) => {
  if (num === 'Error') return num;
  
  const number = parseFloat(num);
  if (isNaN(number)) return '0';
  
  // Handle very large numbers
  if (Math.abs(number) > 999999999999) {
    return number.toExponential(6);
  }
  
  return number.toString();
};

export const applyFunction = (value, func) => {
  const number = parseFloat(value);
  if (isNaN(number)) return '0';

  switch (func) {
    case OPERATORS.PERCENT:
      return (number / 100).toString();
    case OPERATORS.PLUS_MINUS:
      return (-number).toString();
    default:
      return value;
  }
};