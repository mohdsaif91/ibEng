import React from "react";

import style from "./button.module.scss";

function Button({ onClick, label, className = "" }) {
  return (
    <button className={`${style.btn} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
