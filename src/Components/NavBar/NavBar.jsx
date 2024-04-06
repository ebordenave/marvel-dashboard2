import "./NavBar.css";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <h2>MARVEL</h2>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};