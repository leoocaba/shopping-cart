import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const NavBar = () => {

  const { buysList } = useContext(CartContext)

  return (
    <nav
      className="navbar sticky-top bg-light border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container container-fluid px-3">
        <NavLink to="/" className="navbar-brand text-dark fw-bold" href="/">
          Shopping Cart
        </NavLink>
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/"
              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-primary fw-bolder"
              aria-current="page"
              href="#"
            >
              Buy
            </NavLink>
          </li>
        </ul>
        <NavLink to="/my-shopping-cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={buysList == 0 ? "0" : buysList.length} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar