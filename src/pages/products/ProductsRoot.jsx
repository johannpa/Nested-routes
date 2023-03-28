import React from 'react';
import ProductsNav from '../../components/ProductsNav';
import { Outlet } from 'react-router-dom';

const ProductsRoot = () => {
  return (
    <div>
      <ProductsNav />
      <Outlet />
    </div>
  )
}

export default ProductsRoot;
