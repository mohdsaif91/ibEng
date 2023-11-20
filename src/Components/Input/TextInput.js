import React from "react";

import style from "./textInput.module.scss";

function TextInput({
  value,
  onChange,
  className = "",
  type = "input",
  placeHolder = "",
}) {
  return (
    <input
      placeholder={placeHolder}
      type={type}
      className={`${style.input} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
