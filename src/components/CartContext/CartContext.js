import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [prod, setProd] = useState([]);
  const [carga, setCarga] = useState(false);

  function cantidadItems() {
    return prod.reduce((total, item) => total + item.cantidad, 0);
  }

  function removeItem(id) {
    const updateProd = prod.filter((item) => item.id !== id);
    setProd(updateProd);
  }
  function addItem(infoItem) {
    const foundItem = prod.find((item) => item.id === infoItem.id);
    if (foundItem) {
      foundItem.infoItemcantidad += prod.data.cantidad;
    } else {
      prod.push({
        id: infoItem.data.id,
        title: infoItem.data.title,
        description: infoItem.data.description,
        price: infoItem.data.price,
        image: infoItem.data.image,
        cantidad: infoItem.cantidad,
      });
    }
    setProd([...prod]);
  }

  return (
    <CartContext.Provider
      value={{
        prod,
        carga,
        addItem,
        setProd,
        removeItem,
        setCarga,
        cantidadItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
