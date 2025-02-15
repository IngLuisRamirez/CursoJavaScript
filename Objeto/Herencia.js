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
}