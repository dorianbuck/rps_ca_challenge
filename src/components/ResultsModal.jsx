import React from 'react'
import { Modal } from 'semantic-ui-react'




function ResultsModal ({userChoice, computerChoice, results}) {
  return (
    <Modal>
      <Modal.Header>{results}</Modal.Header>
      <Modal.Content><p>You choose {userChoice}</p>
      <p>Computer choose {computerChoice}</p>
      </Modal.Content>
    </Modal>
  )
}

export default ResultsModal;
