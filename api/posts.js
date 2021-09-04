//This will work once I finish Part 1
const express = require('express');
const postsRouter = express.Router();
// const { getAllPosts } = require('../db');

postsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");

    next();
});

postsRouter.get('/', async (req, res) => {
    // const posts = await getAllPosts();

    // res.send({
    //     posts
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
                <h1>This is the Posts Page!</h1>
            </body>
        </html>
    `)
});

module.exports = postsRouter;