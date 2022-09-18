import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/v1/products' });
export const getAllProducts = createAsyncThunk(
  'products',
  async (page, thunkAPI) => {
    try {
      const { data } = await API.get(`?page=${page || 1}`);
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

export const getProductsByCategory = createAsyncThunk(
  'productsByCategory',
  async (category, thunkAPI) => {
    try {
      const { data } = await API.get(`/category/${category}`);
      return data;
    } catch (error) {
      console.log(error.response);
      thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getProductBySearch = createAsyncThunk(
  'getBySearch',
  async (searchQuery, thunkAPI) => {
    try {
      const { data } = await API(`/search?search=${searchQuery}`);
      return data;
    } catch (error) {
      console.log(error.response);
      thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  'singleProduct',
  async (id, thunkAPI) => {
    try {
      const { data } = await API(`/${id}`);
      return data;
    } catch (error) {
      console.log(error.response);
      thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
