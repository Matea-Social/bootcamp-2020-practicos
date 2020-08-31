import React, {useState} from "react";
import Form from "./Pages/Form";
import List from "./Pages/List";

export default function App() {
  const [display,
    setDisplay] = useState("Form");
  function handlerChangeDisplay(event) {
    setDisplay(event.target.value);
  }
  return (
    <div className="App">
      <form>
        <label>
          Mostrar:
          <select value={display} onChange={handlerChangeDisplay}>
            <option value="Form">Formulario</option>
            <option value="List">Lista</option>
          </select>
        </label>
      </form>
      {display === "List" && <List/>}
      {display === "Form" && <Form></Form>}
    </div>
  );
}
