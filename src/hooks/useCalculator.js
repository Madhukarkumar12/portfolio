import { useState, useCallback } from 'react';
import { OPERATORS } from '../utils/constants';
import { calculate, applyFunction, formatNumber } from '../utils/calculator';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = useCallback((number) => {
    if (waitingForNewValue) {
      setDisplayValue(number);
      setWaitingForNewValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? number : displayValue + number);
    }
  }, [displayValue, waitingForNewValue]);

  const handleOperator = useCallback((nextOperation) => {
    const inputValue = parseFloat(displayValue);

    if (prevValue === null) {
      setPrevValue(displayValue);
    } else if (operation && !waitingForNewValue) {
      const currentValue = prevValue || '0';
      const newValue = calculate(currentValue, displayValue, operation);
      
      setDisplayValue(formatNumber(newValue));
      setPrevValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  }, [displayValue, operation, prevValue, waitingForNewValue]);

  const handleFunction = useCallback((func) => {
    switch (func) {
      case OPERATORS.CLEAR:
        setDisplayValue('0');
        setPrevValue(null);
        setOperation(null);
        setWaitingForNewValue(false);
        break;
      
      case OPERATORS.EQUALS:
        if (prevValue && operation) {
          const newValue = calculate(prevValue, displayValue, operation);
          setDisplayValue(formatNumber(newValue));
          setPrevValue(null);
          setOperation(null);
          setWaitingForNewValue(true);
        }
        break;
      
      case OPERATORS.DECIMAL:
        if (waitingForNewValue) {
          setDisplayValue('0.');
          setWaitingForNewValue(false);
        } else if (displayValue.indexOf('.') === -1) {
          setDisplayValue(displayValue + '.');
        }
        break;
      
      case OPERATORS.PERCENT:
      case OPERATORS.PLUS_MINUS:
        const newValue = applyFunction(displayValue, func);
        setDisplayValue(formatNumber(newValue));
        break;
      
      default:
        break;
    }
  }, [displayValue, operation, prevValue, waitingForNewValue]);

  const handleButtonClick = useCallback((value, type) => {
    switch (type) {
      case 'number':
        handleNumber(value);
        break;
      case 'operator':
        handleOperator(value);
        break;
      case 'function':
        handleFunction(value);
        break;
      default:
        break;
    }
  }, [handleNumber, handleOperator, handleFunction]);

  return {
    displayValue,
    handleButtonClick
  };
};