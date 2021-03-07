const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    EmpID: {
        type: Number,
        required: true
    },
    EmpName: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('employee',empSchema)