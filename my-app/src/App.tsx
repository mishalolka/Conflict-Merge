import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Products from "./components/ProductsPage/Products";
import Layout from "./components/layout/Layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
