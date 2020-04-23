import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import ForceInstallation from './ForceInstallation';

const ModalText = () => {
  return (
    <div>
      <br />
      <Modal trigger={<Button>Show MetaMask instruction</Button>}>
        <Modal.Header>Instruction for install MetaMask</Modal.Header>
        <Modal.Content>
          <ForceInstallation />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ModalText;
