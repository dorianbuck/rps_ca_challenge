import React from "react";
import { Button, Container } from "semantic-ui-react";

const Buttons = () => {
  return (
    <div>
      <Button.Group data-cy="btn-group" basic>
        <Button data-cy="btn-rock">Rock</Button>
        <Button data-cy="btn-paper">Paper</Button>
        <Button data-cy="btn-scissor">Scissors</Button>
      </Button.Group>
    </div>
  );
};

export default Buttons;
