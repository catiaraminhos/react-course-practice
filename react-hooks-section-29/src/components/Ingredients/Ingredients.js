import React, { useReducer, useCallback } from 'react';

import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(
        (ingredient) => ingredient.id !== action.id
      );
    default:
      throw new Error('Should not get here!');
  }
};

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        isLoading: true,
        error: null
      };
    case 'RESPONSE':
      return {
        ...currentHttpState,
        isLoading: false
      };
    case 'ERROR':
      return {
        isLoading: false,
        error: action.error
      };
    case 'CLEAR_ERROR':
      return {
        ...currentHttpState,
        error: null
      };
    default:
      throw new Error('Should not get here!');
  }
};

const Ingredients = () => {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    isLoading: false,
    error: null
  });

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = (ingredient) => {
    dispatchHttp({ type: 'SEND' });

    fetch(
      'https://react-hooks-update-e8a96-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
      {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        dispatchHttp({ type: 'RESPONSE' });
        dispatchIngredients({
          type: 'ADD',
          ingredient: {
            id: responseData.name,
            ...ingredient
          }
        });
      });
  };

  const removeIngredientHandler = (id) => {
    dispatchHttp({ type: 'SEND' });

    fetch(
      `https://react-hooks-update-e8a96-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${id}.json`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(() => {
        dispatchHttp({ type: 'RESPONSE' });
        dispatchIngredients({ type: 'DELETE', id });
      })
      .catch(() => {
        dispatchHttp({ type: 'ERROR', error: 'Something went wrong!' });
      });
  };

  const clearError = () => {
    dispatchHttp({ type: 'CLEAR_ERROR' });
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
