class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const personaUno = new Persona('Luis', 23)
console.log(personaUno);
 personaUno.saludar()

