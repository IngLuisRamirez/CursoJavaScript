/*
===== Operadores Logicos ======
'&&'
'||'
'!'
*/
const a = 10;
const b = 20
const c = '10'

console.log(a == b && a===c); // No se cumple: false , porque a === b si son iguales pero a === c no son iguales y ambas  tienen que ser verdadera

console.log(a != b || a === c); // es true, porque una condicion si se esta cumpliendo

console.log(!(a === c)); //Da true porque se sabe que a no es igual a c por lo tanto da false pero se utiliza el signo de admiración para invertir la ecuación por lo tanto da true :)