/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Dashboard/Index';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer/Index';
import NavBar from './components/Header/NavBar';
import Login from './components/Login/Index';
import SignUp from './components/SignUp/Index';
import ProductListingPAge from './components/ProductListing';
import ProductDescription from './components/ProductDescription';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductListingPAge />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
