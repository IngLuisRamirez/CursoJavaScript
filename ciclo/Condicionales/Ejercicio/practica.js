// let menu
// let bebida
// menu = prompt("Tipo de menu: ¿Carne, pescado o verduras?")
// switch(menu){
//     case "carne":
//         bebida = "¿Desea beber vino tinto?"
//     break;
//     case "pescado":
//         bebida = "¡Desea beber vino blanco?"
//     break;
//     case "verduras":
//         bebida = "¿Desea Agua?"
//     break;
//     default:
//         bebida = "Elija: carne, pescado o verduras"
//     break;
// }

// alert(bebida)


/*
En ste caso, también usando el perador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que estperar para entrar.

Si le digo que tengo 19 años me dirá "Puedes entrar", si le digo que tengo 14 años me dirá "Espera 4 años"
*/

// let edad
// let mensaje

// edad = prompt("Ingrese la edad:")
// if (edad >= 18) {
//     mensaje = "Puedes entrar"
// } else {
//     mensaje =`Espera ${18 - edad} años`
// }
// alert(mensaje)

/*
El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.
Si el usuario entra 2 y luego 4, debe decir que el mayor es el segundo número.
*/

// let num1
// let num2
// let mensaje
// alert("Digite dos numero para ver cual es mayor o menor")
// num1 = parseInt(prompt("Ingrese el primer numero"))
// num2 = parseInt(prompt("Ingrse el segundo numero"))

// if (num1 > num2) {
//     mensaje = `El número ${num1} es mayor que ${num2}`;
// } else if(num1 < num2){
//     mensaje = `El número ${num1} es menor que ${num2}`
// }else {
//     mensaje = `El número ${num1} y ${num2} son iguales`
// }
// alert(mensaje)

/*
El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensja ede acierto en caso contrario dirá que se produjo un error.
Por ejemplo si teclea 3 y 9 el resutlado es Correcto. Si tecleo 3 8, el resultado será Error.
*/
// let num1
// let num2
// let numCuadrado
// let mensaje
// alert("Este es un verificador al cuadrado")
// num1 = parseInt(prompt("Ingrese el número"))
// num2 = parseInt(prompt("Ingrese el cuadrado de ese número"))
// numCuadrado = Math.pow(num1, 2)

// if(num2 === numCuadrado){
//     mensaje = `El resultado es correcto ${numCuadrado}`
// }else{
//     mensaje = `Incorrecto, el resultado correcto era: ${numCuadrado}`
// }
// alert(mensaje)

/*
En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

Tecleo que pago 2 créditos, el escript me dirá que puedo acceder a las salas de consola y juegos 2D.
*/

let credito
let acceso = "Salas: "
credito = parseInt(prompt("Ingrese de 1 al 4 créditos, a cuantas salas de videojuegos quiere entrar"))

switch (credito) {
    case 4:
        acceso += "Realidad Virtual,  "
    case 3:
        acceso += "Juegos 3D, "
    case 2:
        acceso += "Juegos 2D, " 
    case 1: 
        acceso += "Consolas"
    break;
    default:
        acceso += "Ninguna"
}
alert(acceso)


