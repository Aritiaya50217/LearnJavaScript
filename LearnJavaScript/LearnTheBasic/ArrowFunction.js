// Arrow functions are often used as callbacks of native JS functions like map, filter or sort. The reason of their name is due to the use of => in the syntax.
// To define an arrow function, we use the () => {} structure as follows

// In this function, the name argument to the greet function is used inside the function to construct a new string and return it using the return statement.
const greet = (name) => {return "Hello " + name + "!!";}
console.log(greet("Eric"));

// In case that the function only receives one argument, we can omit the parenthesis
const greet2 = name => {return "Hello " + name + "!!";}
console.log(greet2("Eric"));

// Using an arrow as a callback compared to a normal function
let numbers = [1,2,3,4,5];
// old way
function multiplyByTwo(number) {
    return number * 2 ;
}
let multipliedNumbers = numbers.map(multiplyByTwo);
console.log(multipliedNumbers);

// Using ES6 arrow functions
const multiplyByTwo2 = number => number * 2 ;
let multipliedNumbers2 = numbers.map(multiplyByTwo2);
console.log(multipliedNumbers2);