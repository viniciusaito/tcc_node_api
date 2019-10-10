const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/user/:id', UserController.show)
routes.get('/allusers', UserController.index)
routes.post('/user', UserController.store)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.destroy)

module.exports = routes