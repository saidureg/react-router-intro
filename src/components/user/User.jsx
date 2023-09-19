import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone, website } = user;
  const userStyle = {
    border: "2px solid blue",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email: {email} </p>
      <p>Phone: {phone} </p>
      <p>Website: {website} </p>
      <Link to={`/user/${id}`}> Show Details </Link>
      <Link to={`/user/${id}`}>
        <button>Click me</button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
