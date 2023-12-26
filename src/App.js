import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Dashboard/Index";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
