import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 fs-2 mx-5">Contacts</span>
      </Link>
      <div className="ml-auto">
        <Link to="/new-contact">
          <button className="btn btn-success mx-5">Add New Contact</button>
        </Link>
      </div>
    </nav>
  );
};
