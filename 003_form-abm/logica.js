"use strict";

var Cliente = function(n1, s1){
  nombre: n1,
  apellido: s1,
  esIgualA: function(v1, v2){
    return nombre == v1 && apellido == v2;
  }
}

// almacenamiento local
var storage = localStorage.getItem('clientes');
var clientes;
if (storage == null) {
  localStorage.setItem('clientes',JSON.stringify([]))
  clientes = []
} else {
  clientes = JSON.parse(storage);
}


function Agregar(){
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  // alert(tabla.getElementsByTagName('tbody')[0].rows.length);
  if (nombre == "" || apellido == "") {
    alert("Los campos deben estar completos!!!");
  } else {
    clientes.push(new Cliente(nombre, apellido)); // creo nuevo cliente.
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }
  Listar();
}

function Editar(){

}

function Eliminar(){
  var items = document.getElementById('tabla').tBodies[0].rows;
  var eliminado = false;
  var index_cliente = -1;
  for (var i = 0; i < items.length; i++) {
    var radio = items[i].cells[0].getElementsByTagName('input')[0];
    if (radio.checked) {
      eliminado = true;
      for (var j = 0; j < clientes.length; j++) {
        var name = items[i].cells[1].innerHTML;
        var surname = items[i].cells[2].innerHTML;
        // if (clientes[j].esIgualA (name, surname)) {
        if (clientes[j].esIgualA(name, surname)) {
          index_cliente = j;
        }
      }
      if (index_cliente > 0) {
        clientes.splice(index_cliente,1);
        localStorage.setItem('clientes',JSON.stringify(clientes));
      }
    }
  }
  var msg = eliminado ? "Se elimino tal cliente" : "No se elimino nada";
  Listar();
  alert(msg);
}

function Listar(){
  var tabla_body = document.getElementById('tabla').getElementsByTagName('tbody')[0];
  while (tabla_body.rows.length > 0) {
    tabla_body.deleteRow(tabla_body.rows.length - 1);
  }
  clientes = JSON.parse(localStorage.getItem('clientes'));
  for (var i = 0; i < clientes.length; i++) {
    var fila = tabla_body.insertRow(i);
    var col1 = fila.insertCell(0);
    var col2 = fila.insertCell(1);
    var col3 = fila.insertCell(2);
    col1.innerHTML = '<input type="radio" name="selec-radio">';
    col2.innerHTML = clientes[i].nombre;
    col3.innerHTML = clientes[i].apellido;
  }
}
