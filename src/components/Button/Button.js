import React from "react";
import { Loader } from "../icon/Loader";

const Button = ({ text, secondary, ...rest }) => {
  return (
    <button
      {...rest}
      className={`button  ${rest.loading ? `overlay-btn` : ""}
`}>
      {rest.loading ? <Loader /> : text}
    </button>
  );
};

export default Button;
