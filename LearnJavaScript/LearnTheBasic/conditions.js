// The if statement

/* if (confirm("Are you John Smith?"))
{
    console.log("Hello John,how are you ?");
}else {
    console.log("Then what is your name?");
}
*/
// true 
console.log("1" == 1 );
// false
console.log("1" === 1);
// true 
console.log("1" === "1");

var myNumber = 42;
if (myNumber == 42)
{
    console.log("The number is correct.")
}

// Inequality operators can also be used to evaluate expressions

var foo = 1 ;
var bar = 2 ;
if (foo < bar) {
    console.log("foo is smaller than bar.");
}else{
    console.log("bar is smaller than foo.");
}

// To check if two expressions both evaluate to true, use the AND operator &&. To check if at least one of the expressions evaluate to true, use the OR operator ||

var foo = 1 ;
var bar = 2 ;
var moo = 3 ;

if (foo < bar && moo > bar) {
    console.log("foo is smallet than bar AND moo is larger than bar.");
}
if (foo < bar || moo > bar)
{
    console.log("foo is smaller than bar OR moo is larger than bar.");
}

// The NOT operator ! can also be used likewise
var notTrue = false;
if (!notTrue){
    console.log("not not true is true !");
}

// The switch statement
var rank = "Commander";
switch(rank)
{
    case "Private":

    case "Sergeant" :
        console.log("You are not authorized.");
        break;
    case "Commander" :
        console.log("Hello commander ! what can I do for you today ?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;

}

function checkNumber(myNumber)
{
  
    if (myNumber===42)
    {
        console.log("correct");
    }
    else
    {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);
checkNumber(111);