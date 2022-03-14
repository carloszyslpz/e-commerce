import ItemList from "./ItemList";
import { useState, useEffect } from "react";

import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProducts([]);
  }, []);

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
