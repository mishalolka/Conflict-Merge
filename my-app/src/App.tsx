import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Products from './components/ProductsPage/Products';


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="*" element={<Home />} />
        </Routes>
     </>
  );
}
export default App;