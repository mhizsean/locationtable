import React from "react";

const Input = ({ label, placeholder, errorMessage, ...rest }) => {
  return (
    <div className="input">
      {/* <div className="label">
        {label && <span className="input-label text-left"> {label} </span>}
      </div> */}

      <div className="input-cont">
        <div className="label">
          {label && <span className="input-label"> {label} </span>}
        </div>
        <input
          {...rest}
          type={rest.type}
          className={`text-input ${rest.className}`}
          placeholder={placeholder}
        />
      </div>
      {errorMessage && <span className="form-error">{errorMessage}</span>}
    </div>
  );
};

export default Input;
