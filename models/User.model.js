const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: 'Avatar.png',
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User