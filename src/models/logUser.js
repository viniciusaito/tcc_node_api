const mongoose = require('mongoose')

const logUserSchema = new mongoose.Schema({
    adminId:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: true
    },
    log: {
        type: Date,
        default: Date.now,
    },
})

mongoose.model("logUser", logUserSchema)