import CartWidget from "../components/CartWidget";

const NavBar = () => {
  return (
    <div
      className="btn-group navButtons container"
      role="group"
      aria-label="Basic example"
    >
      <h1>Mi E-Commerce</h1>
      <button type="button" className="btn btn-primary">
        Home
      </button>
      <button type="button" className="btn btn-primary">
        Nosotros
      </button>
      <button type="button" className="btn btn-primary">
        Productos
      </button>
      <button type="button" className="btn btn-primary">
        Registro
      </button>
      <button type="button" className="btn btn-primary">
        Contacto
      </button>
      <CartWidget />
    </div>
  );
};

export default NavBar;
