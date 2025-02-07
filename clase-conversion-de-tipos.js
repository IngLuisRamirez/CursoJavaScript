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
console.log('Hola mundo');
console.log(stringValue + numberValue); // Concatena
console.log(stringValue + booleanValue); //Concatena
console.log(stringValue + stringValue); //Concatena
console.log(numberValue + stringValue); //Concatena
console.log(numberValue + booleanValue); //Suma
console.log(numberValue + numberValue); //suma
console.log(booleanValue + stringValue); // Concatena
console.log(booleanValue + numberValue); // Suma
console.log(booleanValue + booleanValue); // Suma



