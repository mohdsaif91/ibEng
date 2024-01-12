import React from "react";

import style from "./button.module.scss";

function Button({ onClick, label, className = "", disable = false }) {
  return (
    <button
      disabled={disable}
      className={`${style.btn} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
