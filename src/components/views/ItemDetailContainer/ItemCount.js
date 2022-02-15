import { useState } from "react";

const ItemCount = ({ setAgregado }) => {
  const [counter, setCounter] = useState(0);
  const [btnActivo, setBtnActivo] = useState(true);

  const counterUp = () => {
    if (counter < 15) {
      setCounter(counter + 1);
      setBtnActivo(false);
    }
  };
  const counterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setBtnActivo(true);
    }
  };
  const onAdd = () => {
    setAgregado(counter);
    alert("Agregaste un producto a tu carrito");
  };
  return (
    <>
      <div className="addButtons container">
        <button
          onClick={counterDown}
          type="button "
          className="btn btn-primary"
        >
          <span className="material-icons">remove</span>
        </button>
        <p>{counter}</p>
        <button onClick={counterUp} type="button" className="btn btn-primary">
          <span className="material-icons">add</span>
        </button>
      </div>
      <br />
      <div className="addCart">
        <button
          onClick={onAdd}
          disabled={btnActivo}
          type="button "
          className="btn btn-primary"
        >
          Agregar a Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
