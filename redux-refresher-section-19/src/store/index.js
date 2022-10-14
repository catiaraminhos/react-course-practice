import { configureStore } from '@reduxjs/toolkit';

import cartSliceReducer from './cart';
import uiSliceReducer from './ui';

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    ui: uiSliceReducer
  }
});

export default store;
