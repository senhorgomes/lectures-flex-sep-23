//HTTP Server

const http = require("http");

const server = http.createServer((request, response) => {
    // We need to send back a response
    // Method -> Tells us alot about the type of request that is being made
    // 4 different methods
    // GET -> Used to identify when a user is retrieving information/html
    // url
    console.log(request.url);
    // Display different content depeneding on the request that is being made?
    if(request.url === "/hello"){
        return response.end("Hello!");
    }
    const randomObject = {
        spookySeason: "Halloween"
    }
    // We can't directly send arrays and objects back as a response
    // We need to convert it into JSON
    if(request.url === "/object"){
        // Why is it important to stringify information and parse it?
        return response.end(JSON.stringify(randomObject))
    }
    if(request.url === "/spooky"){
        // if(request.url === "Eldenring"){
        //     // Show eldenring conten
        // }
        // if(request.url === "Mario"){
        //     // Show mario conten
        // }
        return response.end("<h1>Boo!</h1><p>Welcome to my cool webpage</p>");
    }
    // /r
    // /Eldenring
    // /comments
    // /16ecn01
    // /this_guys_pet_goldfish_beat_godrick_whats_your/
    response.end("Sorry we couldn't handle your request/that page doesn't exist.")
})

server.listen(8080, ()=> {
    console.log("Server is listening!")
})