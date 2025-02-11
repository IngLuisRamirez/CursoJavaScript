// //  Capacidades que tiene las funciones al igualque otros objetos

// // 1. pasar funciones como argumentos -> callback

// function a (){

// }

// function b(a){

// }

// b(a)


// // Retornar funciones

// function a(){
//     function b(){
//         return b
//     }
// }


// //Asignar funciones a variables -> Expresion de función

// const a = function(){}

// // tener propiedades y metodos

// function a (){}

// const obj = {}
// a.call(obj)


// //Anidar funciones -> nested function

// function a (){
//     function b() {
//         function c(){

//         }
//         c()
//     }
//     b()
// }
// a()


// Es posible almacenar functiones en objetos?

const rocket = {
    name:'Falcon 9',
    launchMessage: function launchMessage(){
        console.log( '🔥🔥🔥🔥'); 
    }
}

rocket.launchMessage()