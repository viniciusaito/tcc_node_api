const express = require('express')
const routes = express.Router()

const AdministratorController = require('./controllers/AdministratorController')
const logStationController = require('./controllers/logStationController')
const logUserController = require('./controllers/logUserController')
const SensorController = require('./controllers/SensorController')
const StationController = require('./controllers/StationController')
const UserController = require('./controllers/UserController')

routes.get('/administrator/:id', AdministratorController.show)
routes.get('/alladministrators', AdministratorController.index)
routes.post('/administrator', AdministratorController.store)
routes.put('/administrator/:id', AdministratorController.update)
routes.delete('/administrator/:id', AdministratorController.destroy)

routes.get('/logstation/:id', logStationController.show)
routes.get('/alllogstations', logStationController.index)
routes.post('/logstation', logStationController.store)
routes.put('/logstation/:id', logStationController.update)
routes.delete('/logstation/:id', logStationController.destroy)

routes.get('/loguser/:id', logUserController.show)
routes.get('/alllogusers', logUserController.index)
routes.post('/loguser', logUserController.store)
routes.put('/loguser/:id', logUserController.update)
routes.delete('/loguser/:id', logUserController.destroy)

routes.get('/sensor/:id', SensorController.show)
routes.get('/allsensors', SensorController.index)
routes.post('/sensor', SensorController.store)
routes.put('/sensor/:id', SensorController.update)
routes.delete('/sensor/:id', SensorController.destroy)

routes.get('/station/:id', StationController.show)
routes.get('/allstations', StationController.index)
routes.post('/station', StationController.store)
routes.put('/station/:id', StationController.update)
routes.delete('/station/:id', StationController.destroy)

routes.get('/user/:id', UserController.show)
routes.get('/allusers', UserController.index)
routes.post('/user', UserController.store)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.destroy)

module.exports = routes