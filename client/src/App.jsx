/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Routes/SharedLayout';
import Home from './Routes/Home';
import { useDispatch } from 'react-redux';
import { getAllProducts, getProductCategories } from './Features/productSlice';
import About from './Routes/About';
import Contact from './Routes/Contact';
import NotFound from './Routes/NotFound';
import Products from './Routes/Products';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductCategories());
  }, []);

  return (
    <BrowserRouter>
      <main className='md:text-lg '>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
