import React, { useState } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
