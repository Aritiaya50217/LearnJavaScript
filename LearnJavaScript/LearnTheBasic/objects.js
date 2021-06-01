//  Member addressing

var emptyObject = {};
var personObject = {
    firstName : "John",
    lastName : "Smith"
}
// การเพิ่มข้อมูลลงใน personObject
// แบบที่ 1 ใช้ .
personObject.age = 23 ;
// แบบที่ 2 ใช้ ["..."]
personObject["salary"] = 14000;
console.log(personObject);


// Iteration
for (var member in personObject) {
    if (personObject.hasOwnProperty(member)){
        console.log("the member "+member+" of personObject is " + personObject[member])
    }
}
