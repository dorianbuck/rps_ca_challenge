import React from "react";
import { Container, Header } from "semantic-ui-react";

const HeaderBlock = () => {
  return (
    <div className="header-top">
    <Container  textAlign="center">
      <Header data-cy="header" as="h1">
        Lets play a game!
        <Header.Subheader data-cy="sub-header">
          Make a choice by pressing the buttons below
        </Header.Subheader>
      </Header>
      </Container>
      </div>
  );
};

export default HeaderBlock;
