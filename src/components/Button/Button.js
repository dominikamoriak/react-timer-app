import styles from './Button.module.scss';
import { useState } from "react";
import { useEffect } from 'react';

const Button = ({ time, setTime}) => {

    const [intervalId, setIntervalId] = useState(null);
  
    useEffect(() => {
      return () => {
        clearInterval(intervalId);
      };
    }, [intervalId]);

    const handleStart = () => {
        const id = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
        setIntervalId(id);
      };
    
      const handleStop = () => {
        clearInterval(intervalId);
        setIntervalId(null);
      };
    
      const handleReset = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setTime(0);
      };

    return (
        <div>
        <button className={styles.button} onClick={handleStart}>Start</button>
        <button className={styles.button} onClick={handleStop}>Stop</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
    );
};

export default Button;