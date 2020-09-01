var button=document.getElementById("btn");
var texto=document.getElementById("input");
button.addEventListener("click", muestroAlert);

function muestroAlert(){
    alert(texto.value);
}