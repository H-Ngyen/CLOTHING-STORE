import React from 'react';
import { useParams } from 'react-router-dom';
import { clothes } from '../Clothes';


export default function ProductDetailPage() {
    const { id } = useParams();

    const product = clothes.find(item => item.id === id);

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div style={{ margin: '20px', padding: '20px', maxWidth: '600px' }}>
            <img
                src={`http://localhost:5173/src/assets/images/${product.image}`}
                alt={product.name}
                style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}
            />
            <p><strong>Name: </strong> {product.name}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Orders Sold:</strong> {product.ordersSold}</p>
            <p><strong>Review:</strong> {product.review} <span style={{ color: 'gold' }}>&#9733;</span></p>
        </div>
    );
};


