import React from "react";
import { CartDetails } from "../components/CartDetails";

export const ShoppingCartPage = () => {
  return (
    <div className="__shopping-cart-page container d-flex justify-content-between px-2">
      <CartDetails></CartDetails>
    </div>
  );
};
