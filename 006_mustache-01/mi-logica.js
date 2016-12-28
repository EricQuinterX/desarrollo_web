$(document).ready(function(){

  $('button').on('click', mostrarMustache);

});

class Cliente {
  constructor(cod, nom, dni, sal){
    this.codigo = cod;
    this.nombre = nom;
    this.dni = dni;
    this.saldo = sal;
  }
}


var clientes = [
  new Cliente('1254054-9','carlos','2647338',-65),
  new Cliente('419827-1','mario','23091666',100),
  new Cliente('43663456-5','luis','25767494',1500),
  new Cliente('876453-4','marcos','19923398',-600),
  new Cliente('279158-9','lucas','35348368',500),
  new Cliente('988563-7','brian','11755558',-1),
  new Cliente('1112343-0','kevin','11877364',-20),
  new Cliente('323411-9','sebastian','37962197',1000),
  new Cliente('898756-3','pablo','42042550',-65),
  new Cliente('546443-7','matias','92103600',160),
  new Cliente('92930-2','gustavo','36985488',200),
  new Cliente('11111-2','emanuel','45564887',-365)
];

var mostrarMustache = function(){
  var view = '';
  var $root = $('#mustache-table');
  // $('#mustache-table').append($("table")).addClass('table table-default'));
  $root.append(
      $('<table></table>').addClass('table mi-tabla table-striped').append('<thead></thead>').append('<tbody></tbody>')
    );
  $root.find('thead').append('<tr><th>Nro</th><th>Codigo</th><th>Nombre</th><th>DNI</th><th>Saldo</th></tr>');
  for (var i = 0; i < clientes.length; i++) {
    var c = {
      nro: i+1,
      alert: (clientes[i].saldo < 0) ? 'danger' : 'success',
      cliente: clientes[i]
      };
    view += Mustache.render(
      '<tr class="{{alert}}"><td>{{nro}}</td>{{#cliente}}<td>{{codigo}}</td><td>' +
      '{{nombre}}</td><td>{{dni}}</td><td>{{saldo}}</td>{{/cliente}}</tr>',c);
  }
  $root.find('tbody').html(view);
}
