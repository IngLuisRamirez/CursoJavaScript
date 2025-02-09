/*
Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de alojamiento, alimentación y entretenimiento.

Solicita al usuario que ingrese los gastos estimados para cada categoría.
Calcula el coste total sumando todos los gastos.
Muestra el coste total al usuario.
Ejemplo de entrada: Gastos de alojamiento: 200€, Gastos de alimentación: 150€, Gastos de entretenimiento: 100€.
Salida esperada: El coste total del viaje es 450€.
*/

// let alojamiento
// let alimentacion
// let entretenimiento
// let costoTotal

// alojamiento = parseInt(prompt("Ingrese el costo de alojamiento"))
// alimentacion = parseInt(prompt("Ingrese el costo de Alimentación"))
// entretenimiento = parseInt(prompt("Ingrese el costo de Entrenimiento"))

// costoTotal = alojamiento + alimentacion + entretenimiento

// alert(`El costo total del viaje es: ${costoTotal.toFixed(2)}€`)


/*
Crea un programa que convierta la edad de un perro a años humanos.

Solicita al usuario que indique la edad de su perro en años.
Calcula la edad del perro en años humanos multiplicando la edad del perro por 7.
Muestra la edad del perro en años humanos al usuario.
Ejemplo de entrada: Edad del perro: 5 años.
Salida esperada: La edad del perro en años humanos es 35 años.
*/


// let edadPerro
// let edadHumano
// edadPerro = parseInt(prompt("Ingrese la edad del perro"))

// edadHumano = edadPerro * 7

// alert(`La edad de tu perro en años humanos es: ${edadHumano} años`)
/*
Crea un programa que calcule el IMC de una persona a partir de su peso y altura.

Solicita al usuario que inserte su peso en kilogramos y su altura en metros.
Calcula el IMC dividiendo el peso entre la altura al cuadrado.
Muestra el IMC calculado al usuario y su clasificación según la tabla de IMC.
Ejemplo de entrada: Peso: 70kg, Altura: 1.75m.
Salida esperada: IMC: 22.86, Clasificación: Normal.
*/

// let peso
// let altura
// let imc
// let msg

// peso = parseFloat(prompt("Ingrese su peso"))
// altura = parseFloat(prompt("Ingrese su altura"))
// imc = peso / (altura * altura)
// alert(`Su IMC es: ${imc.toFixed(2)}`)

// if(imc < 18.5){
//     msg = "Calificación: Bajo"
// }else if(imc >= 18.5 && imc < 25){
//     msg = "Calificación: Normal"
// }else if(imc >= 25 && imc < 30){
//     msg = "Calificación: Sobre peso"
// }else{
//     msg = "Obesidad"
// }
// alert(msg)


/*
Crea un programa que calcule el precio final de un producto después de aplicarle un descuento.

Solicita al usuario que inserte el precio original del producto.
Solicita al usuario que inserte el porcentaje de descuento a aplicar (por ejemplo, 10 para un descuento del 10%).
Utiliza una función para calcular el precio final después de aplicar el descuento.
Muestra el precio final al usuario.
Ejemplo de entrada:

Inserta el precio original del producto: 50
Inserta el porcentaje de descuento a aplicar: 20

Salida esperada: El precio final del producto después de aplicar un descuento del 20% es: 40 euros.

*/

// Definición de la función para calcular el precio final con descuento

// function calcularPrecioFinal(precioOriginal, descuento){

//     // Calcula la cantidad con descuento
//     let cantidadDescuento = (precioOriginal * descuento) / 100

//     // calcula el precio final restando el descueno al precio original
//     let precioFinal = precioOriginal - cantidadDescuento

//     return precioFinal.toFixed(2)
// }
//  // solicita al usuario el precio original del producto
// let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto"))
// // Solicita al usuario el porcentaje de descuento
// let porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento a aplicar"))
// //Calcula el precio final llamando la funcion de calcular el precio final ya con el descuento aplicado 
// let precioFinal = calcularPrecioFinal(precioOriginal, porcentaje)

// alert(`El precio final del producto despues de aplicar un descuento del ${porcentaje}% es: ${precioFinal} euros.`)

/*
Escribe un programa que solicite al usuario dos números y luego muestre todos los números primos que hay entre esos dos números, incluyendo los extremos.

Solicita al usuario que ingrese dos números enteros.
Encuentra todos los números primos en el rango entre los dos números insertados, incluyendo esos dos números.
Ejemplo de entrada: Inserta el primer número: 10, Inserta el segundo número: 20.
Salida esperada: Los números primos entre 10 y 20 son: 11, 13, 17, 19.
*/