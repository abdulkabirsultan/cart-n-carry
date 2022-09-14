import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Routes/SharedLayout';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import NotFound from './Routes/NotFound';
import ProductsRoute from './Routes/Products';
import Products from './components/Products/Products';

const App = () => {
  return (
    <BrowserRouter>
      <main className='md:text-lg '>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path='/products/category/:category'
              element={<ProductsRoute />}
            />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products/search' element={<Products />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
