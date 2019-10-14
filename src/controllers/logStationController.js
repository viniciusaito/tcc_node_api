const mongoose = require('mongoose')

const logStation = mongoose.model('logStation')

module.exports = {
    async index(req, res) {
        const  logstation = await logStation.find()

        return res.json(logstation)
    },

    async store(req, res) {
        const logstation = await logStation.create(req.body)

        return res.json(logstation)
    },

    async show(req, res) {
        const logstation = await logStation.findById(req.params.id)

        return res.json(logstation)
    },

    async update(req, res) {
        const logstation = await logStation.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(logstation);
    },

    async destroy(req, res) {
        await logStation.findByIdAndRemove(req.params.id)

        return res.send()
    }
}