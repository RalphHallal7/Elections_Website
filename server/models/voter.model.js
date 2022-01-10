const mongoose = require('mongoose')

const Voter = new mongoose.Schema(
    {
        mat: {type: String, required: true, unique: true},
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type:String, required: true, unique: true},
        password: { type: String, required: true },
        list_id: {type: String},
        ordre_list: {type: String},
        pres_elu: { type: Boolean}
        
    },

    {collection: 'voter-data'}
)


const model = mongoose.model('VoterData', Voter)

module.exports = model
