import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProductos(result));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="productos">
          {productos.map((productos) => {
            return (
              <div key={productos.id}>
                <Item data={productos} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ItemList;
