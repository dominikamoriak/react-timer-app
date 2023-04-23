import { useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>Timer App</h1>
      <FormattedTime time = {time}/>
    </div>
  );
};

export default App;
