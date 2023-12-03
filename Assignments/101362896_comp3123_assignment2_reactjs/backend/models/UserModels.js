const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {type: String, maxLength:100},
    email: {type: String, maxLength: 50, unique: true},
    password: {type: String, maxLength: 50}

})

module.exports = mongoose.model("user", userSchema)