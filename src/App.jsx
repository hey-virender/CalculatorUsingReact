import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Btncontainer from "./components/Btncontainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div id="calculator">
      <Display displayVal={calVal}></Display>
      <Btncontainer onButtonClick={onButtonClick}></Btncontainer>
    </div>
  );
}

export default App;
