/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Products from '../components/Products/Products';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import paginateFunc from '../components/Pagination/toArray';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getProductsByCategory,
} from '../API-Actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';
const ProductsRoute = () => {
  const { products } = useSelector((store) => store.products);
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (category === 'all') {
      dispatch(getAllProducts(1));
      navigate(`/products/category/all?page=1`);
    } else if (category === 'home-decoration') {
      dispatch(getProductsByCategory(category));
    } else {
      const catName = category.split('-').join(' ');
      dispatch(getProductsByCategory(catName));
    }
  }, [category]);
  const paginateCount = paginateFunc(products);
  // useEffect(() => {
  //   navigate(`/products/category/all?page=${page}`);
  // }, [page]);
  return (
    <>
      <Search />
      <Products />
      {paginateCount.length > 5 && <Pagination />}
    </>
  );
};

export default ProductsRoute;
