import React from 'react';
import styles from './Button.module.css';

const Button = ({ value, type, className = '', onClick, ...props }) => {
  const handleClick = () => {
    onClick(value, type);
  };

  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      onClick={handleClick}
      {...props}
    >
      {value}
    </button>
  );
};

export default Button;