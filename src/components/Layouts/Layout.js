/** @format */

// Layout.js
import React from "react";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
