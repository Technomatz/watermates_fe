/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Dashboard/Index";
import PageNotFound from "./components/PageNotFound";

import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
