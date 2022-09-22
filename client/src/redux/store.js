import { configureStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import cartReducer from '../Features/cartSlice';
import modalReducer from '../Features/modalSlice';
import productReducer from '../Features/productSlice';
export const store = configureStore({
  reducer: { products: productReducer, cart: cartReducer, modal: modalReducer },
  middleware: (gdM) =>
    gdM().concat(save({ states: ['cart'], namespace: 'cart' })),

  preloadedState: load({
    states: ['cart'],
    namespace: 'cart',
  }),
});
