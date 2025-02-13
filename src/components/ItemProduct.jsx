import React from 'react';
import '../css/ItemProduct.css'; 

export default function ItemProduct({ imgSrc, name, price, review, ordersSold }) {
    return (
        <div className="item-product">
            <img src={imgSrc} alt={name} className="item-product-img" />
            <div className="item-product-details">
                <p className="item-product-name">{name}</p>
                <p className="item-product-price">${price}</p>
                <div className="item-product-review">
                    <span className="star">&#9733;</span>
                    <span className="review-average">{review.toFixed(1)}</span>
                </div>
                <p className="item-product-orders">Sold: {ordersSold}</p>
            </div>
        </div>
    );
};

