import React,{useState} from "react";
import "./App.css";

function App() {

  const [option, setOption] = useState("vacio");
//sin valor dentro del use state para que no aparezca nada dentro del input
  const [inputValue, setInputValue] = useState("");
  
  const valueList = ['uno','dos','tres','cuatro'];

  const handleChange = (e) => {
    setOption(e.target.value);
  };
//inputsubmit retorna lo que se escribe en el input text
  const handleInputClick = () => {
    alert(inputValue);
  };

  const handleChangeInput = (a) => {
    setInputValue(a.target.value);
  };

  return (
    <div>
 
      <label For="shows">Mostrar</label>
      <select value={option} onChange={handleChange} name="options" >
        <option value="vacio">Elige una opcion</option>
        <option value="lista">Lista</option>
        <option value="form">Formulario</option>
      </select>

      {option === "lista" && (
          <ul>
            List
            {valueList.map((value, index) => {
              return <li key={`${value}-${index}`}>{value}</li>;
            })}
          </ul>
      )}

      {option === "form" && (
        <div>
          <input type="text" value={inputValue} onChange={handleChangeInput} />
          <input type="submit" value="Click me" onClick={handleInputClick} />
        </div>
      )}

    </div>
  );
}
export default App;
