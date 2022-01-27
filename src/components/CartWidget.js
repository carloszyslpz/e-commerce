import React from "react";
import CartImg from "./cart.png";
const CartWidget = () => {
  return (
    <div>
      <img src={CartImg} alt="cart-icon" width={"40px"} className="cart-icon" />
    </div>
  );
};

export default CartWidget;
