import ItemList from "./ItemList";
import { useState } from "react";

const ItemListContainer = () => {
  const [items] = useState([]);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
