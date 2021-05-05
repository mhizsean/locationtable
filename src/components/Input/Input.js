import React from "react";

const Input = ({ label, placeholder, errorMessage, ...rest }) => {
  return (
    <div className="input">
      <div className="label">
        {label && <span className="input-label text-left"> {label} </span>}
      </div>

      <div className="input-cont">
        <input
          {...rest}
          type={rest.type}
          className={`text-input ${rest.className}`}
          placeholder={placeholder}
        />

        {errorMessage && (
          <span className="form-error block text-left">{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
