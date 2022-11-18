import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem: (state, action) => {
      const newItem = action.payload.item;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          total: newItem.price
        });
      }

      state.totalQuantity++;
      state.changed = true;

    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.itemId
      );

      if (existingItem.quantity === 1) {
        const itemIndex = state.items.indexOf(existingItem);
        state.items.splice(itemIndex, 1);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;
      }

      state.totalQuantity--;
      state.changed = true;

    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
