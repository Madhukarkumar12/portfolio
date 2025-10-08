import React from 'react';
import styles from './Display.module.css';

const Display = ({ value }) => {
  return (
    <div className={styles.display}>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default Display;