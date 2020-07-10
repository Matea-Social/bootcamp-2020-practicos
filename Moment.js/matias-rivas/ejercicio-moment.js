/*
// Ejercicio 1 - sin moment:
(function (){
  var output = document.getElementById('ejercicio1'),
      d = new Date();
  var year = d.getFullYear(),
      month = d.getMonth()+1,
      day = d.getDay();
  output.innerHTML = year + '/' + month + '/' + day;
})();
*/

/*
// Ejercicio 1 - con moment:
(function (){
  var nowMoment = moment();
  var output = document.getElementById('ejercicio1');
  output.innerHTML = nowMoment.format('YYYY-M-D'); 
})();
*/

/*
//Ejercicio 2 - sin moment:
(function (){
  var day = 29,
      month = 02,
      year = 2020,
      output = document.getElementById('ejercicio2');
  if(day < 0 || month < 1 || month > 12){
    output.innerHTML = 'Fecha inválida';
    return false;
  }
  switch(true){
    case month == 01:
    case month == 03:
    case month == 05:
    case month == 07:
    case month == 08:
    case month == 10:
    case month == 12:
      if(day < 32){
        output.innerHTML = day + '/' + month + '/' + year;
      }else{
        output.innerHTML = 'Fecha inválida';
        return false;
      }
    break;
    case month == 04:
    case month == 06:  
    case month == 09: 
    case month == 11:
      if(day < 31){
        output.innerHTML = day + '/' + month + '/' + year;
      }else{
        output.innerHTML = 'Fecha inválida';
        return false;
      }
    break;
    case month == 02:
      if(year % 4 == 0){
        if(day < 30){
          output.innerHTML = day + '/' + month + '/' + year;
      }else{
        output.innerHTML = 'Fecha inválida';
        return false;
        }
      }else{
        if(day < 29){
          output.innerHTML = day + '/' + month + '/' + year;
        }else{
          output.innerHTML = 'Fecha inválida';
          return false;
          }
        }
    break;
  }
})();
*/

/*
//Ejercicio 2 - con moment:
(function(){
  var fecha = '29-02-2021'
      output = document.getElementById('ejercicio2');
  var validar = moment(fecha, 'DD-MM-YYYY');
  if(validar.isValid() == true){
    output.innerHTML = fecha;
  }else{
    output.innerHTML = 'Fecha inválida';
  }
})();
*/