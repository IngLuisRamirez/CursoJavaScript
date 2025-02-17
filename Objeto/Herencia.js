class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    emirirSonido(){
        console.log('El animal emite un sonido');
    }

}

class Perro extends Animal{
    constructor(nombre,tipo,raza){
        super(nombre,tipo)
        this.raza = raza
    }

    emirirSonido(){
        console.log("El perro ladra");
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perroUno = new Perro('Scooby','Perro','Pitbull')
console.log(perroUno);
perroUno.correr()
perroUno.emirirSonido()

perroUno.nuevoMetodo = function(){
    console.log("Este es un metodo");
}

Perro.prototype.segundoMetodo = function () {
    console.log("Es otro nuevo metodo");
}
