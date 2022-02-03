import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-center d-block p-12 bg-primary">
      <Link to="/" className="navbar-brand ml-5">Redux TypeScript</Link>
    </nav>
  )
}

export default Navbar;

// navbar navbar-expand-lg py-2
// navbar navbar-expand-lg navbar-light bg-light