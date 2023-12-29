import React from "react";
import style from "./Display.module.css";

function Display({ displayVal }) {
  return (
    <input
      type="text"
      value={displayVal}
      className={style.display}
      readOnly
    ></input>
  );
}

export default Display;
