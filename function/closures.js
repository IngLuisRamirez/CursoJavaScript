/*
Closure: función que tiene aceso a variables de un ambito externo,incluso despues de que esa funcion haya terminado de ejecutarse

Ámbito léxico: cada vez que se declare un función, crea su propio ambito léxico, y puede acceder a las variables dentro de ese ambito y a las variables en ambito superiores.
*/

function outerFunction(){
    let outerFunction = 'I am from outer function'
    function innterFunction(){
        console.log(outerFunction);
    }
    return innterFunction
}

const closureExample = outerFunction()
function createCounter() {
    let count = 0
    return () =>{
        count++
        console.log(count);
    }
}

const counterA = createCounter()
counterA()
counterA()
const counterB = createCounter()
counterB()


function outer (){
    let msg = "Hello, "
    return name => {
        console.log(`${msg}${name}`);
    }
}

const closureA = outer()
const closureB = outer()

closureA("Luis")
closureB("Ramirez")