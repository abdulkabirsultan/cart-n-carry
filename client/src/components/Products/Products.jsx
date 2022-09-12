/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../categories/Categories.jsx';

import Product from './product/Product';
const Products = () => {
  const {
    products: { products },
  } = useSelector((store) => store.products);

  if (!products?.length) {
    return <h1>no Products available</h1>;
  }
  return (
    <section className='grid md:grid-cols-3 grid-cols-1 gap-4 py-5 '>
      <aside className='hidden md:block h-screen scrollbar overflow-y-scroll'>
        <Categories />
      </aside>
      <article className='col-span-2 w-full '>
        {products?.map((product) => {
          return <Product key={product._id} {...product} />;
        })}{' '}
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          corrupti sit perspiciatis quidem consequuntur molestias, eaque
          accusamus necessitatibus assumenda quis reprehenderit quasi pariatur
          quas repellendus totam nulla ad! Enim sequi laudantium id tempore rem
          nobis magni, pariatur iste perspiciatis inventore iure in
          reprehenderit quae corporis sed. Odio dicta in earum distinctio
          laborum. Assumenda sequi esse officia eligendi fugit temporibus
          inventore, rerum ducimus consequatur eos consectetur eaque obcaecati?
          Beatae, quae quia, et dolores obcaecati hic asperiores quo quaerat
          unde cumque soluta nisi suscipit facilis a molestias ab recusandae.
          Suscipit nisi necessitatibus quo, ratione sed officia ex et odio, amet
          dolores praesentium.
        </h2>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          corrupti sit perspiciatis quidem consequuntur molestias, eaque
          accusamus necessitatibus assumenda quis reprehenderit quasi pariatur
          quas repellendus totam nulla ad! Enim sequi laudantium id tempore rem
          nobis magni, pariatur iste perspiciatis inventore iure in
          reprehenderit quae corporis sed. Odio dicta in earum distinctio
          laborum. Assumenda sequi esse officia eligendi fugit temporibus
          inventore, rerum ducimus consequatur eos consectetur eaque obcaecati?
          Beatae, quae quia, et dolores obcaecati hic asperiores quo quaerat
          unde cumque soluta nisi suscipit facilis a molestias ab recusandae.
          Suscipit nisi necessitatibus quo, ratione sed officia ex et odio, amet
          dolores praesentium.
        </h2>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          corrupti sit perspiciatis quidem consequuntur molestias, eaque
          accusamus necessitatibus assumenda quis reprehenderit quasi pariatur
          quas repellendus totam nulla ad! Enim sequi laudantium id tempore rem
          nobis magni, pariatur iste perspiciatis inventore iure in
          reprehenderit quae corporis sed. Odio dicta in earum distinctio
          laborum. Assumenda sequi esse officia eligendi fugit temporibus
          inventore, rerum ducimus consequatur eos consectetur eaque obcaecati?
          Beatae, quae quia, et dolores obcaecati hic asperiores quo quaerat
          unde cumque soluta nisi suscipit facilis a molestias ab recusandae.
          Suscipit nisi necessitatibus quo, ratione sed officia ex et odio, amet
          dolores praesentium.
        </h2>
      </article>
    </section>
  );
};

export default Products;
