const pg = require('pg');
const { Pool } = pg;

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    // If you're running your database on your own machine, the host will always be localhost, and the port will be 5432
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
}
// The pool and client methods are the exact same
const pool = new Pool(config);

pool.connect(() => {
    console.log("Database connected!")
})

module.exports = pool;
