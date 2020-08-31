import React, { useRef } from 'react';
import './App.css';

const App = () => {
  const input = useRef(null);
  var retorno = () => {
    alert(input.current.value);
  }
  return (
    <div className="App">
        <input ref={input} type="text" />
        <button onClick={retorno}>Click me</button> 
    </div>
  );
}

export default App;
