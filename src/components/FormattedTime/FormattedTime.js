import React from 'react';
import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (60 * 60 * 1000))
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((milliseconds / (60 * 1000)) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((milliseconds / 1000) % 60)
      .toString()
      .padStart(2, '0');
    const ms = (milliseconds % 1000).toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return <div className={styles.component}>{formatTime(time)}</div>;
};

export default FormattedTime;