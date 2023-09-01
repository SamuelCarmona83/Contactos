import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input } from "../component/Input";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store } = useContext(Context);
  const contacts = store.contacts;
  const { id } = useParams();
  const specificContact = contacts.find(contact => contact.id == id);

  return (
    <div className="container">
      <h1 className="h1 text-center">Edit a contact</h1>
      <form onSubmit={e => e.preventDefault()}>
        <Input data="Full_Name" value={specificContact.full_name} />
        <Input data="Email" value={specificContact.email} type="email" />
        <Input data="Phone" value={specificContact.phone} type="number" />
        <Input data="Address" value={specificContact.address} />
        <button className="btn btn-primary w-100 fw-bold">Save</button>
      </form>
      <Link to={`/contacts/${id}`}>Or get back to the contact</Link>
    </div>
  );
};
