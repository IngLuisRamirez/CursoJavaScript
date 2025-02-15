

/*
Estructura de datos
key / value
propiedad  = valor

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor 
}

*/

const persona = {
    altura: 1.78,
    edad: 22,
    nombre: 'Luis',
    direccion: {
        calle:'La Variante',
        ciudad:'Madrid'
    },
    saludar(){
        console.log(`Hola,mi nombre es ${persona.nombre}`);
    } 
}