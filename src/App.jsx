import React from 'react';
import Display from './components/Display/Display';
import Button from './components/Button/Button';
import { useCalculator } from './hooks/useCalculator';
import { BUTTON_LAYOUT } from './utils/constants';
import styles from './App.module.css';

function App() {
  const { displayValue, handleButtonClick } = useCalculator();

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <Display value={displayValue} />
        <div className={styles.buttonGrid}>
          {BUTTON_LAYOUT.flat().map((button, index) => (
            <Button
              key={index}
              value={button.value}
              type={button.type}
              className={button.className}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;