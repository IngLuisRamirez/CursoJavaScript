/*
this --- Class

this --- Objeto -- Class

*/


class Persona{
    constructor(nombre , edad){
        this.nombre = nombre
        this.edad = edad
    }

}


const personaUno = new Persona('Luis', '23')

console.log(personaUno);

personaUno.nuevoMetodo = function(){
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
}