// All database queries related to the movie_villains table
// Importing our db connection to make queries
const pool = require('../connection');

const fetchAllVillains = () => {
    return pool.query('SELECT * FROM movie_villains;')
    .then((response)=> {
      return response.rows;  
    })
}

const deleteVillainById = (villainId) => {
    return pool.query('DELETE FROM movie_villains WHERE id = $1', [villainId])
}

// Export these functions so we can use them in our server.js

module.exports = {fetchAllVillains, deleteVillainById}