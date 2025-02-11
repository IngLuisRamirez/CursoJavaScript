const greeting = function(name){
    return `Hi, ${name}`
}

// arrow function - implicit return
const newGreeting = (name) =>{
    return `Hi, ${name}`
}


// arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitParameters = (name, lastName) => `Hi, ${name} ${lastName}`


// lexical Binding

const finctionalCharater ={
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);        
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);        
    }
}

finctionalCharater.messageWithTraditionalFunction("With great power comes great responsability.")
finctionalCharater.messageWithArrowFunction("Beware of Doctor Octupus.")