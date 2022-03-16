import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "../../../ItemListContainer/Item";
import { db } from "../../../../Firebase/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const WomenClothing = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    const getProducts = async () => {
      const productRef = collection(db, "productos");
      const q = query(productRef, where("category", "==", "Women's Clothing"));
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
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="productos">
          {productos.map((productos) => {
            return (
              <div key={productos.id}>
                <Link to={`/Detalle/${productos.id}`}>
                  <Item data={productos} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WomenClothing;
