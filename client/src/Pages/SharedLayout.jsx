import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default SharedLayout;
