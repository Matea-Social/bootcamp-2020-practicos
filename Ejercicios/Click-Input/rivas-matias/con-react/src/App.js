import React from 'react';
import './App.css';

function App() {
  function alertButton(){
    var text = document.getElementById('text')
    alert(text.value);
  }
  return (
    <div>
      <input id = 'text' type = 'text'></input>
      <button onClick = {alertButton} id = 'boton'>Ingresar</button>
    </div>
  );
}

export default App;
