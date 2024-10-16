// setTimeout(()=> {
//     console.log("Me first please!")
// }, 1)

// for(let i = 0; i < 10; i++){
//     console.log("Number", i)
// }
// for(let i = 0; i < 10; i++){
//     console.log("Number again", i)
// }

const ourTimer = setInterval(()=>{
    console.log("Hello")
}, 1000)

setTimeout(()=> {
    clearInterval(ourTimer)
}, 5500)