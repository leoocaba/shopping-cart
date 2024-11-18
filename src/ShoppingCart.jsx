import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";
import NavBar from "./components/NavBar";
import BuyPage from "./pages/BuyPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

export const ShoppingCart = () => {
  return (
    <HashRouter>
      <ProductsProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<BuyPage />} />
            <Route path="/my-shopping-cart" element={<ShoppingCartPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </HashRouter>
  );
};
