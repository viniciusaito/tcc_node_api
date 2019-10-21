const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const AdministratorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    log: {
        type: Date,
        default: Date.now,
    },
})

AdministratorSchema.plugin(mongoosePaginate)

mongoose.model("Administrator", AdministratorSchema)