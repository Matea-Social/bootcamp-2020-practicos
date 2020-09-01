import React from 'react';
import './App.css';

function App() {
  const inputEl = React.useRef(null);
  return (
    <div className="App">
      <input type="text" id="txt" ref={inputEl}></input>
      <input type="button" value="mostrar alert" id="btn" onClick={() => alert(inputEl.current.value)}></input>
    </div>
  );
}

export default App;

//state component leer
//hooks
//ref (useRef)