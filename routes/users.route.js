const express = require("express");
const {Register,Login} = require('../controllers/users.controller.js');
const userRouter = express.Router();


userRouter.post('/register', Register); // Use POST for user creation

userRouter.post('/login', Login); // Use post for user login

module.exports = userRouter;
