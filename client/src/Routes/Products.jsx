/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Products from '../components/Products/Products';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import { useDispatch } from 'react-redux';
import {
  getAllProducts,
  getProductCategories,
} from '../API-Actions/productActions';
import { useState } from 'react';
const ProductsRoute = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(page));
    dispatch(getProductCategories());
  }, [page]);
  return (
    <>
      <Search />
      <Products />
      <Pagination setPage={setPage} />
    </>
  );
};

export default ProductsRoute;
