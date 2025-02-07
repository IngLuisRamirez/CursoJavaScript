// Explicit tye casting
const string = '42'
const integer = parseInt(string)
console.log(integer);
console.log(typeof integer);

const stringFloat = '3.14'
const float = parseFloat(stringFloat)
console.log(float);
console.log(typeof float);


const binary = '1010'
const decimal = parseInt(binary,2)
console.log(decimal);
console.log(typeof decimal);

// Implicit tye casting

const suma = '5' + 3
console.log(suma);