const mongoose = require('mongoose')

const SensorSchema = new mongoose.Schema({
    stationId:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    datatype:{
        type: String,
        required: true
    },
    datavalue:{
        type: String,
        required: true,
    },
    log: {
        type: Date,
        default: Date.now,
    },
})

mongoose.model("Sensor", SensorSchema)