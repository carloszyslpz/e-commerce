import { useState, useEffect } from "react";
import Item from "./Item";
const ItemList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="productos">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Item data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
