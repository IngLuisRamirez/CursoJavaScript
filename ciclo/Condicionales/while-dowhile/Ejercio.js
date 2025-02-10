/*
    Realiza un script que le pida al usuario que teclee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes

    El usuario teclea b, el programa vuelve a pedirme que teclee una letra
*/

// let tecla = '';

// do{
//     tecla = prompt("Teclear la letra mágica")
// }while(tecla != 'A')
//     alert("Correcto.....")

/*
Este script usará un bucle do while para determinar si un número es primo o no. El numero tecleado deberá estar entre 0 y 100. Si es primo lo mostrará en una ventana alert.

Recuerda que un número primo es el que es divisible por 1 y por sí mismo: 7 es primo (solo es deivisible entre 1 y 7), 8 no es primo (puede dividirse entre 1, 2, 4 y 8)).

Si escribo 0 o 100 el programa me seguirá pidiendo un número
*/

// let numero
// let divisor = 1
// let resto
// do{
//     numero = parseInt(prompt("Ingrese un número para ver si es primo"))    
// }while(numero <= 0 && numero <= 100)

// do{
//     divisor++
//     resto = numero%divisor
// }while(resto != 0 && divisor < numero)
//     if(resto == 0 && divisor != numero){
//         alert(`${numero} No es primo`)
//     }else{
//         alert(`${numero} Es primo`)
//     }



/*
En este script vas a crear un menu con tres opciones: escribir, leer, salir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. El programa vuelve a mostrar el menu y se repite el proceso. El script acabará cuando se pulse la opción de salir.
El menu tiene 3 opciones, elijo la opción 2, respuesta "has elegido leer".
*/

// let menu = 0

// do{
//     menu = parseInt(prompt("1. Escribir \n 2. Leer \n 3. Salir"))

//     if(menu === 1){
//         alert("Escribiendo.......")
//     }
//     else if(menu === 2){
//         alert("Has elegido leer")
//     }else if(menu === 3){
//         alert("Fin del programa")
//     }else{
//         alert("Debes elegir una de las opciones")
//     }
    
// }while(menu != 3)


/*
En este script se le pide al usuario que teclee dos números, el script mostrará la suma y pedirá al usuario si queire repetir. Si teclea S repite y si teclea N el programa sale. No debe aceptar otras teclas

Por ejemplo si tecleo 3 despues 9 me dirá que la suma es 12, y luego me preguntará si quiero repetir.
*/

let num1
let num2
let repetir

do{
    num1 = parseInt(prompt("Ingrese el primer numero"))
    num2 = parseInt(prompt("Ingrese el segundo numero"))
    alert(`Las suma de los dos numero ${num1 + num2}`)
    do{
        repetir = prompt("Quieres repetir si 'S' o no 'N'")

    }while(repetir != 'S' && repetir != 'N')
}while(repetir === 'S')