import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, email, phone, username, website } = user;
  return (
    <div className="border rounded-lg p-20 bg-slate-200">
      <h2>User Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Username: {username}</p>
      <p>Website: {website}</p>
      <Link to={-1} className="font-bold text-red-400">
        Go Back
      </Link>
    </div>
  );
};

export default UserDetails;
