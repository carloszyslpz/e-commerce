import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
  const { prod, setProd, removeItem } = useContext(CartContext);
  console.log(prod);

  return (
    <div>
      {prod.map((data) => {
        return (
          <div key={data}>
            <div>
              <h5>{data.name}</h5>
              <p>
                {data.cantidad} x ${data.price}
              </p>
            </div>
            <button onClick={() => setProd([])}>Borrar todo</button>
            <button onClick={() => removeItem(data.id)}>Borrar item</button>
          </div>
        );
      })}
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
