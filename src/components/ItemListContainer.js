import ItemList from "./ItemList";
const ItemListContainer = ({ title }) => {
  return (
    <div>
      {title}
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
