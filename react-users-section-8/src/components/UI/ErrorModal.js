import React from 'react';

import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
            <Card className={styles.modal}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.content}>{props.content}</div>
                <div className={styles.actions}>
                    <Button type="button" onClick={props.onOkayClick}>
                        Okay
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ErrorModal;
