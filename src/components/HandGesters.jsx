import React from "react";
import { Icon } from "semantic-ui-react";

const HandGesters = () => {
  return (
    <>
      <Icon
        data-cy="user-image"
        name="hand rock outline"
        size="massive"
        rotated="clockwise"
      />
      <Icon
        data-cy="computer-image"
        name="hand rock outline"
        size="massive"
        rotated="counterclockwise"
        
      />
    </>
  );
};

export default HandGesters;
