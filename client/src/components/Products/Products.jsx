/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';

import Product from './product/Product';
const Products = ({ products }) => {
  if (!products?.length) {
    return <h1>no Products available</h1>;
  }
  return (
    <section>
      {products?.map((product) => {
        return <Product key={product._id} {...product} />;
      })}
    </section>
  );
};

export default Products;
