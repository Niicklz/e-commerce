import React from "react";
import "./button.css";





export const Button = ({ buttonText, size,variant="standard", type="button", onClick }) => {
 
  return (
    <button type={type}
     onClick={onClick} className={`${size ? `button--size-${size}` : ""} button--${variant}`}>
      {buttonText}
    </button>
  );
};
