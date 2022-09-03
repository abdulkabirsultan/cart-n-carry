import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Features/productSlice';
export const store = configureStore({
  reducer: { products: productReducer },
});
