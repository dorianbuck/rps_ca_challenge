import React from "react";
import { Modal, Button } from "semantic-ui-react";
import ButtonGroup from "./ButtonGroup";

function ResultsModal({ userChoice, botChoice, results, btnChoice, handleClick, choices }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Test</Button>}
    >
      <Modal.Header>{results}</Modal.Header>
      <Modal.Content>
        <p>You chose {userChoice}</p>
        <p>Computer chose {botChoice}</p>
      </Modal.Content>
    </Modal>
  );
}

export default ResultsModal;