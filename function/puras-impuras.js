// Funciones puras

// side effects

//1. modificar variables globales

//2. Modificar parámetros

//3. solicitudes HTTP

//3. Imprimir mensajes en pantalla o consola

//5. Manipulacion del DOM

//6.Obtener la hora Actual


function sum(num1, num2) {
    return a + b
}


function sum(num1, num2) {
   console.log('A:', num1);
    return num1 + num2
}


let total = 0

function sumWithSideEffect(a) {
    total += a 
    return total
}

function square(x) {
    return x * x
}

function addTen (y){
    return y + 10
}

const number = 5
const finalResut = addTen(square(number))
console.log(finalResut);