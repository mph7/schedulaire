import React from 'react';
import './Modal.css';

function Modal({ showModal, content }) {
  return (
    <div className={`modal ${showModal ? 'modal-on' : ''}`}>
      <div className="modal-window">
        {content}
      </div>
    </div>
  );
}

export default Modal;