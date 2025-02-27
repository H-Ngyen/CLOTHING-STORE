import React, { useState } from 'react';
import { clothes } from '../Clothes';
import ItemProduct from './ItemProduct';

export default function FilterProductPage() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  let processedClothes = [...clothes];

  switch (selectedOption) {
    case 'price_high':
      processedClothes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case 'price_low':
      processedClothes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case 'rating_high':
      processedClothes.sort((a, b) => parseFloat(b.review) - parseFloat(a.review));
      break;
    case 'rating_low':
      processedClothes.sort((a, b) => parseFloat(a.review) - parseFloat(b.review));
      break;
    case 'filter_rating_1':
      processedClothes = processedClothes.filter(item => parseFloat(item.review) >= 1);
      break;
    case 'filter_rating_2':
      processedClothes = processedClothes.filter(item => parseFloat(item.review) >= 2);
      break;
    case 'filter_rating_3':
      processedClothes = processedClothes.filter(item => parseFloat(item.review) >= 3);
      break;
    case 'filter_rating_4':
      processedClothes = processedClothes.filter(item => parseFloat(item.review) >= 4);
      break;
    case 'filter_rating_5':
      processedClothes = processedClothes.filter(item => parseFloat(item.review) == 5);
      break;
    default:
      break;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Filter Products</h1>
      <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          <select value={selectedOption} onChange={handleSelectChange} style={{ padding: '10px', fontSize: '16px' }}>
            <option value="">Chọn một tùy chọn</option>
            <option value="price_high">Xếp theo giá cao nhất</option>
            <option value="price_low">Xếp theo giá thấp nhất</option>
            <option value="rating_high">Xếp theo đánh giá cao nhất</option>
            <option value="rating_low">Xếp theo đánh giá thấp nhất</option>
            <option value="filter_rating_1">Lọc sản phẩm có đánh giá từ 1 sao trở lên</option>
            <option value="filter_rating_2">Lọc sản phẩm có đánh giá từ 2 sao trở lên</option>
            <option value="filter_rating_3">Lọc sản phẩm có đánh giá từ 3 sao trở lên</option>
            <option value="filter_rating_4">Lọc sản phẩm có đánh giá từ 4 sao trở lên</option>
            <option value="filter_rating_5">Lọc sản phẩm có đánh giá 5 sao</option>

          </select>
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {processedClothes.map((item, index) => (
            <ItemProduct key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
