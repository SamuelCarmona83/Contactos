import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const SpecificContact = () => {
  const { id } = useParams();
  const { store } = useContext(Context);
  const contacts = store.contacts;

  const specificContact = contacts.find(contact => contact.id == id);
  return (
    <div className="container">
      <div
        className="rounded-top p-3"
        style={{ background: "rgb(197, 198, 198)" }}>
        <Link to="/">&larr;Back to Contacts</Link>
        <div className="mx-auto col-md-3 col-6 ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
            className="rounded-circle my-3 border"
            style={{
              width: "100%",
              aspectRatio: "1:1"
            }}
          />
          <h1 className="h1 text-center">{specificContact.full_name}</h1>
        </div>
      </div>
      <ul
        className={window.innerWidth > 800 ? "text-center" : ""}
        style={{ listStyle: "none", padding: "0" }}>
        <li className="my-3">
          <b>Address:</b> {specificContact.address}
        </li>
        <li className="my-3">
          <b>Phone:</b> {specificContact.phone}
        </li>
        <li className="my-3">
          <b>Email:</b> {specificContact.email}
        </li>
        <li className="my-3">
          <b>Id:</b> {specificContact.id}
        </li>
        <li className="my-3">
          <button style={{ border: "none", background: "none" }}>
            <i class="fa-brands fa-whatsapp"></i> Llamar a{" "}
            {specificContact.phone}
          </button>
        </li>
        <li className="my-3">
          <button style={{ border: "none", background: "none" }}>
            <i class="fa-brands fa-whatsapp"></i> Videollamar a{" "}
            {specificContact.phone}
          </button>
        </li>
        <li className="my-3">
          <button style={{ border: "none", background: "none" }}>
            <i class="fa-brands fa-whatsapp"></i> Enviar mensaje a{" "}
            {specificContact.phone}
          </button>
        </li>
        <li className="my-3">
          <button style={{ border: "none", background: "none" }}>
            <i class="fa-solid fa-clapperboard"></i> Grabador de llamadas
          </button>
        </li>
      </ul>
    </div>
  );
};
