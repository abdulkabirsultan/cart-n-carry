import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  products: [],
  isLoading: false,
  categories: [],
};
const API = axios.create({ baseURL: 'http://localhost:5000/api/v1/products' });
export const getAllProducts = createAsyncThunk(
  'products',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get();
      return data;
    } catch (error) {
      console.log(error.response);
      thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getProductCategories = createAsyncThunk(
  'categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/categories');
      return data;
    } catch (error) {
      console.log(error.response);
      thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);
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
