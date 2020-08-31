

var ejercicio = function(){
var button = document.getElementById("button");
var input = document.getElementById("campoDeTexto");

button.addEventListener('click', function(){
    alert(input.value);
});
}
ejercicio();