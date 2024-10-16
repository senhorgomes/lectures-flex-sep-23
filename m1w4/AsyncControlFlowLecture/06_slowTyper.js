//Create a function that goes through a string very slowly
const stringExample = "Hello World\n"
//Loop through this string, and console.log each letter
// How do we loop through a string?

// for(const letter of stringExample){
//     setTimeout(()=>process.stdout.write(letter), 1000)
// }


let timer = 1000;
for(let i = 0; i < stringExample.length; i++){
    setInterval(()=>process.stdout.write(stringExample.charAt(i)), timer);
    timer = timer + 1000;
}

//H -> 1000
//e -> 2000
//l -> 3000
//l -> 4000
//o -> 5000

