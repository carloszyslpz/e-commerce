import CartWidget from "./CartWidget/CartWidget";
import logo from "../NavBar/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container App-header">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="navItems">
        <nav className="container navButtons">
          <ul className="nav nav-tabs">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/electronics" className="nav-item nav-link">
              Electronics
            </Link>
            <Link to="/jewelry" className="nav-item nav-link">
              Jewelry
            </Link>
            <Link to="/men's%20clothing" className="nav-item nav-link">
              Men's Clothing
            </Link>
            <Link to="/women's%20clothing" className="nav-item nav-link">
              Women's Clothing
            </Link>
            <Link to="/AboutUs" className="nav-item nav-link">
              About Us
            </Link>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
