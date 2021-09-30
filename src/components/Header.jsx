import React from "react";
import { Container, Header } from "semantic-ui-react";

const HeaderBlock = () => {
  return (
    <div id="header-tops">
    <Container textAlign="center">
      <Header color="orange" data-cy="header" >
        Do you want to play a game?
        <Header sub color="red" data-cy="sub-header" id="sub-headers">
          Make a draw by pressing the buttons below
        </Header>
      </Header>
      </Container>
      </div>
  );
};

export default HeaderBlock;
