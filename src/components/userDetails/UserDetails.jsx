import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email } = user;

  return (
    <div>
      <h3>Details about users: {name} </h3>
      <p>Email: {email} </p>
    </div>
  );
};

export default UserDetails;
