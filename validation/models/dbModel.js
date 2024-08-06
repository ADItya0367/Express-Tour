const {mongoose} = require('../config/db')

const schema = mongoose.schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const gods = mongoose.model('gods',schema)
module.exports = {gods}