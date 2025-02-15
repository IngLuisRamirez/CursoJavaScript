/*
Estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: valor
    metodo()
}

*/

const persona = {
    nombre: 'Luis',
    edad:25,
    direccion:{
        calle:'La Variante',
        ciudad:'Since,Sucre'
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    }
}
persona.telefono = '555-555-555-55'
persona.despedir = () => {
    console.log('Adios');   
}
console.log(persona);
persona.saludar()
persona.despedir()

delete persona.telefono;
delete persona.despedir;
console.log(persona);