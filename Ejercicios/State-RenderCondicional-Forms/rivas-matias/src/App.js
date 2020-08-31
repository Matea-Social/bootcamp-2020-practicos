import React, {useState} from 'react';
import './App.css';


function App() {
  const [option, setOption] = useState('empty');
  const [inputValue, setInputValue] = useState('');

  const numberList = ['Uno', 'Dos', 'Tres', 'Cuatro'];

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    alert(inputValue);
  };

  const lista = () => {
    if(option === 'list'){
      return(
        <div>
          <ul>
            List
            {numberList.map((value, index) => {
              return <li key = {'${value} - ${index}'}>{value}</li>
            })}
          </ul>
        </div>
      )
    }else if(option === 'form'){
      return(
        <div>
          <input type = 'text' value = {inputValue} onChange = {handleChangeInput} />
          <input type = 'submit' value = 'Submit' onClick = {handleInputClick} />
        </div>
      )
    }
  };

  return(
    <div>
      <div>
        <select value = {option} onChange = {handleChange} name = 'options' id = 'shows'>
          <option value = 'empty'>-- Elija una opción --</option>
          <option value = 'list'>1. Mostrar Lista</option>
          <option value = 'form'>2. Mostrar Form</option>
        </select>
      </div>
      
      {lista()}

    </div>
  )
  
}


export default App;
