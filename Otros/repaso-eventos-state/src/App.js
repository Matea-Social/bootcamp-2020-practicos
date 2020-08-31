import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [mostrarP, setMostrarP] = useState(true);
  const [valorDelSelect, setValorDelSelect] = useState("");

  const mostrarAlert = (evento) => {
    alert(valorDelInput);
  };

  const mostrarTextoIngresado = (evento) => {
    setValorDelInput(evento.target.value);
  };

  const clickEnBotonOcultarP = () => {
    setMostrarP(false);
  };

  const clickSelect = (evento) => {
    setValorDelSelect(evento.target.value);
  };

  return (
    <div>
      <select onChange={clickSelect}>
        <option value="list">Mostrar Lista</option>
        <option value="form">Mostrar Form</option>
      </select>
      {valorDelSelect === "list" && (
        <ul>
          <li>Uno</li>
          <li>Dos</li>
          <li>Tres</li>
          <li>Cuatro</li>
        </ul>
      )}
      {valorDelSelect === "form" && (
        <div>
          <button onClick={mostrarAlert}>Mostrar alert</button>
          <input
            type="text"
            onChange={mostrarTextoIngresado}
            value={valorDelInput}
          />
        </div>
      )}
    </div>
  );
};

export default App;
