import React from "react";
import { useEffect, useState } from "react";
import { Await } from "react-router-dom";
export const ShoppingCartPage = () => {
  const URL_BASE = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(URL_BASE);
    const data = await response.json();
    // console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="container">ShoppingCartPage</div>;
};
