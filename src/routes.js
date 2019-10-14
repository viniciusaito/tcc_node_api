const express = require('express')
const routes = express.Router()

const AdministratorController = require('./controllers/AdministratorController')

routes.get('/administrator/:id', AdministratorController.show)
routes.get('/alladministrators', AdministratorController.index)
routes.post('/administrator', AdministratorController.store)
routes.put('/administrator/:id', AdministratorController.update)
routes.delete('/administrator/:id', AdministratorController.destroy)

module.exports = routes