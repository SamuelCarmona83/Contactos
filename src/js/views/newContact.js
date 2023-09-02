import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../component/Input";
import { Context } from "../store/appContext";

export const NewContact = () => {

  const navigation = useNavigate()

  const { store, actions } = useContext(Context);

  const [ contact, setContact ] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  })

  const addContact = () => {
    actions.newContact({ ...contact, id: contact.email + contact.phone })
    navigation("/")
  }

  return (
    <div className="container">
      <h1 className="h1 text-center">Add a new contactt</h1>
      <form onSubmit={e => e.preventDefault()} className="d-flex flex-column">
        <input type="text" value={ contact.full_name || "" }  onChange={ (evt) => setContact({ ...contact , full_name: evt.target.value })} />
        <input type="email" value={ contact.email || "" }  onChange={ (evt) => setContact({ ...contact , email: evt.target.value })} />
        <input type="tel" value={ contact.phone || "" }  onChange={ (evt) => setContact({ ...contact , phone: evt.target.value })} />
        <input type="text" value={ contact.address || "" }  onChange={ (evt) => setContact({ ...contact , address: evt.target.value })} />

        <button className="btn btn-primary w-100 fw-bold" 
          onClick={ () => addContact() }
        >
          Save
        </button>
      </form>
      <Link to="/">Or get back to contacts</Link>
    </div>
  );
};
