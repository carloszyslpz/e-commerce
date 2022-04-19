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
    getProducts();
  }, []);

  return (
    <div className="spinner">
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
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
