import React, { useState, useEffect } from "react";
import { Button, Container } from "semantic-ui-react";
import HandGesters from "./components/HandGesters";
import Footer from "./components/Footer";
import HeaderBlock from "./components/Header";
import ResultsModal from "./components/ResultsModal";

function App({ btnChoice }) {
  const [botChoice, setBotChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [results, setResults] = useState(null);
  const choices = ["rock", "paper", "scissor"];
  // const [resetButton, setResetButton] = useState(false)

  const handleClick = (value) => {
    setBotChoice(value);
    randomBotChoice();
  };
  const randomBotChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setBotChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + botChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
          setResults("YOU WIN!");
          break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
          setResults("YOU LOST!");
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
          setResults("ITS A DRAW!");
          break;
      }
    }
  });

  return (
    <>
      <HeaderBlock />
      <Container text textAlign="center">
        <HandGesters />
        <ResultsModal btnChoice={btnChoice} onClick={() => handleClick(choices)}/>
        <Button disabled data-cy="btn-reset" className="reset-button">
          Reset Game
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default App;
