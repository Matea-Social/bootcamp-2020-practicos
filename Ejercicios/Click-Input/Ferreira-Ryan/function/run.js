var button = document.getElementById("btn");
    
// AÑADO EVENTOS

button.addEventListener("click",saludo);

// Function

function saludo(){
    var txtInput = document.getElementById("input").value;
    alert(txtInput);
}


