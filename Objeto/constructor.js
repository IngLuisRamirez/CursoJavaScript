const persona = {
    nombre: 'Luis',
    apellido: 'Ramirez'
}

function Persona(nombre,apellido,edad,id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.id = id;
}

const persona1 = new Persona("Luis", 'Ramirez', 22, 65455)

console.log(persona1);

const persona2 = new Persona('luis','ramirez',22, 3333)
console.log(persona2);

Persona.prototype.telefono = '558-888-8888'
persona1.nacionalidad = 'MXC'

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar()
persona2.saludar()