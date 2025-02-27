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
      <style>{`
        .remove-button {
          background-color: #ff4d4d;
          border: none;
          padding: 10px 20px;
          color: #fff;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 10px;
        }
        .remove-button:hover {
          background-color: #ff1a1a;
        }
        
      `}</style>
      <h1 style={{ textAlign: 'center' }}>Delete Products</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
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