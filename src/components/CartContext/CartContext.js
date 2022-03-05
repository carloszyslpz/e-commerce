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
      foundItem.infoItemcantidad += prod.cantidad;
    } else {
      prod.push({
        id: infoItem.id,
        title: infoItem.title,
        description: infoItem.description,
        price: infoItem.price,
        image: infoItem.image,
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
