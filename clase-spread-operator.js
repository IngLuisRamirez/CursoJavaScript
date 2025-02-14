// 1. Copying

const originalArray = [1,2,3,4,5]
const copyOfArray = [...originalArray]
console.log(originalArray);
console.log(copyOfArray);

// 2. Combining Arrays

const array1 = [1,2,3]
const arrar2 = [4,5,6]
const arrayCombininig = [...array1,...arrar2]

console.log(array1);
console.log(arrar2);
console.log(arrayCombininig);

// 3. Create Array with Additional Elements

const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray,4,5,6]

console.log(baseArray);
console.log(arrayWithAdditionalElements);

// 4. Pass elements to functions

function sum(a,b,c) {
    return a + b + c
}

const numbers = [1,2,3]
const result = sum(...numbers)
console.log(result);