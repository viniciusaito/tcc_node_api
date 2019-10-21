const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const StationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    geoLocation:{
        type: String,
        required: true,
    },
})

StationSchema.plugin(mongoosePaginate)

mongoose.model("Station", StationSchema)