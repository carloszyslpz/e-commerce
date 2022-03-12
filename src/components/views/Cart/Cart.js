import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { prod, setProd, removeItem } = useContext(CartContext);
  let precioTotal = prod.reduce(
    (total, item) => total + item.cantidad * item.price,
    0
  );
  return (
    <div>
      {prod.length > 0 ? (
        prod.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img src={item.image} alt="producto" width={"150px"}></img>
                <h5>
                  {item.title}({item.cantidad})
                </h5>
                <p>${item.price}</p>
              </div>
              <button onClick={() => setProd([])}>Borrar Todo</button>
              <button onClick={() => removeItem(item.id)}>Borrar Item</button>
              <Link to={"/CompraFinalizada"}>
                <button onClick={() => setProd([])}>Finalizar Compra</button>{" "}
              </Link>
              <p>Precio Total: ${precioTotal}</p>
            </div>
          );
        })
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
export default Cart;
