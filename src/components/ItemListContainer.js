import ItemCount from "./ItemCount";
const ItemListContainer = ({ title }) => {
  return (
    <div>
      {title}
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
