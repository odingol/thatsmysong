import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1>
          <i>T h a t s M y J a m !</i>
        </h1>
        <div>
          <ul className="nav-links">
            <div className="button-border">
              <li className= "list-text">
                <Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link>
              </li>
            </div>
            <div className="button-border">
              <li>
                <Link to="/library" style={{textDecoration: "none", color: "white"}}>Library</Link>
              </li>
            </div>
            <div className="button-border">
              <li>
                <Link to="Saved" style={{textDecoration: "none", color: "white"}}>Saved</Link>
              </li>
            </div>
            <div className="button-border">
              <li>
                <Link to="Signout" style={{textDecoration: "none", color: "white"}}>Signout</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
