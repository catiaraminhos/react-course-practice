import React, { Fragment } from 'react';
import ReadDOM from 'react-dom';

import Card from './Card';

import styles from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCancel} />;
};

const ModalOverlay = (props) => {
  return <Card className={styles.modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReadDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById('backdrops')
      )}
      {ReadDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
};

export default Modal;
