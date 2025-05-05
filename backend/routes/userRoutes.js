const express = require('express')
const userRouter = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

userRouter.post('/signIn' , [
  check('email').not(),check('password').not()
], userController.signIn)

userRouter.post('/signUp',[
    check('email').not(),check('password').isLength({min : 4}).withMessage('password must be at lease 4 characters')
], userController.signUp)

module.exports = userRouter;