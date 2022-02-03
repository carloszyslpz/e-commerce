import { useState, useEffect } from "react";
import Item from "./Item";
const ItemList = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=golden%20girls")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  return (
    <div>
      <Item />
    </div>
  );
};

export default ItemList;
