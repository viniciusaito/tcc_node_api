const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const SensorSchema = new mongoose.Schema({
    stationId:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    geoLocation:{
        type: String,
        required: true
    },
})

SensorSchema.plugin(mongoosePaginate)

mongoose.model("Sensor", SensorSchema)