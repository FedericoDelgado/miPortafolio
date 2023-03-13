import React from "react";
import PropTypes from "prop-types";

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={image} alt="Modal" />
        <button className="modal-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;