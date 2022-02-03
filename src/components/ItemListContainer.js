import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
const ItemListContainer = ({ title }) => {
  return (
    <div>
      {title}
      <ItemList />
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
