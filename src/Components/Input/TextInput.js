import React from "react";

import style from "./textInput.module.scss";

function TextInput({
  value,
  disable = false,
  onChange,
  className = "",
  type = "input",
  placeHolder = "",
  multiple = false,
  label = "",
}) {
  return (
    <div className={label !== "" && style.flexBox}>
      {label !== "" && <label>{label}</label>}
      <input
        disabled={disable}
        multiple={multiple}
        placeholder={placeHolder}
        type={type}
        className={`${style.input} ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
