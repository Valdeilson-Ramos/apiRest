const express = require('express')
const authMiddleware = require('./middlewares/authMiddleware')
const controllers = require('./controllers')

const routes = express.Router()

// routes user
routes.post('/user', controllers.UserController.store)
routes.get('/user', controllers.UserController.list)
routes.delete('/user/:id', controllers.UserController.delete)
routes.post('/session', controllers.SessionController.store)

// middleware
routes.use(authMiddleware)

// routes Ad
routes.get('/ad', controllers.AdController.list)
routes.get('/ad/:id', controllers.AdController.show)
routes.post('/ad', controllers.AdController.store)
routes.put('/ad/:id', controllers.AdController.update)
routes.delete('/ad/:id', controllers.AdController.delete)

module.exports = routes
