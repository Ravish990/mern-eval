import React from 'react';
import Product from './components/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* This route for home */}
          <Route path="/" element={<Product />} />
          
          {/* These routes for user sign-in and sign-up */}
          <Route path="/user/signIn" element={<SignIn />} />
          <Route path="/user/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
