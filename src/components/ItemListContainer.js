import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({ title }) => {
  return (
    <div>
      {title}
      <ItemList />
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;
