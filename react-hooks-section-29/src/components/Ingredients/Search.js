import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const filterInputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (enteredFilter === filterInputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;

        fetch(
          'https://react-hooks-update-e8a96-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json' +
            query
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngredients = [];

            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount
              });
            }
            onLoadIngredients(loadedIngredients);
          });
      }
    }, 500);
  }, [enteredFilter, onLoadIngredients, filterInputRef]);

  const filterChangeHandler = (event) => {
    setEnteredFilter(event.target.value);
  };

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={filterChangeHandler}
            ref={filterInputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
