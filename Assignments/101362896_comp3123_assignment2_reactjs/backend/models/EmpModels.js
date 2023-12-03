const mongoose = require('mongoose')

const empSchema = mongoose.Schema({
    first_name: {type: String, maxLength:100, require: true},
    last_name: {type: String, maxLength:50, require: true},
    email: {type: String, maxLength: 50, unique: true},
    gender: {
        type: String, 
        maxLength: 25, 
        enum: ["Male", "Female", "Other"]
    },
    salary: {type: Number, require: true}

})

module.exports = mongoose.model("employees", empSchema)