/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../categories/Categories.jsx';
import Search from '../Search/Search';
import Product from './product/Product';

const Products = () => {
  const {
    products: { products },
  } = useSelector((store) => store.products);

  if (!products?.length) {
    return <h1>no Products available</h1>;
  }
  return (
    <>
      <Search />
      <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-10 md:pr-3 '>
        <aside className='hidden shadow-xl md:block h-screen scrollbar overflow-x-hidden overflow-y-scroll'>
          <Categories />
        </aside>
        <article className='lg:col-span-3 md:col-span-2 auto-rows-auto grid grid-cols-2 lg:grid-cols-3 gap-2  w-full '>
          {products?.map((product) => {
            return <Product key={product._id} {...product} />;
          })}
        </article>
      </section>
    </>
  );
};

export default Products;
