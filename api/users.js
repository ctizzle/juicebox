const express = require('express');
const usersRouter = express.Router();
// const { getAllUsers } = require('../db');

usersRouter.use((req, res, next) => {
    console.log("A request is being made to /users");

    next();
});

usersRouter.get('/', async (req, res) => {
    //Uncomment this once Part1 is complete
    // const users = await getAllUsers();

    // res.send({
    //     users
    // });

    //For testing connection, delete when Part 1 is complete
    res.send(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>This is the Users page!</h1>
            </body>
        </html>
    `)
});

module.exports = usersRouter;