import React from "react";

export const Input = ({ data, value }) => {
  return (
    <div className="my-3">
      <label htmlFor={data} className="form-label">
        {data.replace(/_/g, " ")}
      </label>
      <input
        className="w-100"
        placeholder={`Enter ${data.replace(/_/g, " ")}`}
        type="text"
        id={data}
        name={data}
        defaultValue={value}
      />
    </div>
  );
};
