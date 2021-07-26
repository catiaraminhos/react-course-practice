import React, { Fragment } from 'react';
import ReadDOM from 'react-dom';

import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>
            <footer className={styles.actions}>
                <Button type="button" onClick={props.onConfirm}>
                    Okay
                </Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReadDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReadDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    content={props.content}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default ErrorModal;
