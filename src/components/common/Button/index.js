import React from "react";
import "./button.css";

const Button = ({ btnText, onClick, customClass, prefix }) => {
  return (
    <div
      className={`flex absolute-center button-wrapper ${customClass}`}
      onClick={onClick}
    >
      {prefix} {btnText}
    </div>
  );
};

export default Button;
