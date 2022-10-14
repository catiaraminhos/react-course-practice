import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseItemQuantityHandler = () => {
    dispatch(cartActions.addItem({
      item: {
        title,
        price
      }
    }));
  };

  const decreaseItemQuantityHandler = () => {
    dispatch(cartActions.removeItem({
      itemTitle: title
    }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemQuantityHandler}>-</button>
          <button onClick={increaseItemQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
