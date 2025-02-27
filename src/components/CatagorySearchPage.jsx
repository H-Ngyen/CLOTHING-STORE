import React, { useState } from 'react';
import '../css/ItemProduct.css';
import "../css/App.css";
import { clothes } from '../Clothes';
import ItemProduct from './ItemProduct';

export default function CatagorySearchPage() {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleCheckboxChange = (e) => {
    const rating = parseInt(e.target.value, 10);
    if (e.target.checked) {
      setSelectedRatings((prev) => [...prev, rating]);
    } else {
      setSelectedRatings((prev) => prev.filter((r) => r !== rating));
    }
  };

  const filteredClothes =
    selectedRatings.length > 0
      ? clothes.filter((item) => {
        const reviewNumber = parseFloat(item.review);
        return selectedRatings.includes(Math.floor(reviewNumber));
      })
      : clothes.slice(0, 20);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Our Products</h1>
      <div className="page-container" style={{ display: 'flex' }}>
        <div className="filter-container" style={{ width: '200px', padding: '20px' }}>
          <h3>Filter by Rating</h3>
          {[1, 2, 3, 4, 5].map((rating) => (
            <div key={rating}>
              <input
                type="checkbox"
                id={`rating-${rating}`}
                value={rating}
                onChange={handleCheckboxChange}
                checked={selectedRatings.includes(rating)}
              />
              <label htmlFor={`rating-${rating}`}>{rating} sao</label>
            </div>
          ))}
        </div>

        <div className="products-container" style={{ flex: 1, display: 'flex', flexWrap: 'wrap' }}>
          {filteredClothes.map((item, index) => (
            <ItemProduct key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

