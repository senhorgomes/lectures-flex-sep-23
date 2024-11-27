const express = require('express');
const app = express();
const bodyParser = require("body-parser");
//const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const saltRounds = 10;
//Apps for template, injecting text info into the code, and one for cookie encrption
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['ddb870d3e75eb646cad9ae1f1c5167a2', '6d576e63daf9125457889ce9049c5725']
}));
app.use(express.static(__dirname + '/views'));
//Port
const PORT = process.env.PORT || 8080;




//---------------LISTEN APPS------------------------------
 
// Trigger a listen action, on a specific port (8080) and do a callback if it worked
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

//---------------GET APPS------------------------------

app.get("/", (req, res) => {
  res.render("exampleOne");
});

app.get("/exampleTwo", (req, res) => {
  res.render("exampleTwo");
});

app.get("/exampleThree", (req, res) => {
  res.render("exampleThree");
});
