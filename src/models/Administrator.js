const mongoose = require('mongoose')

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

mongoose.model("Administrator", AdministratorSchema)