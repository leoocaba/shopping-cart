import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { BuyPage } from "./pages/BuyPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";

export const ShoppingCart = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/shopping-cart" element={<BuyPage></BuyPage>}>
          {" "}
        </Route>
        <Route
          path="/my-shopping-cart"
          element={<ShoppingCartPage></ShoppingCartPage>}
        ></Route>
        <Route path="/*" element={<Navigate to="/shopping-cart" />}></Route>
      </Routes>
    </>
  );
};
