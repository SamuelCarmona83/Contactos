import React from "react";

export const Input = ({ data, value, type = "text" }) => {
  return (
    <div className="my-3">
      <label htmlFor={data} className="form-label">
        {data.replace(/_/g, " ")}
      </label>
      <input
        className="w-100"
        placeholder={`Enter ${data.replace(/_/g, " ")}`}
        type={type}
        id={data}
        name={data}
        defaultValue={value}
      />
    </div>
  );
};
