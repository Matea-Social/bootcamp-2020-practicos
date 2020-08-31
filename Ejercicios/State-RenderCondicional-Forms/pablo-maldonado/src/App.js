import React, { useState } from "react";
import "./App.css";

function App() {
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
    <div className="App">
      <label htmlFor="shows">Choose what do you want to render:</label>
      <select value={option} onChange={handleChange} name="options" id="shows">
        <option value="empty">--Please choose an option--</option>
        <option value="list">Mostrar lista</option>
        <option value="form">Mostrar form</option>
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

export default App;
