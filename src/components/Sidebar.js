import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="sidebar-heading text-light">ki2147</div>
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item list-group-item-action bg-dark bg-gradient text-light">Home</Link>
        <Link to="/products" className="list-group-item list-group-item-action bg-dark bg-gradient text-light">Products</Link>
        <Link to="/add-product" className="list-group-item list-group-item-action bg-dark bg-gradient text-light">Add Product</Link>
      </div>
    </div>
  );
}

export default Sidebar;
