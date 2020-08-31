(function(){
  var displayText = function(){
    var text = document.getElementById('text');
    alert(text.value);
  }

  var button = document.getElementById('button');
  button.addEventListener('click', displayText);
}())

