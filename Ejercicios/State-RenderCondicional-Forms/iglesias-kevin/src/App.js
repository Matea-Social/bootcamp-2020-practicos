import React, { useState } from "react";
import "./App.css";

function StateReact() {
  const [option, setOption] = useState("empty");
  const [inputValue, selectInputValues] = useState("");

  const myArray = ["Uno", "Dos", "Tres", "Cuatro"];

  const SetChange = (e) => {
    setOption(e.target.value);
  };

  const SetInputText = (e) => {
    selectInputValues(e.target.value);
  };

  const SetInputClick = () => {
    alert(inputValue);
  };

  return (
    <div className="MainDiv">
      <label htmlFor="shows">Elige una opción</label>
      <select value={option} onChange={SetChange} name="options" id="shows">
        <option value="empty">Ninguno seleccionado</option>
        <option value="list">Lista</option>
        <option value="form">Formulario</option>
      </select>

      {option === "list" && (
        <div>
          <ul>
            Lista
            {myArray.map((value, index) => {
              return <li key={`${value}-${index}`}>{value}</li>;
            })}
          </ul>
        </div>
      )}

      {option === "form" && (
        <div>
          <input type="text" value={inputValue} onChange={SetInputText} />
          <input type="submit" value="Submit" onClick={SetInputClick} />
        </div>
      )}

    </div>
  );
}

export default StateReact;