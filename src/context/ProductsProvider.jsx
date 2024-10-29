import React from 'react'
import { useState, useEffect } from 'react';
import { ProductsContext } from './ProductsContext'

export const ProductsProvider = ({ children }) => {

    const URL_BASE = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(URL_BASE);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setProducts(data);
            } else {
                setProducts(data);
            }
        } catch (error) {
            console.error('Failed to fetch products:', error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}
