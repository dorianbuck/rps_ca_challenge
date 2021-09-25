import React, { useState } from "react";
import Buttons from "./components/Buttons";
import { Button } from 'semantic-ui-react'


function App() {
  const [botChoice, setBotChoice] = useState(null)
  // const [resetButton, setResetButton] = useState(false)
 

  const handleClick = (value) => {
    setBotChoice(value)
    // randBotChoice()
  }

  return (
    <>
      <Button data-cy="btn-reset">Reset Game</Button>
      <header data-cy="header">
      Lets play a game!
      </header>
      <Buttons />
    </>
  );
}

export default App;
