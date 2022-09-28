import React from 'react';
import { FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className=' bg-secondary dark:bg-secondary-content mt-10 grid justify-center items-center p-10 md:p-12'>
      <div className='grid lg:grid-cols-5 foot md:grid-cols-3 grid-cols-2 place-content-center gap-5'>
        <div className='col-span-2 '>
          <img src='20220926_120858_0001.png' alt='logo' width={200} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quod laudantium voluptates numquam, quis, accusamus autem dolorem
            necessitatibus, vel atque sint cum itaque maxime impedit?
          </p>
        </div>
        <div>
          <h1>About us</h1>
          <ul>
            <li>careers</li>
            <li>Our store</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Motivation</li>
          </ul>
        </div>
        <div>
          <h1>Customer care</h1>
          <ul>
            <li>Help Center</li>
            <li>How to buy</li>
            <li>track your order</li>
            <li>Issues</li>
            <li>return & refunds</li>
          </ul>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <h1>Contact us</h1>
          <p>
            27, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Numquam, inventore!
          </p>
          <p>Email: Lorem ipsum dolor sit amet.</p>
          <p>Phone: +234 818 573 8382</p>
        </div>
      </div>
      <p className='flex items-center whitespace-nowrap mt-2 gap-2 text-sm justify-center'>
        Made with
        <span className='text-red-600'>
          <FaHeart />
        </span>
        by
        <a
          href='https://github.com/abdulkabirsultan/cart-n-carry'
          rel='noreferrer'
          target='_blank'
          className='text-info text-base font-bold'
        >
          Abdulkabir Sultan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
