const express = require('express');
const { createPostHandler, findAllPostHandler } = require('../controllers/post.controller');


const PostRoute = express.Router();

PostRoute.post('/create', createPostHandler);
PostRoute.get('/find/all', findAllPostHandler);

module.exports = {
    PostRoute
}