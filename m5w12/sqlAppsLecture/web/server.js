require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
// const pg = require('pg');
const { fetchAllVillains, deleteVillainById} = require('./db/queries/villains-queries');
const port = process.env.PORT || 8000;
const app = express();
// const {Pool} = pg;
app.use(morgan('dev'));
// view engine set to EJS
app.set("view engine", "ejs");
// req.body parser
app.use(express.urlencoded({ extended: true }));

// BREAD=> Browse, Read, Edit, Add, Delete
// CRUD => Create, Read, Update, DELETE
// Endpoints => GET, POST, PUT, DELETE

// Pool connection
// const config = {
//   user: "development",
//   password: "development",
//   // If you're running your database on your own machine, the host will always be localhost, and the port will be 5432
//   host: "localhost",
//   port: 5432,
//   database: "pgintro"
// }
// The pool and client methods are the exact same
// const pool = new Pool(config);

// pool.connect(()=> {
//   console.log("Database connected!")
// })
//Fetch and display all villains in database!
app.get('/', (req, res)=>{
  // Make a query, a select statement and grab all villains
  // Pass it into the index.ejs file as a template variable
    // pool.query('SELECT * FROM movie_villains;')
    // .then((response)=> {
    //   console.log(response.rows);
    fetchAllVillains()
    .then((villainData) => {
      // const movieVillains = response.rows;
      const templateVars = {movieVillains: villainData}
      res.render('index', templateVars);
    })
})
// Delete villains from the database
// DELETE => POST
app.post("/delete/:id", (req, res)=> {

  // pool.query('DELETE FROM movie_villains WHERE id = $1', [req.params.id])
  deleteVillainById(req.params.id)
  .then(()=> {
    res.redirect('/');
  })

})



app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
})
