const numberArray = [1, 2, 3, 4, 5]
let suma = 0


for(i = 0; i < numberArray.length; i++){
    suma += numberArray[i] 
}
console.log(suma);


/*
En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6

Si tecleo el número 4 me deberá decir que el día de la semana es jueves
*/

const diaSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes', 'Sabado','Domingo']

const dia = dia => {
    alert(`El dia es: ${diaSemana[dia - 1]}`)
}

let diaSemanaPorteclado = parseInt(prompt("Ingrese el dia de la semana del 1 al 7"))
dia(diaSemanaPorteclado)