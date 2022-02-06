import ItemCount from "./ItemCount";
const item = ({ data }) => {
  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.username}</p>
        <p className="card-text">{data.address.street}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default item;
