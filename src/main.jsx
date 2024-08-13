import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "./ShoppingCart";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingCart></ShoppingCart>
    </React.StrictMode>
  </BrowserRouter>
);
