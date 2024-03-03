import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import Beds from "../img/header/beds-header.jpg";
import Chairs from "../img/header/chairs-header.jpg";
import Lighting from "../img/header/lighting-header.jpg";
import Plants from "../img/header/plants-header.jpg";
import Sofas from "../img/header/sofas-header.jpg";

import { CartContext } from "../pages/ProductPage";

function Hero() {
  const { setCategoryTitle } = useContext(CartContext);
  return (
    <div className="hero-grid-container">
      <div className="grid-one">
        <Link
          to="categories/sofas"
          onClick={() => {
            setCategoryTitle("sofas");
          }}
        >
          <img src={Sofas} alt="Sofas" />
          <p className="main-description">sofas</p>
        </Link>
      </div>

      <div className="grid-two grid-two-left">
        <Link
          to="categories/beds"
          onClick={() => {
            setCategoryTitle("beds");
          }}
        >
          <img src={Beds} alt="Beds" />
          <p className="main-description">beds</p>
        </Link>
      </div>

      <div className="grid-two-low grid-two-right">
        <Link
          to="categories/plants"
          onClick={() => {
            setCategoryTitle("plants");
          }}
        >
          <img src={Plants} alt="Plants" />
          <p className="main-description">plants</p>
        </Link>
      </div>

      <div className="grid-three grid-three-left">
        <Link
          to="categories/lighting"
          onClick={() => {
            setCategoryTitle("lighting");
          }}
        >
          <img src={Lighting} alt="Lighting" />
          <p className="main-description">lighting</p>
        </Link>
      </div>

      <div className="grid-three-low grid-three-right">
        <Link
          to="categories/chairs"
          onClick={() => {
            setCategoryTitle("chairs");
          }}
        >
          <img src={Chairs} alt="Chairs" />
          <p className="main-description">chairs</p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
