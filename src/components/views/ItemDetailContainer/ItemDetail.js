import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <img src={data.image} alt="producto" width={"150px"}></img>
        <p>{data.description}</p>
        <h3 className="card-text">${data.price}</h3>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
