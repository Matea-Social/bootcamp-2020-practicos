var input = document.getElementById("input");
var elementBtn = document.getElementById("button");

const retornarValor = () => {
    var valor = input.value;
    alert(valor);
}

elementBtn.addEventListener("click", retornarValor);