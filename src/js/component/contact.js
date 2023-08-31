import { number } from "prop-types";
import React from "react";

export const Contact = ({ name, address, phone, email }) => {
  return (
    <>
      <div className="contact border row rounded d-flex p-2 ">
        <div className="contact__image ms-2 col-md-3 col-4 p-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
            className="rounded-circle m-auto border"
            style={{
              width: "100%",
              aspectRatio: "1:1",
              objectFit: "cover"
            }}
          />
        </div>
        <div className="contact__info mx-3 col-md-6 col-4">
          <div className="contact__name">
            <p className="fs-3 nombre">{name}</p>
          </div>
          <div className="contact__lpe text-muted">
            <p>
              <i class="fa-solid fa-location-dot"></i>
              <span className="fs-6 location ms-2">{address}</span>
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>
              <span className="fs-6 phone ms-2">{phone}</span>
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              <span className="fs-6 email ms-2">{email}</span>
            </p>
          </div>
        </div>
        <div className="contact__options d-flex col-md-2 col-2">
          <i class="fa-solid fa-pencil fs-4 edit mx-auto"></i>
          <i class="fa-solid fa-trash-can fs-4 delete mx-auto"></i>
        </div>
      </div>
    </>
  );
};
