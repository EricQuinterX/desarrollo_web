(function () {'use strict';}());

// si hizo click en un registro de la tabla
var isChecked = false;
// campos del formulario
var formData = {};

var prod_selected= {};
var index_item_productos;

// botones DOM
var btnAgregar, btnEditar, btnEliminar, btnLimpiar;

// cargo el almacenamiento local a la variable.
var storage = localStorage.getItem('productos');
if (storage == null){ storage = localStorage.setItem('productos',JSON.stringify([])); }
var productos = JSON.parse(localStorage.getItem('productos'));


// asigno los botones del DOM a las variables globales
function getButtonDOM(){
  btnAgregar = document.getElementById('btn-agregar');
  btnEditar = document.getElementById('btn-editar');
  btnEliminar = document.getElementById('btn-eliminar');
  btnLimpiar = document.getElementById('btn-limpiar');
}

function getFormDOM(){
  formData = {
    input_code: document.getElementById('form-cod-prod'),
    input_name: document.getElementById('form-name-prod'),
    input_desc: document.getElementById('form-desc-prod'),
    input_date: document.getElementById('form-fec-exp-prod'),
    input_stock: document.getElementById('form-stock-prod')
  };
}


function cargarComponentes() {
  // cargo metadata de los componentes principales del formulario
  getFormDOM();
  // cargo metadata de los botones
  getButtonDOM();
  // cargo los eventos correspondientes
  btnAgregar.addEventListener('click', agregar);
  btnEditar.addEventListener('click', editar);
  btnEliminar.addEventListener('click', eliminar);
  btnLimpiar.addEventListener('click', limpiar_campos);
  // cargo la tabla con los registros guardados
  listar();
}

// creo la clase correspondiente para los productos
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Producto = function Producto(cod, name, desc, fec, stock) {
  _classCallCheck(this, Producto);
  this.cod = cod;
  this.name = name;
  this.desc = desc;
  this.fec_ex = fec;
  this.stock = stock;
};

var getDataRow = function (e) {
  return function () {
    // selecciono la fila y habilito el radio
    e.childNodes[0].getElementsByTagName('input')[0].checked = true;
    isChecked = true;
    // guardo los datos de la fila en una variable
    prod_selected = {
      cod: e.childNodes[1].innerHTML,
      name: e.childNodes[2].innerHTML,
      date: e.childNodes[3].innerHTML,
      stock: e.childNodes[4].innerHTML,
      desc: e.childNodes[5].innerHTML
    };
  };
};

function agregar(){
  // if (errorFormulario) { alert("Hay datos faltantes y/o erroneos"); return; }
  if (faltaDatos()) { alert("Complete los datos faltantes"); return; }
  productos.unshift(crearProducto());
  localStorage.setItem('productos', JSON.stringify(productos));
  limpiar_campos();
  listar();
}

function listar() {
  var t = 0, i;
  var tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
  while (tabla.rows.length > 0) { tabla.deleteRow(tabla.rows.length - 1); }
  for (i in productos){
    var fila = tabla.insertRow(i);
    fila.id = "row-" + i;
    fila.onclick = getDataRow(fila);
    fila.insertCell(0).innerHTML = '<input type="radio" name="productos" class="radio-productos">';
    fila.insertCell(1).innerHTML = productos[i].cod;
    fila.insertCell(2).innerHTML = productos[i].name;
    fila.insertCell(3).innerHTML = productos[i].fec_ex;
    fila.insertCell(4).innerHTML = productos[i].stock;
    fila.insertCell(5).innerHTML = productos[i].desc;
  }
  isChecked = false;
}

function editar(){
  // getButtonDOM();
  if (!isChecked) { alert("Seleccione un registro de la grilla para Editarlo, por favor."); return;}
  btnEditar.removeEventListener('click', editar);
  btnEditar.addEventListener('click', guardar);
  btnEditar.innerHTML = "Guardar";
  btnAgregar.style.cssText = "background-color: #adadad;";
  btnEliminar.style.cssText = "background-color: #adadad;";
  btnLimpiar.style.cssText = "background-color: #adadad;";
  btnAgregar.removeEventListener('click', agregar);
  btnEliminar.removeEventListener('click', eliminar);
  btnLimpiar.removeEventListener('click', limpiar_campos);
  findByCode(prod_selected.cod);
  cargarCamposAEditar(index_item_productos);
}

function eliminar(){
  if (!isChecked) { alert("Debe seleccionar un registro de la grilla, por favor."); return;}
  findByCode(prod_selected.cod);
  productos.splice(index_item_productos,1);
  localStorage.setItem('productos',JSON.stringify(productos));
  listar();
}

function guardar(){
  productos[index_item_productos] = crearProducto();
  localStorage.setItem('productos', JSON.stringify(productos));
  btnEditar.removeEventListener('click', guardar);
  btnEditar.innerHTML = "Editar";
  btnAgregar.style.cssText = "background-color: green;";
  btnEliminar.style.cssText = "background-color: green;";
  btnLimpiar.style.cssText = "background-color: green;";
  limpiar_campos();
  index_item_productos = "";
  prod_selected = {};
  cargarComponentes();
}

function limpiar_campos(){
  formData.input_code.value = "";
  formData.input_name.value = "";
  formData.input_desc.value = "";
  formData.input_date.value = "";
  formData.input_stock.value = "";
}

function crearProducto(){
  return new Producto(
    formData.input_code.value,
    formData.input_name.value,
    formData.input_desc.value,
    formData.input_date.value,
    formData.input_stock.value
  );
}

function faltaDatos () {
  return (
    formData.input_code.value == "" ||
    formData.input_name.value == "" ||
    formData.input_desc.value == "" ||
    formData.input_date.value == "" ||
    formData.input_stock.value == ""
  );
}

function findByCode(code){
  var i;
  for (i in productos) {
    if (productos[i].cod == code){
      index_item_productos = i;
      return index_item_productos;
    }
  }
}

function cargarCamposAEditar(i){
  formData.input_code.value = productos[i].cod;
  formData.input_name.value = productos[i].name;
  formData.input_desc.value = productos[i].desc;
  formData.input_date.value = productos[i].fec_ex;
  formData.input_stock.value = productos[i].stock;
}

var errorFormulario = (function (code, name, desc, date, stock){
  var regex_code = /[0-9]/;
  if (regex_code.test(code)){
    return true;
  }
})(formData.input_code.value, formData.input_name.value, formData.input_desc.value, formData.input_date.value, formData.input_stock.value);
