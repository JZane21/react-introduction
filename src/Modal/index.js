import React from 'react';
// import ReactDOM from 'react-dom/client';
import PortalReactDOM from 'react-dom'
import './Modal.css';

function Modal({children}){
    return PortalReactDOM.createPortal(
        <section className='ModalBackground'>
            {children}
        </section>,
        document.getElementById('modal')
    );
}

export { Modal };