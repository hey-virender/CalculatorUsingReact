import React from "react";
import style from "./Btncontainer.module.css";

function Btncontainer({ onButtonClick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttonscontainer}>
      {buttonNames.map((buttonName) => (
        <button className={style.btn} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default Btncontainer;
