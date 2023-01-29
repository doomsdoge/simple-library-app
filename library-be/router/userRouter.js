const express = require('express')
const Router = express.Router()

// import Controller
const { userController } = require('../controller')

// import middleware (if any)

// Routing
Router.post('/register', userController.register)
Router.get('/login', userController.login)

module.exports = Router