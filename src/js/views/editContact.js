import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input } from "../component/Input";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const contacts = store.contacts;
  const { id } = useParams();
  const specificContact = contacts.find(contact => contact.id == id);

  const [ contact, setContact ] = useState(specificContact)

  const saveChanges = () => {
    actions.editContact(contact)
  }

  return (
    <div className="container">
      <h1 className="h1 text-center">Edit a contact</h1>
      <form onSubmit={e => e.preventDefault()} className="d-flex flex-column">
        <input type="text" value={ contact.full_name || "" }  onChange={ (evt) => setContact({ ...contact , full_name: evt.target.value })} />
        <input type="email" value={ contact.email || "" }  onChange={ (evt) => setContact({ ...contact , email: evt.target.value })} />
        <input type="tel" value={ contact.phone || "" }  onChange={ (evt) => setContact({ ...contact , phone: evt.target.value })} />
        <input type="text" value={ contact.address || "" }  onChange={ (evt) => setContact({ ...contact , address: evt.target.value })} />

        <button className="btn btn-primary w-100 fw-bold" 
          onClick={ () => saveChanges() }
        >
          Save
        </button>
      </form>
      <Link to={`/contacts/${id}`}>Or get back to the contact</Link>
    </div>
  );
};
