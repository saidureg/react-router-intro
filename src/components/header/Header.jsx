import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <Link to="/contacts">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
