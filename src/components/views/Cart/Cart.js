import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

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
                ({item.image} <h2>({item.cantidad})</h2>
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <button onClick={() => setProd([])}>Borrar Todo</button>
              <button onClick={() => removeItem(item.id)}>Borrar Item</button>
              <Link to={"/CompraFinalizada"}>
                {" "}
                <button onClick={() => setProd([])}>
                  Finalizar Compra
                </button>{" "}
              </Link>
            </div>
          );
        })
      ) : (
        <h1>Cart</h1>
      )}
      <div>
        <p>Precio Total: ${precioTotal}</p>
      </div>
    </div>
  );
};
export default Cart;
