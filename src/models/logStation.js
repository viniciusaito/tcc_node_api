const mongoose = require('mongoose')

const logStationSchema = new mongoose.Schema({
    adminId: {
        type: String,
        required: true,
    },
    stationId: {
        type: String,
        required: true,
    },
    log: {
        type: Date,
        default: Date.now,
    },
})

mongoose.model("logStation", logStationSchema)