var msg = require('./messages');
var style = require('./style/estiloGlobal.css');


import Button from './button';
import Image from './imagen';
import * as math from './mathStuff';

import $ from 'jquery';

//app.innerHTML = '<p>Hola Mundo!!</p>';

//var msgBabel = () => (`<p>${msg.key} = ${msg.value}</p>`);

//var msgBabel = () => (`
//    <form action="/" style="border: 2px solid green; padding:12px; width:400px;" method="GET">
//        ${msg.campo1} <input type="text" placeholder="ej. Raul"/>
//        <br><br>
//        ${msg.campo2} <input type="text" placeholder="ej. Quiroga"/>
//        <br><br>
//        ${msg.campo3} <input type="text" placeholder="ej. 99999999"/>
//        <br><br>
//        ${msg.campo4} <input type="text" placeholder="ej. 49555555"/>
//    </form>
//    <br>
//    ${Button.html}
//    <hr>
//    ${Image.webpack}
//    ${Image.file_loader}
//    <hr>
//`);

//var msgBabel = () => (`
//    <div class=${style.box}>
//    <p>Suma: ${math.suma(2,5)}<p>
//    <p>Resta: ${math.diff(9,5)}<p>
//    <p>Division: ${math.divi(58,25)}<p>
//    DEV: ${DEVELOPMENT.toString()} <br>
//    PROD: ${PRODUCTION.toString()} <br>
//    </div>
//`);

//var msgBabel = Button.html();

//app.innerHTML = '<p>' + msg.key + ' => ' + msg.value + '</p>';

//app.innerHTML = msgBabel();

var app = document.getElementById('app');

app.innerHTML = `
    <div id="menu">
        <button id="loadPage1">Load Page 1</button>
        <button id="loadPage2">Load Page 2</button>
    </div>
    <div id="content">
        <h1>Home</h1>
    </div>
`;

document.getElementById('loadPage1').addEventListener('click', () => {
    System.import('./page1').then(pageMoule => {
        document.getElementById('content').innerHTML = pageMoule.default;
    })
});

document.getElementById('loadPage2').addEventListener('click', () => {
    System.import('./page2').then(pageMoule => {
        document.getElementById('content').innerHTML = pageMoule.default;
    })
});

//Button.action();

//$('#app').css('background-color', 'yellow');

if (DEVELOPMENT){
    if (module.hot) {
        module.hot.accept();
    }
}