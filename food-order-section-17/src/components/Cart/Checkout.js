import React, { useRef } from 'react';

import classes from './Checkout.module.css';

const Checkout = (props) => {
  const nameInput = useRef(null);
  const streetInput = useRef(null);
  const postalCodeInput = useRef(null);
  const cityInput = useRef(null);

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInput.current.value;
    const street = streetInput.current.value;
    const postalCode = postalCodeInput.current.value;
    const city = cityInput.current.value;

    console.log('Confirming...');
    console.log(name, street, postalCode, city);
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
      </div>

      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
      </div>

      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInput} />
      </div>

      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
      </div>

      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
