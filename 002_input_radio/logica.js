function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = document.getElementsByName('accion');
    // form.elements[name];

    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

function calcular(){
  var operacion = getRadioVal(document.getElementById('operaciones', 'accion'));
  var v1 = document.getElementById("k1").value;
  var v2 = document.getElementById("k2").value;
  var resu;
  switch (operacion) {
    case "1":
      resu = parseInt(v1) + parseInt(v2);
      break;
    case '2':
      resu = parseInt(v1) - parseInt(v2);
      break;
    case '3':
      resu = parseInt(v1) * parseInt(v2);
      break;
    case '4':
      resu = parseInt(v1) / parseInt(v2);
      break;
    case '5':
      resu = v1 + v2;
      break;
    case '6':
      resu = v1 == v2;
      break;
    case '7':
      resu = v1 > v2;
      break;
    case '8':
      resu = v1 < v2;
      break;
    default:
      resu = "Nada";
  }
  alert(resu);
}



function xxx(){
  var operacion = document.getElementById('accion').value;
  var value_1 = document.getElementById("k1").value;
  var value_2 = document.getElementById("k2").value;
  alert(operacion);
  var resu;
  switch (operacion) {
    case 1:
      resu = value_1 + value_2;
      break;
    case '2':
      resu = value_1 - value_2;
      break;
    case '3':
      resu = value_1 * value_2;
      break;
    case '4':
      resu = value_1 / value_2;
      break;
    case '5':
      resu = value_1 == value_2;
      break;
    case '6':
      resu = value_1 + value_2;
      break;
    case '7':
      resu = value_1 > value_2;
      break;
    case '8':
      resu = value_1 < value_2;
      break;
    default:
      resu = "Nada";
  }
  alert(resu);
}
