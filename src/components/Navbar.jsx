import "./Navbar.css";

import { Link } from "react-router-dom";

import Logo from "../img/logo.svg";
import { IconShoppingCart } from "@tabler/icons-react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link
            to="/"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <img src={Logo} alt="Store Logo" className="logo-img" />
          </Link>
          <div className="nav-links">
            <Link to="categories/all">categories</Link>
            <Link to="favorite-page">favorite</Link>
            <IconShoppingCart />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
