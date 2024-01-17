import "./Header.css";

import { Link } from "react-router-dom";
import Beds from "../img/header/beds-header.jpg";
import Chairs from "../img/header/chairs-header.jpg";
import Lighting from "../img/header/lighting-header.jpg";
import Plants from "../img/header/plants-header.jpg";
import Sofas from "../img/header/sofas-header.jpg";
function Hero() {
  return (
    <div className="home-container">
      <div className="grid-container">
        <div className="grid-one">
          <div className="shadow"></div>
          <img src={Sofas} alt="Sofas" />
          <p className="main-description">sofas</p>
        </div>
        <div className="grid-two">
          <div className="shadow"></div>
          <img src={Beds} alt="Beds" />
          <p className="main-description">beds</p>
        </div>
        <div className="grid-two-low">
          <div className="shadow"></div>
          <img src={Plants} alt="Plants" />
          <p className="main-description">plants</p>
        </div>
        <div className="grid-three">
          <div className="shadow"></div>
          <img src={Lighting} alt="Lighting" />
          <p className="main-description">lighting</p>
        </div>
        <div className="grid-three-low">
          <div className="shadow"></div>
          <img src={Chairs} alt="Chairs" />
          <p className="main-description">chairs</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
