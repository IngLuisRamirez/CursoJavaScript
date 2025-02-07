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


const sumWithBoolean = '3' + true
console.log(sumWithBoolean);


const sumWithNumber = 2 + true
console.log(sumWithNumber);


const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log(stringValue + stringValue);
console.log(numberValue + stringValue);
console.log(numberValue + booleanValue);
console.log(numberValue + numberValue);
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);



