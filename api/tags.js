
const express = require('express');
const tagsRouter = express.Router();
const { 
    getAllTags,
    getPostsByTagName } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log("A request has been made to /tags");

    next();
})

tagsRouter.get('/', async (req, res) => {
    const tags = await getAllTags();

    res.send({
        tags
    })
})

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const { tagName } = req.params;

    try{
        const getPosts = await getPostsByTagName(tagName);

        const posts = getPosts.filter(post => {
            return post.active && (req.user && post.author.id === req.user.id);
        })

        res.send({ posts: posts});
    } catch ({ name, message }) {
        next({
            name: 'TagNameSearchError',
            message: 'There are no posts with this tag name'
        })
    }
})


module.exports = tagsRouter;