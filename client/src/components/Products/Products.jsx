/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { getProductBySearch } from '../../API-Actions/productActions.js';
import Categories from '../categories/Categories.jsx';
import Loader from '../Loader.jsx';
import Search from '../Search/Search.jsx';
import Product from './product/Product';
const Products = () => {
  const { products } = useSelector((store) => store.products.products);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  useEffect(() => {
    if (search) {
      dispatch(getProductBySearch(search));
      return;
    }
  }, [search]);
  if (!products?.length && search) {
    return (
      <section className='grid place-content-center text-center h-screen'>
        <div>
          <h1 className='text-xl uppercase'>no Products match your search</h1>
          <Link to='/products/category/all'>
            <button className=' btn flex mx-auto my-8'>Back to Products</button>
          </Link>
        </div>
      </section>
    );
  }
  if (!products?.length) {
    return (
      <section className='grid place-content-center text-center h-screen'>
        <div>
          <Loader />
        </div>
      </section>
    );
  }
  return (
    <>
      {search && <Search />}
      <section
        className={`grid ${
          search
            ? 'grid-cols-1 md:px-10'
            : ' lg:grid-cols-4 md:grid-cols-3 grid-cols-1'
        } gap-4 mt-4 md:mt-10 md:pr-3`}
      >
        {!search && (
          <aside className='shadow-xl md:block md:h-screen scrollbar md:overflow-x-hidden overflow-y-scroll'>
            <Categories />
          </aside>
        )}
        <article className='lg:col-span-3 md:col-span-2 auto-rows-auto grid grid-cols-2 lg:grid-cols-3 gap-3  w-full '>
          {products?.map((product) => {
            return <Product key={product._id} {...product} />;
          })}
        </article>
      </section>
      {search && (
        <Link to={-1}>
          <button className=' btn flex mx-auto my-8'>Back</button>
        </Link>
      )}
    </>
  );
};

export default Products;
