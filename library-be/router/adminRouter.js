const express = require('express')
const Router = express.Router()

// import controller
const { adminController } = require('../controller')

// import middleware (if any)

// Routing
Router.post('/login', adminController.login)

module.exports = Router