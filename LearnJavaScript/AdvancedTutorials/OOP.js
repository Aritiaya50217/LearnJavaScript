// Object Oriented
function Person(firstName,lastName) {
    // construct the object using the arguments
    this.firstName = firstName ;
    this.lastName = lastName;

    // a method which returns the full name
    // สร้างฟังก์ชันย่อย
    this.fullName = function(){
        return this.firstName + " " + this.lastName ;
    } 
   
}
var myPerson = new Person("John","Smith");
console.log(myPerson.fullName());

// แบบที่ 2
var myPerson2 = {
    firstName : "John",
    lastName : "Smith",
    fullName : function() {
        return this.firstName + " " + this.lastName ;
    }
}

console.log(myPerson2.fullName());


// Example
var Person = function(firstName,Age) {
    this.firstName = firstName ;
    this.Age = Age ;
    this.describe = function() {
        return this.firstName + ", " + this.Age + " years old ";
    }
}

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());