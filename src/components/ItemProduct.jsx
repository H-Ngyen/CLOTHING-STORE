import React from 'react';

export default function ItemProduct({ id, name, price, image, review, ordersSold }) {
    return (
        <>
            <style>{`
                    .item-product {
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        padding: 16px;
                        margin: 16px;
                        width: 200px;
                        height: 220px;
                    }

                    .item-product:hover {
                        transform: scale(1.05);
                    }

                    .item-product-img {
                        width: 100px;
                        height: 150px;
                        border-radius: 4px;
                        display: block;
                        margin: 0 auto;
                    }

                    .item-product-name {
                        font-size: 1.2em;
                        margin: 8px 0;
                        color: #333;
                        text-align: left;
                    }

                    .item-product-price,
                    .item-product-review,
                    .item-product-orders {
                        display: inline;
                        margin: 0;
                        font-size: 1em;
                    }

                    .item-product-price::after,
                    .item-product-review::after {
                        content: " | ";
                        padding: 0 5px;
                    }

                    .star {
                        color: gold;
                    }
            `}</style>
            <div className="item-product" data-id={id}>
                <img src={`http://localhost:5173/src/assets/images/${image}`} alt={name} className="item-product-img" />
                <div className="item-product-details">
                    <p className="item-product-name">{name}</p>
                    <p className="item-product-price">${price}</p>
                    <div className="item-product-review">
                        <span className="star">&#9733;</span>
                        <span className="review-average">{parseFloat(review).toFixed(1)}</span>
                    </div>
                    <p className="item-product-orders">Sold: {ordersSold}</p>
                </div>
            </div>
        </>
    );
};

