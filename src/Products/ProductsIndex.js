import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

import { listProducts } from './ProductsService';

const ProductsIndex = () => {
  const [products, setProducts] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      console.warn(`Nothing found for "${state.id}"`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>
  }

  return <div>
    {products.map(item => (
      <ProductCard product={item} key={item.id} />
    ))}
  </div>
};

export default ProductsIndex;