import { useState } from "react";
import Album from "../components/album.jpg";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

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
      <img src={Album} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="addButtons">
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
      </div>
    </div>
  );
};

export default ItemCount;
