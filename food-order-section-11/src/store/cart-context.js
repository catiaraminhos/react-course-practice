import React, { useReducer } from 'react';

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems = [];
    if (existingCartItemIndex === -1) {
      updatedItems = state.items.concat(action.item);
    } else {
      updatedItems = state.items.map((item) => {
        return {
          ...item,
          amount: item.amount + (item.id === action.item.id ? action.item.amount : 0)
        };
      });
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === 'REMOVE') {
    const itemToRemove = state.items.find((item) => item.id === action.id);
    
    let updatedItems = state.items;
    let updatedTotalAmount = state.totalAmount;

    if (itemToRemove) {
      updatedTotalAmount =
        state.totalAmount - itemToRemove.price * 1;

      if (itemToRemove.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        updatedItems = state.items.map((item) => {
          return {
            ...item,
            amount: item.amount - (item.id === action.id ? 1 : 0)
          };
        });
      }
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
