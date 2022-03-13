// Create a new project and do npm init
// Create four files called
// add.js ( write function to add 2 numbers and return the value )

// subtract.js ( write function to subtract 2 numbers and return the value )

// multiply.js ( write function to multiply 2 numbers and return the value )

// divide.js ( write function to divide 2 numbers and return the value )

// and then write main.js file where in you will call these functions and do add, subtract, multiply and divide and console.log the answers





const add = require('./add')
const subtract = require('./subtract')

const multiply = require('./multiply')

const divide = require('./divide')

console.log(add(2,4))
console.log(subtract(3,5))
console.log(multiply(3,4))
console.log(divide(5,6))
