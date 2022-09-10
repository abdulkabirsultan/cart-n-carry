import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './Routes/SharedLayout';
import Home from './Routes/Home';
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<h1>hhh</h1>} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
