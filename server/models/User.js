const mongoose = require('mongoose')
const roles = require('../contants/roles')
const job = require('../contants/job')

const UserScheme = mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: [true, 'Пользователь с таким именем уже есть']
    },
    password: {
        type: String,
        required: true
    },
    role_id: {
        type: Number,
        default: roles.READ
    },
    job: {
        type: String,
        default: job.READ
    }
}, {timestamps: true})

const User = mongoose.model('User', UserScheme)

module.exports = User