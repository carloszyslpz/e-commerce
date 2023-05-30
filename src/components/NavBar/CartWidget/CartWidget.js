import CartImg from "../CartWidget/cart.png";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadItems } = useContext(CartContext);

  return (
    <div className="numElement">
      <Link to={"/Cart"}>
        <button className="cartIcon">
          <img src={CartImg} alt="cart-icon" width={"30px"} />
        </button>
      </Link>
      <strong>{cantidadItems()}</strong>
    </div>
  );
};

export default CartWidget;
