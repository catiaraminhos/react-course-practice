import React from 'react';

import CartIcon from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartButtonClickHandler = () => {
    props.onCartButtonClick();
  };

  return (
    <button className={styles.button} onClick={cartButtonClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
