import { useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const nrItems = useSelector((state) => state.items.length);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{nrItems}</span>
    </button>
  );
};

export default CartButton;
