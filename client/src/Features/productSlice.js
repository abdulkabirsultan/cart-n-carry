import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  products: [],
  isLoading: false,
};

export const getAllProducts = createAsyncThunk(
  'products',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/v1/products');
      return data;
    } catch (error) {
      console.log(error.response);
      thunkAPI.rejectWithValue('something went wrong');
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
  },
});

export const { getAllItems } = productReducer.actions;
export default productReducer.reducer;
