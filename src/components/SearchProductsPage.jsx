import React, { useState } from 'react';
import '../css/App.css';
import { clothes } from '../Clothes';
import ItemProduct from './ItemProduct';
export default function SearchProductPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = clothes.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Search Products</h1>

            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <input
                    type="text"
                    placeholder="Search product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-input"
                />
            </div>

            <div className="products-container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.slice(0, 20).map((item, index) => (
                        <ItemProduct key={index} {...item} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>No products found.</p>
                )}
            </div>
        </>
    );
}
