import { useContext, useState } from 'react';

import useHttp from '../../hooks/use-http';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckoutShown, setIsCheckoutShown] = useState(false);
  const { isLoading, error, sendRequest: addOrder } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderClickHandler = () => {
    setIsCheckoutShown(true);
  };

  const submitOrderHandler = async (checkoutInfo) => {
    const orderToSend = {
      items: cartCtx.items,
      checkoutInfo
    };

    const afterAddOrderHandler = () => {
      props.onClose();
    };

    addOrder(
      {
        url: 'https://react-course-http-4ee76-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        method: 'POST',
        body: orderToSend,
        headers: {
          'Content-Type': 'application/json'
        }
      },
      afterAddOrderHandler
    );
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderClickHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {error && <p>{error}</p>}
      {isCheckoutShown && (
        <Checkout
          loading={isLoading}
          onCancel={props.onClose}
          onConfirm={submitOrderHandler}
        />
      )}
      {!isCheckoutShown && modalActions}
    </Modal>
  );
};

export default Cart;
