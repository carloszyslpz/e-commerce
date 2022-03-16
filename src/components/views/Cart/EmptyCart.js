import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container emptyCart">
      <h4>No agregaste ningún artículo</h4>
      <br />
      <Link to={"/"}>
        <button type="button" className="btn btn-primary">
          Ir a Productos
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
