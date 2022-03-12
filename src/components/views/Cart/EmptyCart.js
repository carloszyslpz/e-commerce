import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h4>No agregaste ningún artículo</h4>
      <br />
      <Link to={"/"}>
        <button>Ir a Productos</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
