import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { db } from "../../../Firebase/FirebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detalles, setDetalles] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    const getProducts = async () => {
      const productRef = collection(db, "productos");
      const q = query(productRef, where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDetalles(docs);
    };
    getProducts();
  }, [id]);

  return (
    <div className="spinner">
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
        </div>
      ) : (
        detalles.map((detalles) => {
          return (
            <div key={detalles.id}>
              <ItemDetail data={detalles} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ItemDetailContainer;
