import React, { useCallback, useEffect, useReducer } from 'react';

import useHttp from '../../hooks/http';
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

const Ingredients = () => {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    data,
    error,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clearError
  } = useHttp();

  useEffect(() => {
    if (!isLoading && !error) {
      if (reqIdentifier === 'REMOVE_INGREDIENT') {
        dispatchIngredients({ type: 'DELETE', id: reqExtra });
      } else if (reqIdentifier === 'ADD_INGREDIENT') {
        dispatchIngredients({
          type: 'ADD',
          ingredient: {
            id: data.name,
            ...reqExtra
          }
        });
      }
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        'https://react-hooks-update-e8a96-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
        'POST',
        JSON.stringify(ingredient),
        ingredient,
        'ADD_INGREDIENT'
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (id) => {
      const ingredientURL = `https://react-hooks-update-e8a96-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${id}.json`;
      sendRequest(ingredientURL, 'DELETE', null, id, 'REMOVE_INGREDIENT');
    },
    [sendRequest]
  );

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
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
