import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/PageNotFound';
import Layout from './components/Layouts/Layout';
import Payment from './components/Payment';
import DetailsPage from './components/DetailPage';
import ProfilePage from './components/Profile';
import Dashboard from './components/Dashboard';
import Login from './components/Login/Index';
import SignUp from './components/SignUp/Index';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/details-page" element={<DetailsPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
