import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;