import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detalles, setDetalles] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((json) => setDetalles(json));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemDetail data={detalles} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
