// // Methods that iterate over an array.
// // Methods that DO NOT modify the original array (Immutability)

// // map()

// const numbers = [1,2,3,4,5]
// const squareNumbers = numbers.map(num => num * num) 

// console.log(numbers);
// console.log(squareNumbers);


// // ForEach 

// const colors = ['red', 'pink','blue']
// const interatedColors = colors.forEach(color => console.log(color))

// console.log(colors);
// console.log(interatedColors);

// // Exercise: Fahrenheit to Celsius coversion


// const temperaturesInFahrenheit = [32,68,95,104,212]
// const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit -32))

// console.log(temperaturesInFahrenheit);
// console.log(temperaturesInCelsius);

// Sum of Elements in an Array

const newNumbers =[1, 2, 3, 4, 5]
let newSum = 0

newNumbers.forEach(number => {
   newSum += number 
})

console.log(newNumbers);
console.log(newSum);