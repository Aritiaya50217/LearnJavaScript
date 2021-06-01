var myArray = [1,2,3];
var theSameArray = new Array(1,2,3);

// แสดงข้อมูลลำดับที่ 1 
// result = 2
console.log(myArray[1]);

// เพิ่มข้อมูลลงใน index ที่ 3 เป็นคำว่า hello
myArray[3] = "hello"
// result = [ 1, 2, 3, 'hello' ]
console.log(myArray)

// สามารถใส่อะไรก็ได้ลงใน arrays
var myArray = ["string",10,{}]
console.log(myArray)

// Pushing and popping
// craet an empty array and push a few variable
var myStack = [];
// push number 1 in stack
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack);

// pop variables off from the end
// เอาค่าบนสุดออกจาก stack
// result = 3
console.log(myStack.pop());
// result = [ 1, 2 ]
console.log(myStack);

// Queues using shifting and unshifting
// Queue คือ FirstIn - FirstOut (FIFO)
var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.push(3);

// The shift keyword will remove the variables of the array in the exact order they were inserted in
console.log("My Queue :",myQueue);
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());

// The unshift method is used to insert a variable at the beginning of an array

var myQueue2 = [1,2,3];
// เพิ่ม 0 ลงในตำแหน่งแรก ใน array
myQueue2.unshift(0);
console.log(myQueue2);

// Splicing

var myArray2 = [0,1,2,3,4,5,6,7,8,9];
// เก็บค่าตั้งแต่ index 3 นับไป 5 ตัว
// result = [ 3, 4, 5, 6, 7 ]
var splice = myArray2.splice(3,5);
console.log(splice);
// result = [ 0, 1, 2, 8, 9 ]
console.log(myArray2);




