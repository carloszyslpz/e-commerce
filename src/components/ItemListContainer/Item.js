import { Link } from "react-router-dom";

const item = ({ data }) => {
  return (
    <div className="card container">
      <div className="card-body">
        <img src={data.image} className="itemImg" alt="producto"></img>
        <br />
        <br />
        <p className="card-title">{data.title}</p>
        <p className="card-text">$ {data.price} USD</p>
        <Link to={`/${data.category}/${data.id}`}>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              fontWeight: "bold",
            }}
          >
            Más Detalles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default item;
