var element = document.getElementsByTagName('a');
console.log(`La página contiene ${element.length} enlaces a webs`);

console.log(`La dirección a la que enlaza el penúltimo enlace es ${element[element.length-2]}`);
const enlace = element[element.length-2]

element = document.getElementsByTagName('p');

var refe = element[2].getElementsByTagName('a');

console.log(`El tercer párrafo contiene un total de ${refe.length} enlaces.`);

var parrafo = document.createElement('p');
var texto = document.createTextNode(`La página contiene ${element.length} enlaces a webs`);
parrafo.appendChild(texto);
document.body.appendChild(parrafo);

var parrafo = document.createElement('p');
var texto = document.createTextNode(`La dirección a la que enlaza el penúltimo enlace es ${enlace}`);
parrafo.appendChild(texto);
document.body.appendChild(parrafo);

var parrafo = document.createElement('p');
var texto = document.createTextNode(`El tercer párrafo contiene un total de ${refe.length} enlaces.`);
parrafo.appendChild(texto);
document.body.appendChild(parrafo);