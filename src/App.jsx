import React, { useState, useEffect } from "react";
import { Button, Container } from "semantic-ui-react";
import HandGesters from "./components/HandGesters";
import Footer from "./components/Footer";
import HeaderBlock from "./components/Header";

function App() {
  const [botChoice, setBotChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [results, setResults] = useState(null);
  const choices = ["Rock", "Paper", "Scissor"];
  // const [resetButton, setResetButton] = useState(false);

  const handleClick = (value) => {
    setUserChoice(value);
    randomBotChoice();
  };
  const randomBotChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setBotChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + botChoice) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
          setResults("YOU WIN!");
          break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
          setResults("YOU LOST!");
          break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
          setResults("ITS A DRAW!");
          break;
      }
    }
  }, [userChoice, botChoice]);

  return (
    <>
      <HeaderBlock />
      <Container text textAlign="center">
        <HandGesters />
        <h1>You chose: {userChoice}</h1>
        <h1>Computer chose: {botChoice} </h1>
        <h1>{results}</h1>
        {choices.map((choice, index) => (
          <Button data-cy="btn-group" key={index} onClick={() => handleClick(choice)}>
            {choice}
          </Button>
        ))}
        <Button disabled data-cy="btn-reset" className="reset-button">
          Reset Game
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default App;
