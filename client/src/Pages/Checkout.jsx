import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PB_KEY);
const handleSubmit = (stripe, elements) => async () => {
  const cardElement = elements.getElement(CardElement);
  if (!stripe || !elements) {
    // Stripe.js has not yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }
  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
  });

  if (error) {
    console.log('[error]', error.message);
  } else {
    console.log('[PaymentMethod]', paymentMethod);
    // ... SEND to your API server to process payment intent
  }
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <>
      <CardElement className='text-3xl' />
      <button
        className={`btn btn-block mt-4 ${!stripe && 'btn-disabled'}`}
        disabled={!stripe}
        onClick={() => handleSubmit(stripe, elements)}
      >
        Pay
      </button>
    </>
  );
};

const StripePaymentForm = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

const Checkout = () => {
  const { user } = useAuth0();
  const { total } = useSelector((store) => store.cart);

  return (
    <section className='h-screen grid place-content-center'>
      <div className='p-5  w-full'>
        <h1 className='capitalize tracking-wide text-xl md:text-2xl mb-2'>
          hello, {user?.name}
        </h1>
        <p className='mb-5 text-info'>Your Total is ${total}</p>
        <p className='text-3xl uppercase md:text-4xl whitespace-nowrap font-bold'>
          This is just a demo
        </p>
        <div className='mt-5 border-2 p-3'>
          <StripePaymentForm />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
