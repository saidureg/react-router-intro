import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h2>Posts: {posts.length} </h2>
      <div className="user">
        {posts.map((post, idx) => (
          <Post key={idx} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
