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
            <Link
              to="/"
              className="nav-item nav-link"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
            <Link
              to="/Electronics"
              className="nav-item nav-link"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Electronics
            </Link>
            <Link
              to="/Jewelery"
              className="nav-item nav-link"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Jewelery
            </Link>
            <Link
              to="/Men'sClothing"
              className="nav-item nav-link"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Men's Clothing
            </Link>
            <Link
              to="/Women'sClothing"
              className="nav-item nav-link"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Women's Clothing
            </Link>
            <Link
              to="/AboutUs"
              className="nav-item nav-link"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
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
