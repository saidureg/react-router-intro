import { useLoaderData } from "react-router-dom";
import User from "../user/user";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h3>Users: {users.length} </h3>
      <p>Fantastic and voddro user</p>
      <div className="user">
        {users.map((user, idx) => (
          <User key={idx} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
