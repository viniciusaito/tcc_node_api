const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const  user = await User.paginate({},{page, limit:10})

        return res.json(user)
    },

    async store(req, res) {
        const user = await User.create(req.body)

        return res.json(user)
    },

    async show(req, res) {
        var email = req.params.email
        var password = req.params.password
        User.findOne({'email':email} ,function(err, user){
            if(err) throw err;
            if(email==''){
                return done(null, false, {message: 'No user found'})
            }
            else return res.json(user)
        })

        //const user = await User.findById(req.params.id)

        //return res.json(user)
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(user);
    },

    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id)

        return res.send()
    }
}