import React, { useContext } from "react";
import "../../styles/home.css";
import { Contact } from "../component/contact";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store } = useContext(Context);
  console.log(useContext(Context));
  const contacts = store.contacts;
  return (
    <>
      <div className="container">
        {contacts.map((contact, index) => (
          <Contact
            full_name={contact.full_name}
            address={contact.address}
            phone={contact.phone}
            email={contact.email}
            id={contact.id}
            key={index + 1}
          />
        ))}
      </div>
      <div style={{ height: "20px" }}></div>
    </>
  );
};
