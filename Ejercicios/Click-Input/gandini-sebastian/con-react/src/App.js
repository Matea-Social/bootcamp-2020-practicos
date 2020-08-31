import React from 'react';
import logo from './logo.svg';
import './App.css';

function Button() {
  function pulsarBoton(e) {
    e.preventDefault();
    alert('Gracias por pulsar el boton.');
  }

  return (
    <button onClick={pulsarBoton}>Clickeame daleee</button>
  );
}

export default Button;
