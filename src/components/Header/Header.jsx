import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Router Website</h1>
      <nav className="flex justify-center space-x-4 font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
        <NavLink to="/users/">Users</NavLink>
        <NavLink to="/posts/">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
