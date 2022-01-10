const mongoose = require('mongoose')

const Admin = new mongoose.Schema(
    {
        id: {type: String, required: true, unique: true},
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type:String, required: true, unique: true},
        password: { type: String, required: true },
        
    },

    {collection: 'admin-data'}
)


const model = mongoose.model('AdminData', Admin)

module.exports = model
