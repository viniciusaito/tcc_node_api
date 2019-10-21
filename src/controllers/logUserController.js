const mongoose = require('mongoose')

const logUser = mongoose.model('logUser')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const  loguser = await logUser.paginate({},{page, limit:10})

        return res.json(loguser)
    },

    async store(req, res) {
        const loguser = await logUser.create(req.body)

        return res.json(loguser)
    },

    async show(req, res) {
        const loguser = await logUser.findById(req.params.id)

        return res.json(loguser)
    },

    async update(req, res) {
        const loguser = await logUser.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(loguser);
    },

    async destroy(req, res) {
        await logUser.findByIdAndRemove(req.params.id)

        return res.send()
    }
}