const mongoose = require('mongoose')

const fakeDataModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Data', fakeDataModel)