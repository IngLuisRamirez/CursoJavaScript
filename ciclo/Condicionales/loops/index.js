// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
// // }

// let list = ["Eat", "sleep", "code" , "repeat"];

// for(let i = 0; i < list.length; i++){
//     console.log(list[i]);
// }

/*
Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  
Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  
*/

// let contar
// let max
// let msj
// max = parseInt(prompt("Teclear un número que quieres contar"))
// for (let contar = 0; contar <= max; contar++) {
//         msj += contar + ", "
// }

// alert(msj)

/*
e trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.

Si tecle o número 5 deberá mostarar 5,4,3,2,1.
*/
// let contar
// let max
// let msg = ''
// max = parseInt(prompt("Teclear un número entero"))

// for(contar = max; contar > 0; contar--){
//         msg += contar + ", "
// }
// msg += contar;
// alert(msg)


/*
Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').

Si tecleo el número el número 9 deberá mostrar cinco lineas con los números 0 2 4 6 8
*/

// let par = 0
// let msg = ''
// let contar
// let max
// max = parseInt(prompt("Teclear un número entero"))
// for(contar = 1;par < max; contar++){
//         msg += par + ", "
//         par = contar * 2
// }

// alert(msg)


/*
===== For Of array, String ======

for (variable of objeto){
        código 
}
*/

// let canasta = ["Manzana","Pera","Naranja","Uva"]

// for(fruta of canasta){
//         console.log(fruta);
// }


/*
==== for in ----> objetos

propiedades = Valor

array, string

item
for (Variable in objeto){
código
}

*/

const ListaDeCompra ={
        manzana: 5,
        pera: 3,
        naranja: 2,
        uva: 5
} 

for (fruta in ListaDeCompra) {
        console.log(fruta);
}

for(fruta in ListaDeCompra){
        console.log(`${fruta} : ${ListaDeCompra[fruta]}`);
}

for(fruta of ListaDeCompra){
        console.log(fruta);
}