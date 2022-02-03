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
    <div className="card">
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        <div className="addButtons container">
          <button
            onClick={counterDown}
            type="button "
            className="btn btn-primary"
          >
            <span className="material-icons">remove</span>
          </button>
          <p>{counter}</p>
          <button
            onClick={counterUp}
            type="button "
            className="btn btn-primary"
          >
            <span className="material-icons">add</span>
          </button>
        </div>
        <br />
        <div className="addCart">
          <button onClick={onAdd} type="button " className="btn btn-primary">
            Agregar a Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
