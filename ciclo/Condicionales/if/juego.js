const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número secreto entre el 1 al 10:"));

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log("¡Felicidades, Adivinaste el número secreto!");
}else if(numeroJugador < numeroSecreto && numeroJugador < 10){
    console.log("El numero es demasiado bajo, intenta de nuevo");
}else if(numeroJugador > numeroSecreto && numeroJugador < 10 ){
    console.log("El numero es demasiado alto, intenta de nuevo");
}else{
    console.log("Esta ingresando un dato desconocido, Vuelva intentarlo de nuevo");
}    