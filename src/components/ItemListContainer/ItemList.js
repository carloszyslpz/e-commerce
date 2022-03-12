import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="productos">
      {items.map((productos) => {
        return (
          <div key={productos.id}>
            <Link to={`/Detalle/${productos.id}`}>
              <Item data={productos} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
