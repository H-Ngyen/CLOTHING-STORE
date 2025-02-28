import React from 'react';
import { Link } from 'react-router-dom';
import ItemProduct from "./ItemProduct";
import { clothes } from '../Clothes';

export default function ListProductPage() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Our Products</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {clothes.slice(0, 20).map((item, index) => (
          <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
            <ItemProduct {...item} />
            <Link to={`/detail-product/${item.id}`}>View Detail</Link>
          </div>
        ))}
      </div>
    </>
  );
}
