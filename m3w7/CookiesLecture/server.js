const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

const users = {
    1: {
        id: 1,
        email: "obiwan@gmail.com",
        password: "hellothere"
    },
    2: {
        id: 2,
        email: "lukeskywalker@gmail.com",
        password: "hellothere"
    },
    3: {
        id: 3,
        email: "leiaskywalker@gmail.com",
        password: "hellothere"
    },
}

const PORT = 3000;

// View engine
app.set('view engine', 'ejs')



// Middleware
app.use(morgan('dev')); //Displays status codes of each request being made to our server
app.use(express.urlencoded({extended:false})); //Create and populate a new key in the request object => body
app.use(cookieParser());
// To handle GET requests

// -> "/"
app.get("/", (req, res)=> {
    res.cookie("timeStamp", Date.now())
    res.render("index");
})

// We want to create a login process
// GET- Login page -> email, password
// Form
// We need a place where the user can input their email and password

app.get("/login", (req, res)=> {
    // If the user is logged in, redirect the user to the profile page
    if(req.cookies.userId){
        return res.redirect("/profile");
    }
    res.render("login");
})

// A way to handle the login information -> POST - /login
app.post("/login", (req, res)=> {
    // After a post request we need a way for a user to land on another page
    // res.render?
    // res.redirect?
    // Post requests should ALWAYS redirect
    console.log(req.body);
    const inputedEmail = req.body.email;
    const inputedPassword = req.body.password;
    // We now have access to the user inputted email, password
    // We handle authentication
    // Check if the email exists in our fake database -> We want to check if the password matches
    // We need to loop through out users object
    const userKeys = Object.keys(users);
    for(const key of userKeys){
        // Check if the email exists in our fake database
        if(inputedEmail === users[key].email){
            // We want to check if the password matches
            if(inputedPassword === users[key].password){
                // Redirect to index
                // Set cookie for the user id
                res.cookie("userId", users[key].email);
                return res.redirect("/profile");
            }
        }
    }
    // else -> Give the user a 404 page/Error page
    // If the user doesnt exist or if they didn't input the password correctly
    res.status(401).send("Your email and/or password are incorrect");
    // res.redirect("https://http.cat/status/401")
})

app.get("/profile", (req, res)=> {
    // Obtain the cookie value
    // cookies are stored in the header of the response
    // const cookie = JSON.parse(req.headers.cookie);
    console.log(req.cookies)
    // userId=obiwan%40gmail.com
    // We are going to check if a user is logged in, by validated their cookie
    if(req.cookies.userId){
        const tempVariable = {
            userEmail: req.cookies.userId,
        }
        return res.render("profile", tempVariable);
    }
    // If the user is not logged in, we want to redirect the user back to the login screen
    res.redirect("/login");
})

app.post("/logout", (req, res)=> {

    // clear the cookie
    // res.cookie("userId", null)
    res.clearCookie("userId");
    // redirect the user to the login page
    res.redirect("/login");
})

app.listen(PORT, ()=> {
    console.log("Our server is up and listening!")
})