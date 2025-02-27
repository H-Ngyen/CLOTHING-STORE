import React, { useState } from 'react';
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
                    style={{
                        width: "100%",
                        maxWidth: "200px",
                        display: "block",
                        margin: "0 auto 20px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                        transition: "border-color 0.3s ease"
                    }}
                />
            </div>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.slice(0, 20).map((item, index) => (
                        <ItemProduct key={index} {...item} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>No products found.</p>
                )}
            </div >
        </>
    );
}
