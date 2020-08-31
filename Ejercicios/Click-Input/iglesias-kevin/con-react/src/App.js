import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const inputVal = React.useRef(null)
  return(
    <div className="App">
      <input 
      type="text"
      id="txt"
      placeholder="Coloca texto aquí"
      ref={inputVal}
      />
      <input
      type="button"
      value="Enseñar mensaje"
      id="button"
      onClick={()=> alert(inputVal.current.value)}
      />
    </div>
  );
}


export default App;
