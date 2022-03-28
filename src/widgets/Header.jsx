// modules
import React from "react";
import { Link } from "react-router-dom";
// styles
import "../styles/WidgetsStyles/Header.scss";

const Header = () => {
  return (
    <header>
      <h1 className="logo">Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
