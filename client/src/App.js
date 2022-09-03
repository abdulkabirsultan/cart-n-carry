/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Products from './components/Products/Products';
import { CssBaseline } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './Features/productSlice';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { products } = useSelector((store) => store.products.products);
  return (
    <>
      <CssBaseline />
      <main>
        <Products products={products} />
      </main>
    </>
  );
};

export default App;
