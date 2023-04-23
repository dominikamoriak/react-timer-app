import { useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
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
      <h1>Timer App</h1>
      <FormattedTime time = {time}/>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
