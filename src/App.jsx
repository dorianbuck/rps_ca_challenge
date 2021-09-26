import React, { useState, useEffect } from "react";
import ButtonGroup from "./components/ButtonGroup";
import { Button, Container } from "semantic-ui-react";
import HandGesters from "./components/HandGesters";
import Footer from "./components/Footer";
import HeaderBlock from "./components/Header";

function App() {
  const [botChoice, setBotChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null)
  const [results, setResults] = useState(null)
  const choices = ['rock', 'paper', 'scissor']
  // const [resetButton, setResetButton] = useState(false)

  const handleClick = (value) => {
    setBotChoice(value);
    randomBotChoice()
  };
  const randomBotChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setBotChoice(randomChoice)
  }

  return (
    <>
      <HeaderBlock />
      <Container text textAlign="center">
        <HandGesters />
        <ButtonGroup />
        <Button disabled data-cy="btn-reset" className="reset-button">
          Reset Game
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default App;
