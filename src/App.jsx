import React, { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import { Button, Container } from 'semantic-ui-react'
import HandGesters from "./components/HandGesters";


function App() {
  const [botChoice, setBotChoice] = useState(null)
  // const [resetButton, setResetButton] = useState(false)
 

  const handleClick = (value) => {
    setBotChoice(value)
    // randBotChoice()
  }

  return (
    <Container text textAlign="center">
      <header data-cy="header">
      Lets play a game!
      </header>
      <HandGesters />
      <ButtonGroup />
      <Button data-cy="btn-reset">Reset Game</Button>
    </Container>
  );
}

export default App;
