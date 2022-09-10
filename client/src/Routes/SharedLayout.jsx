import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Container, Paper } from '@mui/material';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ m: 0, mx: 'auto', p: 0 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
