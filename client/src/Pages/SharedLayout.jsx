/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, getCartProducts } from '../Features/cartSlice';

const SharedLayout = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts());
  }, []);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default SharedLayout;
