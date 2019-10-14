const mongoose = require('mongoose')

const Sensor = mongoose.model('Sensor')

module.exports = {
    async index(req, res) {
        const  sensor = await Sensor.find()

        return res.json(sensor)
    },

    async store(req, res) {
        const sensor = await Sensor.create(req.body)

        return res.json(sensor)
    },

    async show(req, res) {
        const sensor = await Sensor.findById(req.params.id)

        return res.json(sensor)
    },

    async update(req, res) {
        const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(sensor);
    },

    async destroy(req, res) {
        await Sensor.findByIdAndRemove(req.params.id)

        return res.send()
    }
}