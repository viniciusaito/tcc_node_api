const mongoose = require('mongoose')

const Station = mongoose.model('Station')

module.exports = {
    async index(req, res) {
        const  station = await Station.find()

        return res.json(station)
    },

    async store(req, res) {
        const station = await Station.create(req.body)

        return res.json(station)
    },

    async show(req, res) {
        const station = await Station.findById(req.params.id)

        return res.json(station)
    },

    async update(req, res) {
        const station = await Station.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(station);
    },

    async destroy(req, res) {
        await Station.findByIdAndRemove(req.params.id)

        return res.send()
    }
}