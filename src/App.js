import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AddProductPage from './components/AddProductPage';

function App() {
  return (
    <Router>
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
