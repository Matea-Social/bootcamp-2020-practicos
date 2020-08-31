import React, { useState } from "react";
import "./App.css";

function App() {
  const list = ["Uno", "Dos", "Tres", "Cuatro"];

  const [opcion, setOption] = useState("");
  const [valor, setValor] = useState("");

  const valueOption = (e) => {
    setOption(e.target.value);
  };

  const textInput = (e) => {
    setValor(e.target.value);
  };

  const printValue = () => {
    alert(valor);
  };

  return (
    <div className="App">
      <label>
        Selecciona una opcion:
        <select value={opcion} onChange={valueOption}>
          <option>Defecto</option>
          <option value="lista">Mostrar Lista</option>
          <option value="form">Mostrar Form</option>
        </select>
      </label>
      {opcion === "lista" && (
        <div>
          <ul>
            {list.map((element, index) => {
              return <li key={`${element}-${index}`}>{element}</li>;
            })}
          </ul>
        </div>
      )}
      {opcion === "form" && (
        <div>
          <label>
            <input type="text" value={valor} onChange={textInput} />
          </label>
          <input type="submit" value="Submit" onClick={printValue} />
        </div>
      )}
    </div>
  );
}

export default App;
