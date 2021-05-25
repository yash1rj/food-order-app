import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onModalHandler} />;
};

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            {props.children}
        </Card>
    );
};

const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onModalHandler={props.onModalHandler} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default Modal;