import React, { useState } from 'react';
// import '../css/App.css';
import { clothes } from '../Clothes';
import ItemProduct from './ItemProduct';

export default function AddProductPage() {
  const [products, setProducts] = useState(clothes.slice(0, 20));

  const [formData, setFormData] = useState({
    id: '',
    name: '',
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
      price: '',
      image: '',
      review: '',
      ordersSold: '',
    });
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Our Products</h1>

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

      <div className="products-container">
        {products.map((item, index) => (
          <ItemProduct key={index} {...item} />
        ))}
      </div>
    </>
  );
}


