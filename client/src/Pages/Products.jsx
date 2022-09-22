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
import { useParams, useSearchParams } from 'react-router-dom';
const ProductsRoute = () => {
  const { products } = useSelector((store) => store.products);
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [paramPage] = useSearchParams();

  useEffect(() => {
    paramPage.set('page', page);
    setPage(parseInt(paramPage.get('page')));
  }, [page]);
  useEffect(() => {
    if (category === 'all') {
      dispatch(getAllProducts(1));
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
      {paginateCount.length > 5 && <Pagination page={page} setPage={setPage} />}
    </>
  );
};

export default ProductsRoute;
