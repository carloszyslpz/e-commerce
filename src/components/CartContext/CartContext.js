import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [prod, setProd] = useState([]);

  function removeItem(id) {
    const updateProd = prod.filter((data) => data.id !== id);
    setProd(updateProd);
  }
  function addItem(infoItem) {
    const foundItem = prod.find((data) => data.id === infoItem.item.id);
    if (foundItem) {
      foundItem.infoItemcantidad += prod.cantidad;
    } else {
      prod.push({
        id: infoItem.data.id,
        name: infoItem.data.title,
        descripcion: infoItem.data.description,
        price: infoItem.data.price,
        imagen: infoItem.data.image,
        cantidad: infoItem.cantidad,
      });
    }
    setProd([...prod]);
  }

  return (
    <CartContext.Provider value={{ prod, addItem, setProd, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
