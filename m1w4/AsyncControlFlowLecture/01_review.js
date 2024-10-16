//Functions

function aRandomFunction(){
    console.log("Hello World!");
}

// const aRandomFunctionDeclaration = () => {

// }

// const aRandomArrowFunction = () => {
//     console.log("I am within an arrow function!")
// }

// Callback? -> A function that gets called within another function



// Higher Order Function? -> A function that takes in another function aka Callback

const aHigherOrderFunction = (callback) => {
    callback();
}

// Calling a function -> Invoking
aHigherOrderFunction(aRandomFunction);
// Refer to a function -> Reference
// aHigherOrderFunction
console.log("After line 26");
