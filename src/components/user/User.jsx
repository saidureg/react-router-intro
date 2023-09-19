import PropTypes from "prop-types";
const User = ({ user }) => {
  const { name, email, phone, website } = user;
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
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
