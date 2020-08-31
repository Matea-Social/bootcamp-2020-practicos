import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [valorDelInput, setValorDelInput] = useState("");
  const [valorDelSelect, setValorDelSelect] = useState("");

  const mostrarAlert = (e) => {
    alert(valorDelInput);
  }

  const mostrarTextoIngresado = (e) => {
    setValorDelInput(e.target.value);
  }

  const clickSelect = (e) => {
    setValorDelSelect(e.target.value);
  };

  return (
    <div className="App">
      <select onClick={clickSelect}>
        <option>--Seleccione una opcion--</option>
        <option value="list">Mostrar Lista</option>
        <option value="form">Mostrar Form</option>
      </select>
      {valorDelSelect === "list" && (
        <div>
          <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            <li>Cuatro</li>
          </ul>
        </div>
      )}
      {valorDelSelect === "form" && (
        <div>
          <button onClick={mostrarAlert}>Mostar alert</button>
          <input 
          type="text"
          onChange={mostrarTextoIngresado}
          value={valorDelInput}/>
        </div>
      )}
    </div>
  );
}

export default App;
