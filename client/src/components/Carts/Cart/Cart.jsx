import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleProduct } from '../../../Features/cartSlice';
const Cart = ({ amount, price, title, thumbnail, _id }) => {
  const dispatch = useDispatch();
  const handleClick = (id, operation) => {
    dispatch(toggleProduct({ id, operation }));
  };
  return (
    <div className='card relative card-compact card-bordered card-side w-full bg-base-100 shadow-2xl'>
      <figure className='h-24 w-32 md:w-48 my-auto'>
        <img
          src={thumbnail}
          alt={title}
          width={400}
          height={400}
          className='block w-full h-auto  object-contain max-w-full max-h-full'
        />
      </figure>
      <div className='card-body space-y-0'>
        <h2 className='card-title text-sm md:text-lg uppercase'>{title}</h2>
        <h1 className='md:text-xl text-lg text-primary-focus'>${price}</h1>
        <div className='md:mt-4'>
          <button
            className='btn md:btn-sm btn-xs btn-ghost text-red-400 hover:text-red-800 -ml-3 hover:bg-error bg-none'
            onClick={() => handleClick(_id, 'remove')}
          >
            Remove
          </button>
        </div>
      </div>
      <div className='space-y-3 my-auto md:pr-5'>
        <button
          className='btn btn-info btn-xs btn-circle'
          onClick={() => handleClick(_id, 'add')}
        >
          <FaPlus />
        </button>
        <p className='text-2xl text-center my-5'>{amount}</p>
        <button
          className='btn btn-info btn-xs btn-circle'
          onClick={() => handleClick(_id, 'sub')}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default Cart;
