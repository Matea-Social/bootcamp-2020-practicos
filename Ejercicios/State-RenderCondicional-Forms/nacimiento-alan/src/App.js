import React from "react";
import Lista from "./component/list";
import "./App.css";

const App = () => {
  const Main = () => {
    const [state, setState] = React.useState("");
    const [list, setList] = React.useState("")

    return (
      <div>
        <select onChange={() => setState("")}>
          <option>Elegir</option>
          <option value="lista" onClick={() => setList("")}>Mostrar lista</option>
          <option value="form">Mostrar form</option>
        </select>
        {state}
        {list}
      </div>
    );
  };

  return <div className="App">{Main()}</div>;
};

export default App;
