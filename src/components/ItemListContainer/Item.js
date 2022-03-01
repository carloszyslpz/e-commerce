import { Link } from "react-router-dom";

const item = ({ data }) => {
  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <img
          src={data.image}
          className="itemImg"
          alt="producto"
          width={"150px"}
        ></img>

        <p className="card-text">$ {data.price} USD</p>
        <Link to={`/${data.category}/${data.id}`}>
          <button type="button " className="btn btn-primary">
            Más Detalles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default item;
