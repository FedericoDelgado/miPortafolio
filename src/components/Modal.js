import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';

function MyModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='skill-button' variant="primary" onClick={handleShow}>
      {props.buttonText}
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <img src={props.image} alt="Imagen" className="skill-button" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default MyModal;