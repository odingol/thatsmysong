import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1>ThatsMyJam!</h1>
        <div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="Saved">Saved</Link></li>
            <li><Link to="Signout">Signout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
