import styles from './Modal.module.css';

const Modal = ({ children }) => {
  return (
    <>
      <div className={styles.backdrop} />
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;