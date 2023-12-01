import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2 className="font-bold capitalize">{title}</h2>
      <p>{body}</p>
      <Link to={-1} className="font-bold text-red-400">
        Go back
      </Link>
    </div>
  );
};

export default PostDetails;
