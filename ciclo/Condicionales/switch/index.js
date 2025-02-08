// switch(Condicion){
//     case value:
//         //Código que se va ejecutar
//     break;

//     case value2:
//         //Código a ejecutar
//     break;
//     default:
//         //Este es un caso por si lo anteriores no funcionaron
//     break;

// }

let expr = "yuca"
switch (expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo");
    break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo");
    break;
    case "Platanos":
        console.log("Los platanos cuestan $30 el kilo");
    break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 el kilo");
    break;        
    default:
        console.log(`Lo siento, no contamos con: ${expr}`);
    break;
}

console.log("¿Hay algo más que desees?");