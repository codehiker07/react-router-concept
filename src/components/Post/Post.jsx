import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="border border-gray-300 p-4 space-y-2">
      <h2>Id: {id}</h2>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
      <Link to={`/post/${id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};

export default Post;
