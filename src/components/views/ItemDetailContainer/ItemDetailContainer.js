import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detalles, setDetalles] = useState([]);
  const [loading, setLoading] = useState(true);

  let id = useParams();

  let productoId = id.id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productoId}`)
      .then((response) => response.json())
      .then((json) => setDetalles(json));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [productoId]);

  return (
    <div>
      {loading ? (
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <div key={detalles.id}>
            <ItemDetail data={detalles} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
