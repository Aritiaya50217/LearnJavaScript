// Callbacks in JavaScript are functions that are passed as arguments to other functions. This is a very important feature of asynchronous programming, and it enables the function that receives the callback to call our code when it finishes a long task, while allowing us to continue the execution of the code.

// แบบที่ 1
var callback = function() {
    console.log("Done !!");
}
// This code waits 5 seconds and prints out "Done!"
setTimeout(callback,5000);

// แบบที่ 2
setTimeout(function() {
    console.log("Doneeeee!");
}, 5000);

// Example
function useCallback(callback2)
{
    callback2(1);
    callback2(2);
    callback2(3);
}

function callback2(sentence) {
   
    console.log(sentence);
}

useCallback(callback2);