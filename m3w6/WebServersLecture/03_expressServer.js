//Express is a routing and middleware framework for building web servers in javascript

const express = require('express');

const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));

// Set our view engine
app.set("view engine", 'ejs');
// app.use(express.static(path.join(__dirname, 'public')))
const port = 3000;

const objectOfPets = {
    dog: "Labrador",
    cat: "Tabby",
    fish: "Goldfish"
}
 // /r
    // /Eldenring
    // /comments
    // /16ecn01
    // /this_guys_pet_goldfish_beat_godrick_whats_your/
// Create a way to handle requests to "/"

// We specify a method, and a path/url
app.get("/", (req, res)=> {
    // req = request
    // res = response
    // res.send("Hello world!")
    // Tell express to render a certain file
    // Create an HTML file for express to render for the user
    const templateVariables = {
        userLoggedIn: false,
        userName: "Bryan"
    }
    res.render("index", templateVariables)
})

app.get("/pet/home", (req, res)=> {
    res.send("Welcome to my pet page!")
})
// /pet/cat
// /pet/dog
// /pet/fish
// params
// Have multiple params? yes there is no limit
app.get("/pet/:type", (req, res)=> {
    console.log(req.params)
    const animalType = req.params.type;
    // The name of the params will be the key
    // res.send(objectOfPets[animalType])
    // We can also pass in template variables for the page to display
    const templateVariables = {
        animal: objectOfPets[animalType],
    }
    res.render("pet", templateVariables);
})


// -> /home

app.get("/home", (req, res)=> {
    // res.sendFile("./samplePage.html")
})




app.listen(port, ()=> {
    console.log("Hey Express is listening!")
})