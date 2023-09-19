import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  let { postId } = useParams();
  const { id, title, body } = post;

  console.log(postId);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h4>Post details about: {id} </h4>
      <h3> {title} </h3>
      <p>
        <small>{body} </small>
      </p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetails;
