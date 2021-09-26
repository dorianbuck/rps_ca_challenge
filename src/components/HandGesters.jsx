import React from "react";
import { Icon, Header, Segment, Grid } from "semantic-ui-react";

const HandGesters = () => {
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Column>
          <Header as="h1" icon>
            <Icon
              data-cy="user-image"
              name="hand rock outline"
              size="massive"
              rotated="clockwise"
            />
            Player
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" icon>
            <Icon
              data-cy="computer-image"
              name="hand rock outline"
              size="massive"
              rotated="counterclockwise"
            />
            Computer
          </Header>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default HandGesters;
