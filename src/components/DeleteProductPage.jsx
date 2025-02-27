import React, { useState } from 'react';
import ItemProduct from './ItemProduct';
import { clothes } from '../Clothes';

export default function DeleteProductPage() {
  const [items, setItems] = useState(clothes.slice(0, 20));

  const handleRemove = (id) => {
    if (window.confirm(`Do you want to remove this product`)) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Our Products</h1>
      <div className="products-container">
        {items.map((item) => (
          <div key={item.id} className="item-wrapper">
            <ItemProduct {...item} />
            <button className="remove-button" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
