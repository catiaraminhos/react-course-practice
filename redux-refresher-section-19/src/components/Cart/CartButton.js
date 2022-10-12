import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const nrItems = useSelector((state) => state.items.length);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{nrItems}</span>
    </button>
  );
};

export default CartButton;
