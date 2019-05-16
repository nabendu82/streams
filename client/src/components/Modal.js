import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="modal-body">
            <div onClick={(e) => e.stopPropagation()} className="modal-main delete-modal">
                <div className="header">{props.title}</div>
                <div className="modal-text">{props.content}</div>
                {props.actions}
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;