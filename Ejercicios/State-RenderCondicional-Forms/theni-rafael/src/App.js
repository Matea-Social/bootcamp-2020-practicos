import React from 'react';
import "./App.css";
import Lista from "./components/lista";

const App= () => {
  const Main= () => {
    const [state, setState] = React.useState("");
    const [list, setList] = React.useState("");

    return (
      <div>
        <select onChange={() => setState("")}>
          <option>---</option>
          <option value="listaarr" onClick={() => setList("")}>Listar</option>
          <option value="form">Form</option>
        </select>
        {state}
        {list}
      </div>
    );
  };

  return <div className="App">{Main()}</div>;
};

export default App;

//state component leer
//hooks
//ref (useRef)