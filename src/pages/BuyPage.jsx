import React from "react";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";

export const BuyPage = () => {
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

  return (
    <div className="container py-3 px-3">
      <h4>Products</h4>
      <hr />
      <CardList products={products} />
    </div>
  );
};
