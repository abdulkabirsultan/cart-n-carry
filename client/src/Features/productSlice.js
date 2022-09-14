import { createSlice } from '@reduxjs/toolkit';
import {
  getAllProducts,
  getProductCategories,
} from '../API-Actions/productActions';
const initialState = {
  products: [],
  isLoading: false,
  categories: [],
};

const productReducer = createSlice({
  initialState,
  name: 'Product',
  reducers: {
    getAllItems(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      console.log(payload);
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },

    //categories
    [getProductCategories.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getProductCategories.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return { ...state, isLoading: false, categories: payload };
    },
    [getProductCategories.rejected]: (state, { payload }) => {
      console.log(payload);
      return { ...state, isLoading: false };
    },
  },
});

export const { getAllItems } = productReducer.actions;
export default productReducer.reducer;
