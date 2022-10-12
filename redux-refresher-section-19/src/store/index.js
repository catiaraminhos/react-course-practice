import { configureStore } from '@reduxjs/toolkit';

import cartSliceReducer from './cart';

const store = configureStore({
  reducer: cartSliceReducer
});

export default store;
