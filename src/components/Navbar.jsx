import Logo from "../img/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={Logo} alt="Store Logo" />
          <div className="nav-links"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
