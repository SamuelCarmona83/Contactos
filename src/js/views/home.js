import React, { useContext } from "react";
import "../../styles/home.css";
import { Contact } from "../component/contact";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store } = useContext(Context);
  const contacts = store.contacts;
  return (
    <div className="container">
      {contacts.map(contact => (
        <Contact
          name={contact.contactName}
          address={contact.contactAddress}
          phone={contact.contactPhone}
          email={contact.contactEmail}
        />
      ))}
    </div>
  );
};
