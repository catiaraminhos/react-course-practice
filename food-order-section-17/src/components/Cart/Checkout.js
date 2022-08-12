import React, { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  });

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

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const postalCodeIsValid = isFiveChars(postalCode);
    const cityIsValid = !isEmpty(city);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    console.log('Confirming...');
    console.log(name, street, postalCode, city);
  };

  const nameControlClasses = `${classes.control} ${
    !formInputsValidity.name ? classes.invalid : ''
  }`;
  const streetControlClasses = `${classes.control} ${
    !formInputsValidity.street ? classes.invalid : ''
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    !formInputsValidity.postalCode ? classes.invalid : ''
  }`;
  const cityControlClasses = `${classes.control} ${
    !formInputsValidity.city ? classes.invalid : ''
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputsValidity.name && <p>Please enter a name.</p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputsValidity.street && <p>Please enter a street.</p>}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInput} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (with 5 characters).</p>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputsValidity.city && <p>Please enter a city.</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
