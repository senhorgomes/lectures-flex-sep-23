// How to make a query?
// pg
//BREAD
// Browse => View all information from a table 
// Read => Retrieve a single record, typically a query that uses a where clause
// EDIT => Editing a record/row 
// Add => Inserting a new record/row
// Delete => Delete a record/row
// GET POST PUT DELETE
const pg = require("pg");
const { Client } = pg;
// Where is the database? localhost, ip address, PORT number
// We also need to provide a login to the database

const config = {
    user: "development",
    password: "development",
    // If you're running your database on your own machine, the host will always be localhost, and the port will be 5432
    host: "localhost",
    port: 5432,
    database: "pgintro"
}

const client = new Client(config);

client.connect().then(()=> console.log("Connection made!"));

// client.end()
// This will retrieve all information stored in the movie-villains table
client.query("SELECT * FROM movie_villains;", (error, response)=> {
    if(error){
        console.log("Something broke!", error);
        return;
    }
    // console.log(response.rows);
    console.table(response.rows);
    client.end();
})
const fetchAll = () => {
    client.query("SELECT * FROM movie_villains;")
    .then((res)=> res.rows);
}
// After the query is made, end the connection
fetchAll()
.then((data)=> console.table(data))
.finally(()=> client.end());
