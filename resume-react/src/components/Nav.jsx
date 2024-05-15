import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <nav className="navBar">
     <div>
        <Link className="nav" to="/">Home</Link>
      </div>
      <div >
        <Link className="nav" to="/projects">Projects</Link>
      </div>
      <div>
        <Link className="nav" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

