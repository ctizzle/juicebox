//Needs Part 1 to be completed for it to work
const express = require('express');
const tagsRouter = express.Router();
// const { getAllTags } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log("A request has been made to /tags");

    next();
})

tagsRouter.get('/', async (req, res) => {
    // const tags = await getAllTags();

    // res.send({
    //     tags
    // })

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
                <h1>This is the Tags page!</h1>
            </body>
        </html>
    `)
})


module.exports = tagsRouter;