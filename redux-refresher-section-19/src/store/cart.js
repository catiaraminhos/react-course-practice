import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const itemToIncreaseQuantity = state.items.find(
        (item) => item.title === action.payload.item.title
      );

      if (itemToIncreaseQuantity) {
        itemToIncreaseQuantity.quantity++;
        itemToIncreaseQuantity.total = itemToIncreaseQuantity.quantity * itemToIncreaseQuantity.price;
      } else {
        state.items.push({
          title: action.payload.item.title,
          quantity: 1,
          price: action.payload.item.price,
          total: action.payload.item.price
        });
      }
    },
    removeItem: (state, action) => {
      const itemToDecreaseQuantity = state.items.find(
        (item) => item.title === action.payload.itemTitle
      );

      if (itemToDecreaseQuantity.quantity === 1) {
        const itemIndex = state.items.indexOf(itemToDecreaseQuantity);
        state.items.splice(itemIndex, 1);
      } else {
        itemToDecreaseQuantity.quantity--;
        itemToDecreaseQuantity.total = itemToDecreaseQuantity.quantity * itemToDecreaseQuantity.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
