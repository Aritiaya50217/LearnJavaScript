// The for statement
var i ;
// i เริ่มต้นที่ 0  กำหนดให้ i น้อยกว่า 3 
for (i = 0; i < 3; i = i + 1) {
    console.log(i)
}

// using the ++ operator
// สร้างตัวแปร myArray เก็บค่าใน array
var myArray = ["A","B","C"];
// ตัวแปร x ค่าเริ่มต้นคือ 0 
for (var x = 0; x < myArray.length; x++) {
    console.log("The member of myArray in index " + x + " is " + myArray[x]);
}

//  The while statement
var y = 99 ;
while (y > 0) {
    console.log(y + " bottels of beer on the wall")
    // 99 bottels of beer on the wall ... 1 bottels of beer on the wall
    // แสดงลำดับจากมากไปน้อย
    y -= 1 ;
    // แต่ถ้าใส่ y += 1 คือการบวกเพิ่มทีละ 1 ไปเรื่อย ๆ ไม่มีที่สิ้นสุด
}

// break and continue statements
var a = 99 ;
while(true){
    console.log("Use Break : ",a + " bottles of beer on the wall");
    a -= 1;
    // ถ้า a = 0 ให้หยุดการทำงาน 
    // 99 bottels of beer on the wall ... 1 bottels of beer on the wall
    if (a == 0) {
        break;
    }
}

// The continue statement skips the rest of the loop and jumps back to the beginning of the loop
var b = 99 ;
for (var c = 0; c < 100 ; c++) {
    // check that the number is even
    if (c % 2 == 0) {
        // ตัวไหน % 2 แล้วลงตัว ให้ข้ามไปทำตัวถัดไป 
        // เก็บค่าที่หารไม่ลงตัว
        continue;
    }
    // if we got here,then c is odd.
    // แสดงเลขคี่ออกมา
    console.log(c + " is an odd number.");
}