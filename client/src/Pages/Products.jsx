/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Products from '../components/Products/Products';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import paginateFunc from '../components/Pagination/toArray';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getProductsByCategory,
} from '../API-Actions/productActions';
import { useParams } from 'react-router-dom';
const ProductsRoute = () => {
  const { products } = useSelector((store) => store.products);
  const { category } = useParams();
  const dispatch = useDispatch();
  // const [paramPage] = useSearchParams();

  // useEffect(() => {
  //   paramPage.set('page', page);
  //   setPage(parseInt(paramPage.get('page')));
  //   console.log(paramPage.get('page'));
  // }, [page]);
  useEffect(() => {
    if (category === 'all') {
      dispatch(getAllProducts());
      return;
    } else if (category === 'home-decoration') {
      dispatch(getProductsByCategory(category));
    } else {
      const catName = category.split('-').join(' ');
      dispatch(getProductsByCategory(catName));
    }
  }, [category]);
  const paginateCount = paginateFunc(products);
  return (
    <>
      <Search />
      <Products />
      {paginateCount.length > 5 && <Pagination />}
    </>
  );
};

export default ProductsRoute;
