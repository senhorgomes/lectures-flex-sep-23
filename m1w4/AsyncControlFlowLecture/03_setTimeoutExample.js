// setTimeout
// Asynchronous Function Non-Blocking
// Its a timer
// Two arguments, a callback function, and time in ms
// console.log("Line 5");
// setTimeout(()=> console.log("Line 6")); //-> 50 miliseconds
// console.log("Line 7");
// setTimeout(()=> console.log("Line 8"), 0); //-> 3 miliseconds


// "This a sync, blocking function"
// Before?
// "Welcome to Async code!"
// After?

let x = 0

const randomInterval = setInterval(()=> x++, 60000); //-> Only print out hello world 3 times

// clearInterval

// setTimeout(()=>clearInterval(randomInterval),7000);

