const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
/*var pares = [];
var impares = [];

for (const num of number) {
    if (num%2 == 0 ){
        console.log(num%2);
        pares.push(num);
    }else {
        impares.push(num);
    }
}
console.log(`Los números pares son: ${pares}`);
console.log(`Los números impares son: ${impares}`);*/


const par = number.filter(function(num) {
    return num%2 == 0;
})
const impar = number.filter(function(num) {
    return num%2 != 0; 
})

var parrafo = document.createElement('p');
var texto = document.createTextNode(`Los números pares son: ${par}`);
parrafo.appendChild(texto);
document.body.appendChild(parrafo);

var parrafo = document.createElement('p');
var texto = document.createTextNode(`Los números impares son: ${impar}`);
parrafo.appendChild(texto);
document.body.appendChild(parrafo);



console.log(`Los números pares son: ${par}`);
console.log(`Los números impares son: ${impar}`);
