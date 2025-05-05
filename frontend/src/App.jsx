import React from 'react';
import Product from './components/Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import CreateBook from './components/create-new-book';
import GetById from './components/Books/getById';

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
          <Route path="/create" element={<CreateBook />} />
          <Route path="/:id" element={<GetById />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
