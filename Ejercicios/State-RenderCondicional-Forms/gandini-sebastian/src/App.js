import React, { useState } from "react";
import "./App.css";

function StateReact() {
  const [option, setOption] = useState("empty");
  const [inputValue, setInputValue] = useState("");

  const valueList = ["Uno", "Dos", "Tres", "Cuatro"];

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    alert(inputValue);
  };

  return (
    <div className="MainDiv">
      <label htmlFor="shows">Choose an option to display:</label>
      <select value={option} onChange={handleChange} name="options" id="shows">
        <option value="empty">--Choose list or form --</option>
        <option value="list">Show list</option>
        <option value="form">Show form</option>
      </select>

      {option === "list" && (
        <div>
          <ul>
            List
            {valueList.map((value, index) => {
              return <li key={`${value}-${index}`}>{value}</li>;
            })}
          </ul>
        </div>
      )}

      {option === "form" && (
        <div>
          <input type="text" value={inputValue} onChange={handleChangeInput} />
          <input type="submit" value="Submit" onClick={handleInputClick} />
        </div>
      )}

    </div>
  );
}

export default StateReact;