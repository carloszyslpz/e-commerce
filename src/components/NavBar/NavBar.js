import CartWidget from "./CartWidget/CartWidget";
import logo from "../NavBar/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container App-header">
      <img src={logo} alt="logo" className="logo" />
      <div className="navItems">
        <nav className="container navButtons">
          <ul className="nav nav-tabs">
            <Link to="/" className="nav-item nav-link">
              Inicio
            </Link>
            <Link to="/Nosotros" className="nav-item nav-link">
              Nosotros
            </Link>
            <Link to="/Productos" className="nav-item nav-link">
              Productos
            </Link>
            <Link to="/Registro" className="nav-item nav-link">
              Registro
            </Link>
            <Link to="/Contacto" className="nav-item nav-link">
              Contacto
            </Link>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
