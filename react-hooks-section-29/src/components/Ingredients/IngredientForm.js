import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({
    title: '',
    amount: ''
  });

  const onTitleChange = (event) => {
    const newTitle = event.target.value;

    setInputState((previousInputState) => ({
      title: newTitle,
      amount: previousInputState.amount
    }));
  };

  const onAmountChange = (event) => {
    const newAmount = event.target.value;

    setInputState((previousInputState) => ({
      amount: newAmount,
      title: previousInputState.title
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={onTitleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={onAmountChange}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
