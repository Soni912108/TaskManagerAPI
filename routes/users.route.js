const express = require("express");
const {Register,Login} = require('../controllers/users.controller.js');
const userRouter = express.Router();

//routes for users auth, login and register.
userRouter.post('/register', Register);
userRouter.post('/login', Login);

module.exports = userRouter;

