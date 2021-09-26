import React, { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import { Button, Container, Header } from "semantic-ui-react";
import HandGesters from "./components/HandGesters";
import Footer from "./components/Footer";
import HeaderBlock from "./components/Header";

function App() {
  const [botChoice, setBotChoice] = useState(null);
  // const [resetButton, setResetButton] = useState(false)

  const handleClick = (value) => {
    setBotChoice(value);
    // randBotChoice()
  };

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
