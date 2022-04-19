import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

const ItemDetail = ({ data }) => {
  const [agregado, setAgregado] = useState(true);
  const { addItem, setCarga } = useContext(CartContext);

  function onAdd(cantidad) {
    setCarga(false);
    setAgregado(false);
    addItem({ data, cantidad });
  }

  return (
    <div
      className="card container"
      style={{
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <img src={data.image} alt="producto" width={"150px"}></img>
        <p>{data.description}</p>
        <h3 className="card-text">${data.price}</h3>
      </div>
      {agregado ? (
        <ItemCount onAdd={onAdd} setAgregado={setAgregado} />
      ) : (
        <Link to={"/Cart"}>
          <button
            onClick={onAdd}
            type="button "
            className="btn btn-primary"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Terminar mi Compra
          </button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
