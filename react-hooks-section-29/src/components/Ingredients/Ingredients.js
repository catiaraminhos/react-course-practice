import React, { useState, useCallback } from 'react';

import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);

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
        setIsLoading(false);
        setIngredients((previousIngredients) => [
          ...previousIngredients,
          {
            id: responseData.name,
            ...ingredient
          }
        ]);
      });
  };

  const removeIngredientHandler = (id) => {
    setIsLoading(true);

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
        setIsLoading(false);
        setIngredients((previousIngredients) =>
          previousIngredients.filter((ingredient) => ingredient.id !== id)
        );
      })
      .catch(() => {
        setIsLoading(false);
        setError('Something went wrong!');
      });
  };

  const clearError = () => {
    setError(null);
  };

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
