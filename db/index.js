// inside db/index.js
const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
const client = new Client('postgres://localhost:5432/juicebox-dev');

async function getAllUsers() {
    const { rows } = await client.query(
        `SELECT id, username
        FROM users;
        `);
    
    return rows;
}

async function createUser({username, password}) {
    try {
        const { rows } = await client.query(`
            INSERT INTO users (username, password) 
            VALUES ($1, $2)
            ON CONFLICT (username) DO NOTHING
            RETURNING *;
        `, [username, password]);

        return rows;
    } catch (error){
        throw error;
    }
}

//Added from Part 2, uncomment once Part1 is complete
// async function getAllTags() {
//     const { rows } = await client.query(`
//         SELECT * FROM tags;
//     `)
// }

module.exports = {
  client,
  getAllUsers,
  createUser,
//   getAllTags   //Added from Part2, uncomment once Part 1 is complete
}