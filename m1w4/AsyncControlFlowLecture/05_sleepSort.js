const numbers = [900, 2,  0, -52, 603, 59, 81, 1];
// Order the array
// Console log the numbers from lowest to highest
// Loop through this array.

// Sort the array
// const sortedArray = numbers.sort()
// console.log(sortedArray)
for(let number of numbers){
    setTimeout(()=> console.log(number), number)
}