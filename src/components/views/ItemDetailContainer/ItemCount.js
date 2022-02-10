import { useState } from "react";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  function onAdd() {
    alert("Agregaste un Producto");
  }

  const counterUp = () => {
    if (counter < 15) {
      setCounter(counter + 1);
    }
  };
  const counterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
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
        <button onClick={onAdd} type="button " className="btn btn-primary">
          Agregar a Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
