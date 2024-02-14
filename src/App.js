import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/PageNotFound';
import NavBar from './components/Header/NavBar';
import Login from './components/Login/Index';
import SignUp from './components/SignUp/Index';
import ProductListingPAge from './components/ProductListing';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart/Cart';
import Delivery from './components/Cart/Delivery';
import AddressPopup from './components/Cart/AddressPopup';
// import HomePage from './components/Homepage/Index';
import MyProfile from './components/Profile/Index';
import MyOrders from './components/Profile/MyOrders';
import Favorites from './components/Profile/Favorites';
import Subscriptions from './components/Profile/Subscriptions';
import OrderDetails from './components/Profile/OrderDetails';
import Dashoard from './components/Dashboard/Index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/products" element={<ProductListingPAge />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/address" element={<AddressPopup />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/delivery" element={<Delivery />} />
        <Route path="/my-account" element={<MyProfile />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-orders/:orderId" element={<OrderDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="my-subscriptions" element={<Subscriptions />} />
      </Routes>
    </div>
  );
}

export default App;
