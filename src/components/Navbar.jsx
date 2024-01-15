import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../img/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <img src={Logo} alt="Store Logo" />
          </Link>
          <div className="nav-links">
            <Link to="/pages/Categories">categories</Link>
            <Link to="/pages/FavoritePage">favorite</Link>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#000000" }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
