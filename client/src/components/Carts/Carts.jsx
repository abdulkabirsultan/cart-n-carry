import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { openModal } from '../../Features/modalSlice';
import CartModal from './CartModal';
import Cart from './Cart/Cart';
const Carts = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  const {
    cart: { cartItems, amount, total },
    modal: { isModal },
  } = useSelector((store) => store);
  return (
    <section>
      <CartModal isModal={isModal} />
      {!amount || amount < 1 ? (
        <div className='grid place-content-center text-center h-screen'>
          <header className='tracking-wider uppercase mb-2 text-5xl'>
            Your cart
          </header>
          <h4 className='text-2xl tracking-wide'>is empty</h4>
          <Link to={-1}>
            <button className='btn btn-outline mt-10 text-lg'>
              Continue shopping
            </button>
          </Link>
        </div>
      ) : (
        <article className='md:p-10 grid p-5 grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-14'>
          <main className='lg:col-span-2 col-span-1 space-y-5'>
            {cartItems.map((item) => {
              return <Cart key={item._id} {...item} />;
            })}
          </main>
          <div className='px-4 w-full lg:self-start py-3 space-y-5 dark:shadow-slate-600 shadow-lg'>
            <h1>Cart Summary</h1>
            <hr />
            <div className='flex justify-between'>
              <p>Total Price</p>
              <span>$ {total}</span>
            </div>
            <div className='lg:self-start col-span-1'>
              {user ? (
                <Link to='/checkout'>
                  <button className='btn btn-secondary btn-sm btn-block'>
                    Continue to checkout
                  </button>
                </Link>
              ) : (
                <button
                  className='btn btn-secondary btn-sm btn-block'
                  onClick={() => navigate('/auth')}
                >
                  Login to checkout
                </button>
              )}
            </div>
          </div>
        </article>
      )}
      {!amount < 1 && (
        <button
          className='btn btn-error btn-xs mt-14 mb-5 md:btn-sm btn-wide mx-auto block'
          onClick={() => dispatch(openModal())}
        >
          Clear cart
        </button>
      )}
    </section>
  );
};

export default Carts;
