import React from 'react';
import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amountInput = {
    id: 'amountItem' + props.itemId,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1'
  };

  return (
    <form className={styles.form}>
      <Input label="Amount" input={amountInput} />
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;
