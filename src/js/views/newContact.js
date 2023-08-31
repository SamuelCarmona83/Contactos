import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const NewContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="h1 text-center">Add a new contact</h1>
      <form onSubmit={e => e.preventDefault()}>
        <div className="my-3">
          <label for="Name">Full Name</label>
          <input
            className="w-100"
            placeholder="Full Name"
            type="text"
            id="Name"
            name="Name"
          />
        </div>
        <div className="my-3">
          <label for="Email">Email</label>
          <input
            className="w-100"
            placeholder="Enter email"
            type="text"
            id="Email"
            name="Email"
          />
        </div>
        <div className="my-3">
          <label for="Phone">Phone</label>
          <input
            className="w-100"
            placeholder="Enter phone"
            type="text"
            id="Phone"
            name="Phone"
          />
        </div>
        <div className="my-3">
          <label for="Address">Address</label>
          <input
            className="w-100"
            placeholder="Enter address"
            type="text"
            id="Address"
            name="Address"
          />
        </div>

        <button className="btn btn-primary w-100 fw-bold">Save</button>
      </form>
      <Link to="/">
        <p className="text-decoration-underline">Or get back to contacts</p>
      </Link>
    </div>
  );
};
