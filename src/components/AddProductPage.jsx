import React, { useState } from 'react';
import { clothes } from '../Clothes';
import ItemProduct from './ItemProduct';

export default function AddProductPage() {
  const [products, setProducts] = useState(clothes.slice(0, 20));

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: '',
    review: '',
    ordersSold: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    const newProduct = {
      ...formData
    };

    setProducts([...products, newProduct]);

    setFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      image: '',
      review: '',
      ordersSold: '',
    });
  };

  return (
    <>
      <style>{`
              .form-input {
                  width: 100%;
                  max-width: 200px;
                  display: block;
                  margin: 0 auto 20px;
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 8px;
                  font-size: 16px;
                  outline: none;
                  transition: border-color 0.3s ease;
              }

              .form-button {
                  border: none;
                  padding: 10px 20px;
                  margin: 10px;
                  font-size: 16px;
                  border-radius: 8px;
                  cursor: pointer;
                  transition: background-color 0.3s ease;
                  background-color: #4CAF50;
                  color: #fff;
              }
              .form-button:hover{
                  background-color: #45a049;
              } 
    `}</style>
      <h1 style={{ textAlign: 'center' }}>Add Products</h1>

      <div className="form-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="image"
          placeholder="Image file name"
          value={formData.image}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="review"
          placeholder="Review"
          value={formData.review}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="ordersSold"
          placeholder="Orders Sold"
          value={formData.ordersSold}
          onChange={handleChange}
          className="form-input"
        />
        <button onClick={handleAddProduct} className="form-button">
          Add Product
        </button>
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {products.map((item, index) => (
          <ItemProduct key={index} {...item} />
        ))}
      </div>
    </>
  );
}


