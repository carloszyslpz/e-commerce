import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducto(json));
  }, []);

  return (
    <div className="productos">
      {producto.map((producto) => {
        return (
          <div key={producto.id}>
            {loading ? (
              <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <Item data={producto} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
