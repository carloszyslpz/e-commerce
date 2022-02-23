import CartImg from "../CartWidget/cart.png";
const CartWidget = () => {
  return (
    <div>
      <button className="cartIcon">
        <img src={CartImg} alt="cart-icon" width={"30px"} />
      </button>
    </div>
  );
};

export default CartWidget;
