import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [prod, setProd] = useState([]);

  function cantidadItems() {
    return prod.reduce((total, item) => total + item.cantidad, 0);
  }

  function removeItem(id) {
    const updateProd = prod.filter((item) => item.id !== id);
    setProd(updateProd);
  }
  function addItem(infoItem) {
    const foundItem = prod.find((item) => item.id === infoItem.item.id);
    if (foundItem) {
      foundItem.infoItemcantidad += prod.cantidad;
    }
    setProd([...prod]);
  }

  return (
    <CartContext.Provider
      value={{ prod, addItem, setProd, removeItem, cantidadItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
