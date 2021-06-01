// Binding a method to an object
var person = {
    name : "John",
    age : 23,
};

function printName() {
    console.log(this.name);
    console.log(this.age);
}

var boundPrintName = printName.bind(person);
// prints out "John"
// prints out 23
boundPrintName();

// prints out "John"
// prints out 23
printName.call(person);

// call/apply vs bind
var boundPrintName = printName.call(person);
boundPrintName();

printName.bind(person);
printName();