const mongoose = require('mongoose')

const Vote = new mongoose.Schema(
    {
        id: {type: String, required: true, unique: true},
        voter_id: { type: String, required: true },
        list_id: { type: String, required: true },
        pres_id: { type:String},
        
    },

    {collection: 'vote-data'}
)


const model = mongoose.model('VoteData', Vote)

module.exports = model
