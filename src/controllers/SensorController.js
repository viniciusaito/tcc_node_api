const mongoose = require('mongoose')

const Sensor = mongoose.model('Sensor')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const  sensor = await Sensor.paginate({},{page, limit:10})

        return res.json(sensor)
    },

    async store(req, res) {
        const sensor = await Sensor.create(req.body)

        return res.json(sensor)
    },

    async show(req, res) {
        var stationId = req.params.stationId
        User.findOne({'stationId':stationId} ,function(err, user){
            if(err) throw err;
            if(stationId==''){
                return done(null, false, {message: 'No sensors found'})
            }
            else return res.json(sensor)
        })
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