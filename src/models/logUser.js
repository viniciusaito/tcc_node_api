const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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

logUserSchema.plugin(mongoosePaginate)

mongoose.model("logUser", logUserSchema)