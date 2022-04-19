import CartImg from "../CartWidget/cart.png";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadItems } = useContext(CartContext);

  let itemsPush = 0;

  return (
    <div className="numElement">
      <Link to={"/Cart"}>
        <button className="cartIcon">
          <img src={CartImg} alt="cart-icon" width={"30px"} />
        </button>
      </Link>
      <h5>{cantidadItems()}</h5>
    </div>
  );
};

export default CartWidget;
