import React, { useState, useEffect } from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import HandGesters from "./components/HandGesters";
import Footer from "./components/Footer";
import HeaderBlock from "./components/Header";

function App() {
  const [botChoice, setBotChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [results, setResults] = useState(null);
  const choices = ["Rock", "Paper", "Scissor"];

  const handleClick = (value) => {
    setUserChoice(value);
    randomBotChoice();
  };
  const randomBotChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setBotChoice(randomChoice);
  };

  useEffect(() => {
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
      default:
        break;
    }
  }, [userChoice, botChoice]);

  return (
    <>
      <HeaderBlock />
      <Container text textAlign="center">
        <HandGesters />
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <h1>{userChoice}</h1>
            </Grid.Column>
            <Grid.Column width={10}>
              <h1 data-cy="game-results">{results}</h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1 data-cy="computer-choice-info">{botChoice} </h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {choices.map((choice, index) => (
          <Button
            data-cy="btn-group"
            key={index}
            onClick={() => handleClick(choice)}
          >
            {choice}
          </Button>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;
