import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  const amountInput = {
    id: 'amountItem' + props.itemId,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1'
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" input={amountInput} />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
