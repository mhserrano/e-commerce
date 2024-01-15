import "./Hero.css";

import { Link } from "react-router-dom";
import Beds from "../img/header/beds-header.jpg";
import Chairs from "../img/header/chairs-header.jpg";
import Lighting from "../img/header/lighting-header.jpg";
import Plants from "../img/header/plants-header.jpg";
import Sofas from "../img/header/sofas-header.jpg";
function Hero() {
  return (
    <div className="container">
      <img src={Sofas} alt="Sofas" className="one" height={700} />
      <p className="main-description">sofas</p>
      <img src={Beds} alt="Beds" className="two" height={350} />
      <p className="main-description">beds</p>
      <img src={Chairs} alt="Chairs" className="two-low" height={350} />
      <p className="main-description">chairs</p>
      <img src={Plants} alt="Plants" className="three" height={350} />
      <p className="main-description">plants</p>
      <img src={Lighting} alt="Lighting" className="three-low" height={350} />
      <p className="main-description">lighting</p>
    </div>
  );
}

export default Hero;
