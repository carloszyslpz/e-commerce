import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

const ItemDetail = ({ data }) => {
  const [agregado, setAgregado] = useState();
  const { addItem } = useContext(CartContext);

  function onAdd(cantidad) {
    setAgregado(false);
    addItem({ data, cantidad });
  }

  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <img src={data.image} alt="producto" width={"150px"}></img>
        <p>{data.description}</p>
        <h3 className="card-text">${data.price}</h3>
        {agregado ? (
          <Link to={"/Cart"}>
            <button onClick={onAdd} type="button " className="btn btn-primary">
              Terminar mi Compra
            </button>
          </Link>
        ) : (
          <ItemCount onAdd={agregado} setAgregado={setAgregado} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
