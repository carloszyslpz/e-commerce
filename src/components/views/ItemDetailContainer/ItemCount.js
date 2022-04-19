import Swal from "sweetalert2";
import { useState } from "react";

const ItemCount = ({ onAdd }) => {
  const [btnActivo, setBtnActivo] = useState(true);
  const [counter, setCounter] = useState(0);

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
  const add = () => {
    onAdd(counter);
    Swal.fire({
      title: "Producto agregado correctamente",
      icon: "success",
      timer: 1500,
    });
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
          onClick={add}
          disabled={btnActivo}
          type="button"
          className="btn btn-primary"
        >
          Agregar a Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
