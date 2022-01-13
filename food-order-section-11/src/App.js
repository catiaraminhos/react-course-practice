import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './store/cart-context';

const App = () => {
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

  const showCartHandler = () => {
    setIsCartDisplayed(true);
  };

  const hideCartHandler = () => {
    setIsCartDisplayed(false);
  };

  return (
    <CartContextProvider>
      {isCartDisplayed && <Cart onClose={hideCartHandler} />}
      <Header onCartButtonClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};

export default App;
