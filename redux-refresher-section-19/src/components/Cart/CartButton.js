import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const nrItems = useSelector((state) => state.cart.items.length);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{nrItems}</span>
    </button>
  );
};

export default CartButton;
