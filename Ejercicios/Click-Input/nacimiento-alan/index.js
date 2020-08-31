var boton = document.getElementById("button");
var input = document.getElementById("input");

function retorno() {
    var valor = input.value;
    alert(valor);
}

boton.addEventListener("click", retorno);