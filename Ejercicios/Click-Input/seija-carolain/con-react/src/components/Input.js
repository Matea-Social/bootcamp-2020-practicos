import React from 'react';
import '../components/Input.css';

//la primera funcion "evento" engloba la funcion alerta que es la que uso  para onclick.
function Evento() {
  function alerta() {
    //var que identifica el input usando la ID
    var textoInput = document.getElementById("texto");
    //El alert me mostrara el valor que hay dentro del input
    alert(textoInput.value);
  }
  return (
    <div>
      <input
      id="texto"
      type="text"
      placeholder="Escribe tu nombre">
      </input>
      <button
      onClick={alerta}>Click
      </button>
    </div>
  );
}

export default Evento;
