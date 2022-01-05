import React, { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

  const showCartHandler = () => {
    setIsCartDisplayed(true);
  };

  const hideCartHandler = () => {
    setIsCartDisplayed(false);
  };

  return (
    <Fragment>
      {isCartDisplayed && <Cart onClose={hideCartHandler} />}
      <Header onCartButtonClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
