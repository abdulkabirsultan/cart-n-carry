import React from 'react';
import Products from '../components/Products/Products';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
const ProductsRoute = () => {
  return (
    <>
      <Search />
      <Products />
      <Pagination />
    </>
  );
};

export default ProductsRoute;
