import "./Navbar.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../img/logo.svg";
import {
  IconShoppingCart,
  IconHeart,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

function Navbar() {
  const [fullMenu, setFullMenu] = useState(false);
  const [smoothNav, setSmoothNav] = useState(false);
  const [cart, setCart] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSmoothNav(true);
    } else {
      setSmoothNav(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className={`cart-background ${cart ? `bg-on` : `bg-off`}`}></div>
      <div className={`cart ${cart ? `cart-on` : `cart-off`}`}>
        <div className="cart-header">
          <h3>Your Shopping Cart</h3>
          <IconX
            onClick={() => {
              setCart(!cart);
            }}
          />
        </div>
        <div className="cart-body"></div>
      </div>
      <nav className="navbar">
        <div className={`mobile-nav-open ${fullMenu ? `menu-on` : `menu-off`}`}>
          <IconX
            className="exit-mobile-menu"
            onClick={() => setFullMenu(!fullMenu)}
          />

          <div className="mobile-links">
            <Link to="categories/all" onClick={() => setFullMenu(!fullMenu)}>
              categories
            </Link>
            <Link to="favorite-page" onClick={() => setFullMenu(!fullMenu)}>
              favorites
            </Link>
            <Link
              to="/categories/product/8"
              onClick={() => setFullMenu(!fullMenu)}
            >
              product page
            </Link>
          </div>
        </div>
        <div
          className={`nav-container ${smoothNav ? `smooth-nav-behavior` : ""}`}
        >
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
            <Link to="favorite-page">
              <IconHeart />
            </Link>
            <IconShoppingCart
              onClick={() => {
                setCart(!cart);
              }}
            />
          </div>
          <div className="hamburger-menu">
            <IconShoppingCart
              onClick={() => {
                setCart(!cart);
              }}
            />
            <IconMenu2
              onClick={() => {
                setFullMenu(true);
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
