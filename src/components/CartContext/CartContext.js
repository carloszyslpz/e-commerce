import { createContext, useState } from "react";

export const CartContext = createContext ()

export const ProductProvider = ({ children }) => {
    const [item, setItem] = useState()//(ARRAY);
    
    return(
<CartContext.Provider value={[item, setItem]}>
    {children}
</CartContext.Provider>
    )
  