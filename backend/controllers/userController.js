const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User  = require('../models/userModel')


//@desc   Register new user
//@route  POST/api/users
//access public

const registerUser = (req, res) => {
    res.json({message: 'Register User' })
}
 //@desc   Authenticate a user
//@route  Router/api/users/login
//access public

const loginUser = (req, res) => {
    res.json({message: 'Login User' })
}
//@desc  Get user data
//@route  GET/api/users/me
//access public

const getMe = (req, res) => {
    res.json({message: 'User data' })
}

module.exports = {
    registerUser,loginUser, getMe,
}