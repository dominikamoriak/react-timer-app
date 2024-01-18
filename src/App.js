import FormattedTime from "./components/FormattedTime/FormattedTime";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);

  return (
    <Container>
      <FormattedTime time = {time}/>
      <Button time={time} setTime={setTime}/>
    </Container>
  );
};

export default App;