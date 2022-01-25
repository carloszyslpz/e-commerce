import React from "react";

const NavBar = () => {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic example"
      className="navButtons container"
    >
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
      <button type="button" class="btn btn-primary">
        Cart
      </button>
    </div>
  );
};

export default NavBar;
