import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProductos(result));
  });

  return (
    <div>
      {loading ? (
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <ItemList items={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
