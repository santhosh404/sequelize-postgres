const { 
    getUserHandler, 
    createUserHandler, 
    getUserByUuidHandler
} = require('../controllers/user.controller');

const express = require('express');

const UserRoute = express.Router();

UserRoute.get('/find/all', getUserHandler);
UserRoute.post('/create', createUserHandler);
UserRoute.get('/find/:uuid', getUserByUuidHandler);


module.exports = {UserRoute};