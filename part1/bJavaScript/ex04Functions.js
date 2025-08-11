//arrows functions
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result) // 6

//arrow function with only one parameter
//there are 2 lines of code in the function, and it is needed to use curly braces
const square = p => {
    console.log(p)
    return p * p
}

//arrow function with only one parameter and only one line of code
// if we have only one parameter, we can omit the curly braces
const square2 = p => p * p


const result2 = square(100)
console.log(result2) // 4

//one line arrow function is handy when manipulating arrays
const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tsquared = t.map(p => p * p)
console.log(tsquared) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//before ES6, the only way to define a function was using the keyword function
function product(a, b) {
    return a * b
}

console.log(product(2, 3)) // 6

//arrow function with 2 parameters and 1 line of code
const product2 = (a, b) => a * b
console.log(product2(2, 3)) // 6








