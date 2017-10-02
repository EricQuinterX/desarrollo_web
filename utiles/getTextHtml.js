function getTextHtml(td, f){
	var dato = '', pi, pf;
  if (f) { return f(td); }
  while ((pi = td.indexOf('>')) !== -1){
  	if ((pf = td.substring(pi+1).indexOf('<')) === -1) { break; } else { pf += pi + 1; }
    dato += td.substring(pi+1, pf);
    td = td.substring(pf+1);
  }
  return (!pi || !pf) ? td : dato;
}

// funcion auxiliar ejemplo
function getClassHTML(td){
	var str = td.replace(/ /g, '');
  var pi = str.indexOf('class="') + 'class="'.length;
  var pf = str.substring(pi+1).indexOf('"') + pi + 1;
	return str.substring(pi, pf);
}

document.getElementById('resultado').innerHTML = getTextHtml('<font> La <strong>CASA</strong> es <b>grande</b></font>'); // -> La CASA es grande
document.getElementById('resultado').innerHTML = getTextHtml('<img class="INACTIVO" src="asdasdsadaasdsadsad.png">', getClassHTML); // -> INACTIVO
