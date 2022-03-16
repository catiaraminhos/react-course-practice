import React, { useContext } from 'react';

import Modal from '../UI/Modal';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1
    });
  };

  const cartItemRemoveHandler = (id) => {};

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCancel={props.onClose}>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.button} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button type="button" className={styles['button--alt']}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
