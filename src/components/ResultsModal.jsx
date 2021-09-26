import React from 'react'
import { Modal } from 'semantic-ui-react'




function ResultsModal ({userChoice, botChoice, results}) {
  return (
    <Modal>
      <Modal.Header>{results}</Modal.Header>
      <Modal.Content><p>You chose {userChoice}</p>
      <p>Computer chose {botChoice}</p>
      </Modal.Content>
    </Modal>
  )
}

export default ResultsModal;
