import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const postStyle = {
    border: "2px solid blue",
    padding: "10px",
    borderRadius: "20px",
  };

  const handleToSeeDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      <h3>Post Details: {id} </h3>
      <p>{title} </p>
      <Link to={`/post/${id}`}>Post Details</Link> <br />
      <button onClick={handleToSeeDetails}>Click to see details</button>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
