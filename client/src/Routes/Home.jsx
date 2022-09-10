/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Products from '../components/Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../Features/productSlice';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { products } = useSelector((store) => store.products?.products);
  return <Products products={products} />;
};

export default Home;
