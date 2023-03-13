import React from "react";
import "../App.css";

const Alert = ({ image, onClose }) => {
  return (
    <dialog className="alert" open onClick={onClose}>
      <img src={image} alt="Imagen desplegada" />
    </dialog>
  );
};

export default Alert;