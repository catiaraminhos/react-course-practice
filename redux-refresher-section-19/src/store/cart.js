import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
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
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
