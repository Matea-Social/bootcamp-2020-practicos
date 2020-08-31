import React from "react";
import "./App.css";

const App = () => {
  const Main = () => {
    const [state, setState] = React.useState("");
    const [list, setList] = React.useState("")

    return (
      <div>
        <select onChange={() => setState('')}>
          <option>Modo de visualizar</option>
          <option value="lista" onClick={() => setList("")}>Modo lista</option>
          <option value="form">Modo formulario</option>
        </select>
        {state}
        {list}
      </div>
    );
  };

  return <div className="App">{Main()}</div>;
};

export default App;
