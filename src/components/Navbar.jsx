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
      <nav className="navbar">
        <div className={`mobile-nav-open ${fullMenu ? `menu-on` : `menu-off`}`}>
          <IconX
            className="exit-mobile-menu"
            onClick={() => setFullMenu(!fullMenu)}
          />

          <div className="mobile-links">
            <Link to="categories/all">categories</Link>
            <Link to="favorite-page">favorites</Link>
            <Link to="/categories/product/8">product page</Link>
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
            <IconShoppingCart />
          </div>
          <div className="hamburger-menu">
            <IconShoppingCart />
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
