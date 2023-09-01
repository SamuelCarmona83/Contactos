import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Input } from "../component/Input";
import { Context } from "../store/appContext";

export const NewContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="h1 text-center">Add a new contact</h1>
      <form onSubmit={e => e.preventDefault()}>
        <Input data="Full_Name" />
        <Input data="Email" />
        <Input data="Phone" />
        <Input data="Address" />
        <button className="btn btn-primary w-100 fw-bold">Save</button>
      </form>
      <Link to="/">Or get back to contacts</Link>
    </div>
  );
};
