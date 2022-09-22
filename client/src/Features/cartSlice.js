import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const getCartProducts = createAsyncThunk('getCartProducts', async () => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_SERVER_URI}?limit=100`);
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  products: [],
  cartItems: [],
  amount: 0,
  total: 0,
};
const cartReducer = createSlice({
  initialState,
  name: 'cart',
  extraReducers: {
    [getCartProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
    },
  },
  reducers: {
    toggleProduct(state, { payload }) {
      const cartItem = state.products.find((p) => p._id === payload.id);
      if (cartItem) {
        const validateCart = state.cartItems.find(
          (c) => c._id === cartItem?._id
        );
        if (!validateCart) {
          state.cartItems.push(cartItem);
        }
        const cart = state.cartItems.find((c) => c._id === cartItem?._id);
        payload.operation === 'add' ? (cart.amount += 1) : (cart.amount -= 1);
        if (cart.amount < 1 || payload.operation === 'remove') {
          state.cartItems = state.cartItems.filter((c) => c._id !== cart._id);
          cart.amount = 0;
        }
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
    calculateTotal(state) {
      const cartTotal = state.cartItems.reduce(
        ({ amount, total }, item) => {
          amount += item.amount;
          total += item.amount * item.price;
          return { amount, total };
        },
        { amount: 0, total: 0 }
      );
      state.amount = cartTotal.amount;
      state.total = cartTotal.total;
    },
  },
});

export const { toggleProduct, calculateTotal, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
