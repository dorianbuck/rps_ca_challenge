import React, { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import { Button, Container, Header } from 'semantic-ui-react'
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
      <Header data-cy="header" as="h1">
        Lets play a game!
        <Header.Subheader data-cy="sub-header">Make a choice by pressing the buttons below</Header.Subheader>
      </Header>
      <HandGesters />
      <ButtonGroup />
      <Button disabled data-cy="btn-reset">Reset Game</Button>
    </Container>
  );
}

export default App;
