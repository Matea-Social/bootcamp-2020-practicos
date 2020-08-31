import React, {useState} from "react";

function Form() {
  const [msg,
    setMsg] = useState("Escriba aqui su mensaje");
  function handleChangeMsg(event) {
    setMsg(event.target.value);
  }
  function handleClickShowMsg() {
    alert(msg);
  }
  return (
    <div>
      <form>
        <textarea onChange={handleChangeMsg}>{msg}</textarea>
      </form>
      <button onClick={handleClickShowMsg}>Mostrar Mensaje</button>
    </div>
  );
}
export default Form;
