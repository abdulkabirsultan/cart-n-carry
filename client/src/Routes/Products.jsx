/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Products from '../components/Products/Products';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import paginateFunc from '../components/Pagination/toArray';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getProductCategories,
} from '../API-Actions/productActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ProductsRoute = () => {
  const { products } = useSelector((store) => store.products);
  const navigate = useNavigate();
  const paginateCount = paginateFunc(products);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(page));
    dispatch(getProductCategories());
    navigate(`/products/category/all?page=${page}`);
  }, [page]);
  return (
    <>
      <Search />
      <Products />
      {paginateCount.length > 5 && <Pagination setPage={setPage} page={page} />}
    </>
  );
};

export default ProductsRoute;
