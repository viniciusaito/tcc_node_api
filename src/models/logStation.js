const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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

logStationSchema.plugin(mongoosePaginate)

mongoose.model("logStation", logStationSchema)