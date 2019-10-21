const mongoose = require('mongoose')

const Administrator = mongoose.model('Administrator')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const  administrator = await Administrator.paginate({},{page, limit:10})

        return res.json(administrator)
    },

    async store(req, res) {
        const administrator = await Administrator.create(req.body)

        return res.json(administrator)
    },

    async show(req, res) {
        const administrator = await Administrator.findById(req.params.id)

        return res.json(administrator)
    },

    async update(req, res) {
        const administrator = await Administrator.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(administrator);
    },

    async destroy(req, res) {
        await Administrator.findByIdAndRemove(req.params.id)

        return res.send()
    }
}