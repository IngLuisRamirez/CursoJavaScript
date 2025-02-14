// Methods that iterate over an array
// Methods that DO NOT modify the original arrar (Immutability)

//  Filter()

const number = [1,2,3,4,5,6,7,8,9]
const evenNumbers = number.filter(number => {
     return number % 2 === 0
})

console.log(number);
console.log(evenNumbers);

// Reduce()

const numberReduce = [1,2,3,4,5]
const sum = numberReduce.reduce((acumalator, currentValue) => acumalator + currentValue, 0)

console.log(numberReduce);
console.log(sum);

// Reduce() case 2

const words = ['Work','Apple','Hello','Apple','Hello','Hello']
const wordFrencuency = words.reduce((acumalator,currentValue) => {
    
})