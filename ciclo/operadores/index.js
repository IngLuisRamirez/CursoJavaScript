/*
Operadores de comparación

*/

const a = 10;
const b = 20
const c = '10'
console.log(a == b); // No son iguales : fasle, porque 10 no es igual a 20
console.log(a == c); // si son iguales : true, porque a pasar a ser string 
console.log(a === c); // No son exactamentes iguales: false, porque son distinto tipo de datos 
console.log(a != b); // Si son diferentes: true, porque 10 es menor que 20
console.log(a !== c);// Si son completamen diferentes: true, Completamente diferentes son distintos tipos de datos
console.log(a > b); // a es mayor que b: false
console.log(a < b); // a es menor que b: true 
console.log(a >= b); // a no es mayor ni igual a b:false
console.log(a <= c); // a si menor/igual que b: true