import React from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { FaCreditCard, FaHeadset, FaShieldAlt, FaTruck } from 'react-icons/fa';
import Carousel, { FlashCarousel, SmCarousel } from './Carousel';
import Categories from '../categories/Categories';
import Features from './Features';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section>
      <article className=' hidden lg:grid lg:grid-cols-4 md:grid-cols-3 h-screen grid-cols-1 gap-4 mt-4 md:mt-8 '>
        <aside className='shadow-xl hidden lg:block col-span-1 md:block md:h-screen scrollbar md:overflow-x-hidden overflow-y-scroll'>
          <Categories />
        </aside>
        <div className='max-h-full col-span-1 lg:col-span-3 md:col-span-2 px-8  w-full '>
          <Carousel />
        </div>
      </article>
      <article className='lg:hidden mt-5'>
        <SmCarousel />
      </article>
      <article className='bg-secondary mt-3 py-8 font-bold '>
        <h1 className='flex gap-1 px-5 items-center uppercase text-accent-focus text-xl lg:text-2xl'>
          <BsLightningFill className=' ' />
          <span>Flash Deals</span>
        </h1>
        <FlashCarousel />
        <button
          className='btn btn-wide mx-auto block lg:hidden btn-warning mt-2'
          onClick={() => navigate('/products/category/all')}
        >
          All Products
        </button>
      </article>

      <article className='flex mt-5 py-8 flex-col md:flex-row justify-center items-center gap-5 md:gap-7 md:flex-wrap lg:flex-nowrap px-5'>
        <Features icon={<FaShieldAlt />} title='shop with confidence' />
        <Features icon={<FaCreditCard />} title='safe payment' />
        <Features icon={<FaHeadset />} title='24/7 support' />
        <Features icon={<FaTruck />} title='worldwide delivery' />
      </article>
    </section>
  );
};

export default Home;
