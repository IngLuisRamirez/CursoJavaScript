// How to create an array
// 1. new Array() or Array()

const fruits = Array('Apple','banana','orange')
console.log(fruits);

const justOneNumber = Array(12)
console.log(justOneNumber);

const number = Array(1, 2, 3, 4, 5)
console.log(number);


// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber);

const emptyArray = []
console.log(emptyArray);

const sports = ['soccer','tennis','rugby']
console.log(sports);


const recipeIngredents = [
    'Flour',
    true,
    2,
    {
        ingedient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredents);

// 3. Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit);


// length property

const numberOfFruits= fruits.length
console.log(numberOfFruits);

//Mutability

fruits.push('Watermelon')
console.log(fruits);


// Immuntability

const newFruits = fruits.concat(['Grape', 'Kiwi'])
console.log(fruits);
console.log(newFruits);


// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray);


