import { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMealsFromServer = (data) => {
      const loadedMeals = [];

      for (const mealKey in data) {
        loadedMeals.push(data[mealKey]);
      }

      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: 'https://react-course-http-4ee76-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      },
      transformMealsFromServer
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = <ul>{mealsList}</ul>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading available meals...</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
