import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../Features/cartSlice';
import { closeModal } from '../../Features/modalSlice';

const CartModal = ({ isModal }) => {
  const dispatch = useDispatch();
  return (
    <aside
      className={`${
        isModal ? ' scale-100' : 'scale-0'
      } grid place-content-center place-items-center z-50 fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full h-full transition-all duration-300`}
    >
      <div className='bg-white w-4/5 max-w-md py-8 px-4 text-center text-slate-700 '>
        <h4 className='leading-normal md:text-2xl text-xl'>
          Remove all items from your shopping cart?
        </h4>
        <div className='mt-5 flex justify-around'>
          <button
            type='button'
            className='btn btn-error'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className='btn '
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CartModal;
