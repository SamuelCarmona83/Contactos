import React from "react";
import { Link } from "react-router-dom";

export const Contact = ({ full_name, address, phone, email, id }) => {
  return (
    <>
      <div className="contact border row rounded d-flex p-2 ">
        <div className="contact__image ms-2 col-md-3 col-4 p-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
            className="rounded-circle m-auto border border-1"
            style={{
              width: "100%",
              aspectRatio: "1:1"
            }}
          />
        </div>
        <div className="contact__info mx-3 col-md-6 col-4">
          <div className="contact__name">
            <Link
              to={`/contact/${id}`}
              className="fs-3 nombre"
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                color: "black",
                textDecoration: "none"
              }}>
              {full_name}
            </Link>
          </div>
          <div className="contact__lpe text-muted mt-3">
            <p>
              <i className="fa-solid fa-location-dot"></i>
              <span
                className="fs-6 location ms-2"
                style={{ textTransform: "capitalize" }}>
                {address}
              </span>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>
              <span className="fs-6 phone ms-2">{phone}</span>
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>
              <span className="fs-6 email ms-2">{email}</span>
            </p>
          </div>
        </div>
        <div className="contact__options d-flex col-md-2 col-2">
          <i className="fa-solid fa-pencil fs-4 edit mx-auto"></i>
          <i className="fa-solid fa-trash-can fs-4 delete mx-auto"></i>
          <Link to={`/contact/${id}`} className="ms-auto">
            See Contact
          </Link>
        </div>
      </div>
    </>
  );
};
