const mongoose = require('mongoose')

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

mongoose.model("Station", StationSchema)