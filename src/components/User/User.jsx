import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="p-4 border-solid border-2 border-indigo-400 space-y-2">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>Id: {id}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>
        <button className="bg-red-300 p-2">User details</button>
      </Link>
    </div>
  );
};

export default User;
