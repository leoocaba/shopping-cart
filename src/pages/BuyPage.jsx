import React from "react";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";

export const BuyPage = () => {
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
    <div className="container py-3 px-3">
      <h4>Products</h4>
      <hr />
      <CardList products={products} />
    </div>
  );
};
