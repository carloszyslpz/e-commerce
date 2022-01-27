import React from "react";
import CartWidget from "../components/CartWidget";

const NavBar = () => {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic example"
      className="navButtons container"
    >
      <h1>Mi E-Commerce</h1>
      <button type="button" class="btn btn-primary">
        Home
      </button>
      <button type="button" class="btn btn-primary">
        Nosotros
      </button>
      <button type="button" class="btn btn-primary">
        Productos
      </button>
      <button type="button" class="btn btn-primary">
        Registro
      </button>
      <button type="button" class="btn btn-primary">
        Contacto
      </button>
      <CartWidget />
    </div>
  );
};

export default NavBar;
