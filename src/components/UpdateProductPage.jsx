import React, { useState } from 'react';
import { clothes } from '../Clothes';
import ItemProduct from './ItemProduct';

export default function UpdateProductPage() {
    const [products, setProducts] = useState(clothes.slice(0, 20));
    const [editingProduct, setEditingProduct] = useState(null);
    const [editFormData, setEditFormData] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
        review: '',
        ordersSold: '',
    });

    const handleItemClick = (product) => {
        setEditingProduct(product);
        setEditFormData({ ...product });
    };

    const handleEditChange = (e) => {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    };

    const handleEditAction = (e, action) => {
        e.preventDefault();

        if (action === 'submit') {
            const updatedProduct = {
                ...editFormData,
                price: parseFloat(editFormData.price),
                review: parseFloat(editFormData.review),
                ordersSold: parseInt(editFormData.ordersSold, 10),
            };

            setProducts(
                products.map((prod) => (prod.id === updatedProduct.id ? updatedProduct : prod))
            );
        }

        setEditingProduct(null);
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
                    }

                    .save-button {
                        background-color: #4CAF50;
                        color: #fff;
                    }
                    .save-button:hover {
                        background-color: #45a049;
                    }

                    .cancel-button {
                        background-color: #e0e0e0;
                        color: #333;
                    }

                    .cancel-button:hover {
                        background-color: #d5d5d5;
                    }

                    .products-container {
                        display: flex;
                        flex-wrap: wrap; 
                        justify-content: center;
                    }
      `}</style>
            {editingProduct && (
                <div className="form-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Edit Product</h2>
                    <form onSubmit={(e) => handleEditAction(e, 'submit')}>
                        <input type="text" name="id" placeholder="ID" value={editFormData.id} onChange={handleEditChange} className="form-input" disabled />
                        <input type="text" name="name" placeholder="Product Name" value={editFormData.name} onChange={handleEditChange} className="form-input" />
                        <input type="text" name="price" placeholder="Price" value={editFormData.price} onChange={handleEditChange} className="form-input" />
                        <input type="text" name="image" placeholder="Image file name" value={editFormData.image} onChange={handleEditChange} className="form-input" />
                        <input type="text" name="review" placeholder="Review" value={editFormData.review} onChange={handleEditChange} className="form-input" />
                        <input type="text" name="ordersSold" placeholder="Orders Sold" value={editFormData.ordersSold} onChange={handleEditChange} className="form-input" />
                        <button type="submit" className="form-button save-button">
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={(e) => handleEditAction(e, 'cancel')}
                            className="form-button cancel-button"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {products.map((item, index) => (
                    <div key={index} onClick={() => handleItemClick(item)}>
                        <ItemProduct {...item} />
                    </div>
                ))}
            </div>
        </>
    );
}
