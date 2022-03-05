import CartImg from "../CartWidget/cart.png";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
const CartWidget = () => {
  const { cantidadItems } = useContext(CartContext);
  return (
    <div>
      <button className="cartIcon">
        <img src={CartImg} alt="cart-icon" width={"30px"} />
        {cantidadItems()}
      </button>
    </div>
  );
};

export default CartWidget;
