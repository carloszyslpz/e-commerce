import ItemList from "./ItemList";
import { useState } from "react";

const ItemListContainer = () => {
  const [productos] = useState([]);
  return (
    <div>
      <ItemList items={productos} />
    </div>
  );
};

export default ItemListContainer;
