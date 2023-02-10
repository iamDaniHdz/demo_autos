const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    marca: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
    modelo: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
    año: {
        type: Number,
        required: [true, 'Por favor teclea un valor']
    },
    color: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Auto', autoSchema)