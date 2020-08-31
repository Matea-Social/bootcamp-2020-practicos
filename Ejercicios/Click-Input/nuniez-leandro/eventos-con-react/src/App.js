import React, { useState } from 'react';

import './App.css';

function App() {
  const [valor, setValor] = useState("");

  const setState = (e) => {
    setValor(e.target.value);
  }
  
  const printValue = () => {
    alert(valor);
  }

  return (
    <div className="App">
      <div>
        <label>
          <input type="text" value={valor} onChange={setState}/>
        </label>
        <input type="submit" value="Submit" onClick={printValue} />
      </div>
    </div>
  );
}

export default App;
